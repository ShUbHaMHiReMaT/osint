# app.py

from flask import Flask, render_template, request, jsonify, redirect, url_for
from mitre.mapper import get_intents, resolve_intent
from recon.passive import generate_checklist
from core.validator import validate_domain
from recon.google import generate_dorks
import config
import os

app = Flask(__name__)
app.config.from_object(config)

@app.route("/")
def dashboard():
    """Renders the main advanced dashboard."""
    return render_template("dashboard.html", intents=get_intents())

@app.route("/api/generate-plan", methods=["POST"])
def generate_plan_api():
    """
    API Endpoint: Receives domain & intent, returns a tactical plan + dorks.
    """
    data = request.json
    intent_key = data.get("intent")
    domain = data.get("domain")

    # 1. Validation
    if not domain or not validate_domain(domain):
        return jsonify({"error": "Invalid or missing domain name."}), 400

    intent = resolve_intent(intent_key)
    if not intent:
        return jsonify({"error": "Selected intent is invalid."}), 400

    # 2. Logic Execution
    # Generate the MITRE-based checklist
    checklist = [generate_checklist(t) for t in intent["techniques"]]
    
    # Generate the Admin Hunter Dorks
    dorks = generate_dorks(domain)

    # 3. Response Construction
    return jsonify({
        "status": "success",
        "target": domain,
        "mission_profile": {
            "goal": intent["label"],
            "description": intent["description"],
            "id": intent_key
        },
        "tactical_plan": checklist,
        "intelligence_dorks": dorks
    })
    
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
