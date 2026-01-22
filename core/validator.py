import re

DOMAIN_REGEX = r"^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$"

def validate_domain(domain: str) -> bool:
    return bool(re.match(DOMAIN_REGEX, domain))
