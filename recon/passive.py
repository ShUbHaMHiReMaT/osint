def recon_checklist(technique):
    return {
        "technique": technique["name"],
        "checks": technique["what_to_look_for"],
        "status": "manual investigation required"
    }
