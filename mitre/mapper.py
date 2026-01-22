from mitre.intents import INTENTS

def get_intents():
    return {
        k: {
            "label": v["label"],
            "description": v["description"]
        }
        for k, v in INTENTS.items()
    }

def resolve_intent(intent_key):
    return INTENTS.get(intent_key)
