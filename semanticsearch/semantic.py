import pandas as pd
import elasticsearch
import numpy as np
import json
import os
import uuid
from sentence_transformers import SentenceTransformer, util
from elasticsearch import Elasticsearch
from elasticsearch import helpers
from starlette.middleware.cors import CORSMiddleware
from fastapi import FastAPI

es_client = Elasticsearch(cloud_id=("ecommerce:YXNpYS1ub3J0aGVhc3QxLmdjcC5jbG91ZC5lcy5pbyRhYjQ2OGE3MjA2MDU0M2E1ODkwNDUwN2Y0NWI5MGM2ZiRhYzYzNmRiZWM4MTM0ZDZhYWM3ZWMzMTc1MzRkYTlhMw=="), basic_auth=("elastic", "apwIfqYEqPtiFjBrRDoW5Kpc"))

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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


# Convert your query into a vector
def query_product(query):
    query_vector = token_instance.get_token(query)

    search_query = {
        "size": 10,
        "query": {
            "match": {
              "title": {
                "query": query,
                "boost": 0.1
              }
            }
        },
        "knn": [{
            "field": "name_vector",
            "k": 4,
            "query_vector": query_vector,
            "num_candidates": 100,
            "boost": 0.6
            },
            {
            "field": "description_vector",
            "k": 4,
            "query_vector": query_vector,
            "num_candidates": 100,
            "boost": 0.2
            }
        ],
        "_source": ["id"]
    }
# Execute the search query
    res = es_client.search(
        index=INDEX_NAME,
        body=search_query,
    )
    saucisse = []
    for hit in res['hits']['hits']:
        saucisse.append(hit['_source'])
    return saucisse


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/query/{query}")
async def query(query):
    return {"saucisse": query_product(query)}
