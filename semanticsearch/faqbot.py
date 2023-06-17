from sentence_transformers import SentenceTransformer
from elasticsearch import Elasticsearch
from typing import List, Dict

sentence_transformer = SentenceTransformer("bert-base-nli-mean-tokens")

questions = [

    "How do I improve my English speaking? ",

    "How does the ban on 500 and 1000 rupee notes helps to identify black money? ",

    "What should I do to earn money online? ",

    "How can changing 500 and 1000 rupee notes end the black money in India? ",

    "How do I improve my English language? "

]

question_embeddings = sentence_transformer.encode(questions)

es_client = Elasticsearch(["https://localhost:9200"], basic_auth=("saucisse", "wawa02290."), verify_certs=False)

INDEX_NAME = "faq_bot_index"

EMBEDDING_DIMS = 768


def create_index() -> None:

    if es_client.indices.exists(index=INDEX_NAME):
        es_client.indices.delete(index=INDEX_NAME)

    es_client.indices.create(

        index=INDEX_NAME,

        mappings={

            "properties": {

                "embedding": {

                    "type": "dense_vector",

                    "dims": EMBEDDING_DIMS,

                },

                "question": {

                    "type": "text",

                },

                "answer": {

                    "type": "text",

                }

            }

        }

    )


create_index()


def index_qa_pairs(qa_pairs: List[Dict[str, str]]) -> None:

    for qa_pair in qa_pairs:
        question = qa_pair["question"]

        answer = qa_pair["answer"]

        embedding = sentence_transformer.encode(question)

        data = {

            "question": question,

            "embedding": embedding,

            "answer": answer,

        }

        es_client.index(

            index=INDEX_NAME,
            document=data

        )


qa_pairs = [{

    "question": "How do I improve my English speaking? ",

    "answer": "Speak more",

}, {

            "question": "What should I do to earn money online? ",

            "answer": "Learn machine learning",

            }, {

            "question": "How can I improve my skills? ",

            "answer": "More practice",

            }]

index_qa_pairs(qa_pairs)

ENCODER_BOOST = 10


def query_question(question: str, top_n: int = 10) -> List[dict]:
    embedding = sentence_transformer.encode(question)
    es_result = es_client.search(
        index=INDEX_NAME,
        query={
            "script_score": {
                "query": {
                    "match_all": {}
                },
                "script": {
                    "source": """
                        cosineSimilarity(params.query_vector, 'embedding')
                    """,
                    "params": {
                        "query_vector": embedding,
                    },
                },
            }
        }
    )
    print(es_result)
    hits = es_result["hits"]["hits"]
    clean_result = []
    for hit in hits:
        clean_result.append({
            "question": hit["_source"]["question"],
            "answer": hit["_source"]["answer"],
            "score": hit["_score"],
        })

    print(clean_result)
    return clean_result


query_question("How to make my English better?")
