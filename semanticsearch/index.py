import pandas as pd
import elasticsearch
import numpy as np
import json
import os
import uuid
from sentence_transformers import SentenceTransformer, util
from elasticsearch import Elasticsearch
from elasticsearch import helpers
from pymongo import MongoClient

# replace the "<MongoDB_URI>" with your MongoDB URI
MongoDB_URI = "mongodb+srv://nuxnux:wawa02290@vietnam-internship.4a27gwy.mongodb.net/vietnam-internship"

client = MongoClient(MongoDB_URI)
db = client['vietnam-internship']  # specify the database name
collection = db['Product']  # specify the collection name

object_id_strings = []
# use a for loop to append string representation of each ObjectId in the collection
for document in collection.find():
    object_id_strings.append(str(document['_id']))

es_client = Elasticsearch(cloud_id=("ecommerce:YXNpYS1ub3J0aGVhc3QxLmdjcC5jbG91ZC5lcy5pbyRhYjQ2OGE3MjA2MDU0M2E1ODkwNDUwN2Y0NWI5MGM2ZiRhYzYzNmRiZWM4MTM0ZDZhYWM3ZWMzMTc1MzRkYTlhMw=="), basic_auth=("elastic", "apwIfqYEqPtiFjBrRDoW5Kpc"))

model = SentenceTransformer('multi-qa-mpnet-base-dot-v1')
INDEX_NAME = "semantic"


class Tokenizer(object):
    def __init__(self):
        self.model = SentenceTransformer('multi-qa-mpnet-base-dot-v1')

    def get_token(self, documents):
        sentences = [documents]
        sentence_embeddings = self.model.encode(sentences)
        return list(sentence_embeddings.flatten())


token_instance = Tokenizer()


df = pd.read_csv("data.csv")


dataset = df.head(len(df.index))

dataset.loc[:, 'name_vector'] = dataset['name'].apply(token_instance.get_token)
dataset.loc[:, 'description_vector'] = dataset['description'].apply(token_instance.get_token)


def wrapper(x):
    encod_np_array = np.array(x)
    encod_list = encod_np_array.tolist()
    return encod_list


dataset['name_vector'] = dataset['name_vector'].apply(wrapper)
dataset['description_vector'] = dataset['description_vector'].apply(wrapper)


if es_client.indices.exists(index=INDEX_NAME):
    es_client.indices.delete(index=INDEX_NAME)

es_client.indices.create(

    index=INDEX_NAME,

    settings={
        "index": {
            "number_of_shards": 20,
            "number_of_replicas": 1,
            }
    },

    mappings={
        "properties": {
            "id": {
                "type": "text"
            },
            "name": {
                "type": "text"
            },
            "name_vector": {
                "type": "dense_vector",
                "dims": 768,
                "index": True,
                "similarity": "cosine"
            },
            "description": {
                "type": "text"
            },
            "description_vector": {
                "type": "dense_vector",
                "dims": 768,
                "index": True,
                "similarity": "cosine"
            }
        }
    }

)

dataset = dataset.dropna(how='all')
elk_data = dataset.to_dict("records")

jobs = []
for id, x in zip(object_id_strings, elk_data):
    _ = {
        "id": id,
        "name": x.get("name", ""),
        "name_vector": x.get("name_vector", []),
        "description": x.get("description", ""),
        "description_vector": x.get("description_vector", [])
    }
    jobs.append(_)

for job in jobs:
    try:
        es_client.index(index='semantic', body=job)
    except Exception as e:
        print(e)
        pass

