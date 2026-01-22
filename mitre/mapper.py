# mitre/mapper.py
from mitre.intents import INTENTS

def get_intents():
    return {k: {"label": v["label"]} for k, v in INTENTS.items()}

def resolve_intent(key):
    return INTENTS.get(key)