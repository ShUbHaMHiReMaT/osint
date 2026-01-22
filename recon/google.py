# recon/google.py

def generate_dorks(domain):
    """
    Generates advanced Google Dorks based on the 'Admin Hunter' methodology.
    Returns a structured dictionary of dork categories.
    """
    base = f"site:{domain}"

    return {
        "general_recon": [
            {
                "label": "📂 Public Documents",
                "desc": "PDF, DOCX, XLSX, PPTX",
                "query": f'{base} (ext:pdf OR ext:docx OR ext:xlsx OR ext:pptx OR ext:txt)'
            },
            {
                "label": "⚙️ Config & Env Files",
                "desc": "xml, conf, env, reg, inf",
                "query": f'{base} (ext:xml OR ext:conf OR ext:cnf OR ext:reg OR ext:inf OR ext:rdp OR ext:env)'
            },
            {
                "label": "🌐 Subdomain Scan",
                "desc": "Exclude www to find subs",
                "query": f'{base} -www'
            },
            {
                "label": "📝 Pastebin Leaks",
                "desc": "Code/Creds on Pastebin",
                "query": f'site:pastebin.com "{domain}"'
            }
        ],
        "admin_hunter": [
            {
                "label": "🔑 Standard Login",
                "desc": "admin, login, portal",
                "query": f'{base} (inurl:admin OR inurl:login OR inurl:adminlogin OR inurl:cpanel OR intitle:"login" OR intitle:"admin")'
            },
            {
                "label": "🕵️ Alternative Portals",
                "desc": "dashboard, backoffice, cms",
                "query": f'{base} (inurl:dashboard OR inurl:panel OR inurl:account OR inurl:root OR inurl:cms OR inurl:backoffice OR inurl:auth)'
            },
            {
                "label": "🆕 Registration Pages",
                "desc": "signup, register, join",
                "query": f'{base} (inurl:signup OR inurl:register OR intitle:"Sign up" OR intitle:"Register")'
            },
            {
                "label": "⚠️ Install/Setup Files",
                "desc": "install.php, readme.md",
                "query": f'{base} (inurl:readme OR inurl:license OR inurl:install OR inurl:setup OR inurl:config)'
            }
        ]
    }