# mitre/intents.py

INTENTS = {
    "infra_audit": {
        "label": "💥 Infrastructure Audit",
        "description": "Assess server stability and resilience against denial of service.",
        "techniques": [
            {
                "id": "T1499",
                "name": "Endpoint Weakness ID",
                "focus": ["Unprotected APIs", "Missing Rate Limits", "XMLRPC Interfaces"]
            },
            {
                "id": "T1046",
                "name": "Service Discovery",
                "focus": ["Open Ports", "Default Pages", "Exposed Dashboards"]
            }
        ]
    },
    "data_exfil": {
        "label": "📦 Data Leakage Check",
        "description": "Identify publicly exposed sensitive files and directories.",
        "techniques": [
            {
                "id": "T1213",
                "name": "Repository Mining",
                "focus": ["Public S3 Buckets", "Git Logs", "Backup Files (.bak, .sql)"]
            }
        ]
    },
    "access_validation": {
        "label": "🔓 Access Control Validation",
        "description": "Locate administrative entry points and authentication gaps.",
        "techniques": [
            {
                "id": "T1110",
                "name": "Auth Surface Mapping",
                "focus": ["Admin Portals", "Forgot Password Flows", "No-Captcha Forms"]
            }
        ]
    }
}