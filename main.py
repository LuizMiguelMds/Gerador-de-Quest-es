from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import random

app = FastAPI()

# Liberação do Cors para o front
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Leitura da planilha
df = pd.read_excel("Banco de Questões - Geografia.xlsx")

#tratamento para remover linhas vazias e incompletas
df = df[df["Enuciado"].notna() & df["Resposta correta"].notna()]

@app.get("/questao")
def get_questao():
    questao = df.sample(1).iloc[0]  # Pega uma questão aleatória
    return {
        "id": questao["ID Questão"],
        "enuciado": questao["Enuciado"],
        "alternativas": {
            "A": questao["A"],
            "B": questao["B"],
            "C": questao["C"],
            "D": questao["D"],
            "E": questao["E"]
        },
        "resposta_correta": questao["Resposta correta"],
        "resposta_texto": questao["Texto da resposta correta"]
    }