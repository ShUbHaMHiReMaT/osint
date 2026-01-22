# recon/passive.py

def generate_checklist(technique):
    """
    Creates a tactical checklist item for the frontend.
    """
    return {
        "mitre_id": technique["id"],
        "tactic": technique["name"],
        "action_items": technique["focus"],
        "status": "PENDING_REVIEW"
    }