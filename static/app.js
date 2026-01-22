// static/app.js

async function executeMission() {
    const domain = document.getElementById("domain").value;
    const intent = document.getElementById("intent").value;
    
    if(!domain) { alert("Target domain required."); return; }

    // API Call
    const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ domain: domain, intent: intent })
    });

    const data = await res.json();
    
    if(data.error) { alert(data.error); return; }

    // Render Results
    document.getElementById("results-area").style.display = "block";
    
    // 1. Render Checklist
    const checklistDiv = document.getElementById("checklist-container");
    checklistDiv.innerHTML = "";
    data.tactical_plan.forEach(item => {
        checklistDiv.innerHTML += `
            <div class="checklist-item">
                <h3>[${item.mitre_id}] ${item.tactic}</h3>
                <ul>${item.action_items.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
        `;
    });

    // 2. Render Google Dorks
    renderDorkButtons(data.intelligence_dorks.general_recon, "dorks-general", false);
    renderDorkButtons(data.intelligence_dorks.admin_hunter, "dorks-admin", true);
}

function renderDorkButtons(dorks, containerId, isDanger) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    
    dorks.forEach(dork => {
        const btn = document.createElement("button");
        btn.className = `dork-btn ${isDanger ? 'danger-btn' : ''}`;
        btn.innerHTML = `
            ${dork.label}
            <span>${dork.desc}</span>
        `;
        btn.onclick = () => window.open(`https://www.google.com/search?q=${encodeURIComponent(dork.query)}`, '_blank');
        container.appendChild(btn);
    });
}