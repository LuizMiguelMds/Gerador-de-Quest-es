from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import random

app = FastAPI()

# Liberação do Cors para o front
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=true,
    allow_methods=["*"],
    allow_headers=["*"],
)

df = pd.read_excel("Banco de Questões - Geografia.xlsx")

df = df[df["Enuciado"],notna() & df["Resposta correta"].notna()]

