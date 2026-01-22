INTENTS = {
    "crash_server": {
        "label": "💥 Crash a Server",
        "description": "Identify weaknesses that could lead to denial of service",
        "techniques": [
            {
                "id": "T1499",
                "name": "Endpoint Denial of Service",
                "what_to_look_for": [
                    "Unprotected services",
                    "No rate limiting",
                    "Single points of failure"
                ]
            },
            {
                "id": "T1046",
                "name": "Network Service Discovery",
                "what_to_look_for": [
                    "Open ports",
                    "Exposed management services"
                ]
            }
        ]
    },

    "steal_data": {
        "label": "📦 Steal Sensitive Data",
        "description": "Identify exposure paths to sensitive information",
        "techniques": [
            {
                "id": "T1213",
                "name": "Data from Information Repositories",
                "what_to_look_for": [
                    "Public documents",
                    "Open directories",
                    "Cloud storage leaks"
                ]
            }
        ]
    },

    "take_over_account": {
        "label": "🔓 Take Over an Account",
        "description": "Identify authentication weaknesses",
        "techniques": [
            {
                "id": "T1110",
                "name": "Brute Force",
                "what_to_look_for": [
                    "Login portals",
                    "No CAPTCHA",
                    "Weak password policy"
                ]
            }
        ]
    }
}
