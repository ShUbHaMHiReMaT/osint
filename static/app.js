// static/app.js - Enhanced with Watch Dogs 2 animations

async function executeMission() {
    const domain = document.getElementById("domain").value;
    const intent = document.getElementById("intent").value;

    if (!domain) {
        showGlitchAlert("⚠️ TARGET DOMAIN REQUIRED");
        return;
    }

    // Show loading animation
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="loading-dots">SCANNING<span>.</span><span>.</span><span>.</span></span>';

    // Add loading animation style
    addLoadingStyle();

    try {
        // API Call
        const res = await fetch("/api/generate-plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domain: domain, intent: intent })
        });

        const data = await res.json();

        if (data.error) {
            showGlitchAlert("❌ ERROR: " + data.error);
            btn.disabled = false;
            btn.innerHTML = originalText;
            return;
        }

        // Success animation
        btn.innerHTML = '✓ SCAN COMPLETE';
        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }, 2000);

        // Render Results with animation
        const resultsArea = document.getElementById("results-area");
        resultsArea.style.display = "block";

        // 1. Render Checklist with typewriter effect
        const checklistDiv = document.getElementById("checklist-container");
        checklistDiv.innerHTML = "";

        data.tactical_plan.forEach((item, index) => {
            setTimeout(() => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'checklist-item';
                itemDiv.style.opacity = '0';
                itemDiv.innerHTML = `
                    <h3>[${item.mitre_id}] ${item.tactic}</h3>
                    <ul>${item.action_items.map(i => `<li>${i}</li>`).join('')}</ul>
                `;
                checklistDiv.appendChild(itemDiv);

                // Fade in animation
                setTimeout(() => {
                    itemDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    itemDiv.style.opacity = '1';
                    itemDiv.style.transform = 'translateX(0)';
                }, 50);
            }, index * 150);
        });

        // 2. Render Google Dorks with staggered animation
        setTimeout(() => {
            renderDorkButtons(data.intelligence_dorks.general_recon, "dorks-general", false);
        }, data.tactical_plan.length * 150 + 200);

        setTimeout(() => {
            renderDorkButtons(data.intelligence_dorks.admin_hunter, "dorks-admin", true);
        }, data.tactical_plan.length * 150 + 400);

    } catch (error) {
        showGlitchAlert("❌ CONNECTION ERROR");
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}

function renderDorkButtons(dorks, containerId, isDanger) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    dorks.forEach((dork, index) => {
        setTimeout(() => {
            const btn = document.createElement("button");
            btn.className = `dork-btn ${isDanger ? 'danger-btn' : ''}`;
            btn.style.opacity = '0';
            btn.style.transform = 'translateX(-20px)';
            btn.innerHTML = `
                ${dork.label}
                <span>${dork.desc}</span>
            `;
            btn.onclick = () => {
                // Add click animation
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = '';
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(dork.query)}`, '_blank');
                }, 100);
            };
            container.appendChild(btn);

            // Fade in animation
            setTimeout(() => {
                btn.style.transition = 'all 0.3s ease';
                btn.style.opacity = '1';
                btn.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });
}

// Glitch alert function
function showGlitchAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'glitch-alert';
    alertDiv.textContent = message;
    alertDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(255, 42, 109, 0.95), rgba(176, 38, 255, 0.95));
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: 700;
        z-index: 10000;
        box-shadow: 0 0 40px rgba(255, 42, 109, 0.8);
        animation: glitchAlert 0.3s ease;
        letter-spacing: 2px;
        text-transform: uppercase;
        border: 2px solid rgba(255, 255, 255, 0.3);
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.style.animation = 'glitchAlertOut 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 2500);
}

// Add loading animation styles dynamically
function addLoadingStyle() {
    if (!document.getElementById('loading-style')) {
        const style = document.createElement('style');
        style.id = 'loading-style';
        style.textContent = `
            .loading-dots span {
                animation: dotPulse 1.4s infinite;
                opacity: 0;
            }
            .loading-dots span:nth-child(2) {
                animation-delay: 0.2s;
            }
            .loading-dots span:nth-child(3) {
                animation-delay: 0.4s;
            }
            .loading-dots span:nth-child(4) {
                animation-delay: 0.6s;
            }
            @keyframes dotPulse {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }
            @keyframes glitchAlert {
                0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
                50% { transform: translate(-48%, -52%) scale(1.05); }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes glitchAlertOut {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add particle effect on page load
window.addEventListener('load', () => {
    createParticles();
});

function createParticles() {
    const particleCount = 20;
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 217, 255, 0.6);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: particleDrift ${10 + Math.random() * 20}s linear infinite;
            box-shadow: 0 0 10px rgba(0, 217, 255, 0.8);
        `;
        container.appendChild(particle);
    }

    // Add particle animation
    if (!document.getElementById('particle-style')) {
        const style = document.createElement('style');
        style.id = 'particle-style';
        style.textContent = `
            @keyframes particleDrift {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(container);
}