def google_dorks(domain, intent_key):
    base = f"site:{domain}"

    COMMON = [
        f'{base} ext:pdf OR ext:docx OR ext:xlsx',
        f'{base} ext:env OR ext:xml OR ext:conf',
        f'{base} intitle:"index of"'
    ]

    INTENT_DORKS = {
        "crash_server": [
            f'{base} inurl:admin OR inurl:dashboard',
            f'{base} inurl:status OR inurl:health',
            f'{base} "server status"'
        ],
        "steal_data": [
            f'{base} "confidential"',
            f'{base} "internal use only"',
            f'{base} ext:sql OR ext:bak'
        ],
        "take_over_account": [
            f'{base} inurl:login OR inurl:signin',
            f'{base} inurl:reset OR inurl:forgot',
            f'{base} intitle:"login"'
        ]
    }

    return {
        "common": COMMON,
        "intent_specific": INTENT_DORKS.get(intent_key, [])
    }
