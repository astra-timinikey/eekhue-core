/* ==============================
 XP Progress System
 Shared across homepage + quiz
 Uses localStorage + YAML data
============================== */
document.addEventListener("DOMContentLoaded", () => {
  const xpFill    = document.getElementById("xpFill");
  const xpLabel   = document.getElementById("xpLabel");
  const xpMessage = document.getElementById("xpMessage");
  const REPLAY_ID = "xpReplayBtn";

  let currentXP   = parseInt(localStorage.getItem("eekhueXP")) || 0;

  // --- Milestones (from 5 realm nodes = 55%) ---
  const milestones = [
    { percent: 0,   text: "Begin your journey..." },
    { percent: 11,  text: "🌀 Exploring your Self..." },
    { percent: 22,  text: "🌑 Meeting your Shadow..." },
    { percent: 33,  text: "🛡️ Growing your Persona..." },
    { percent: 44,  text: "⚔️ Re-equipping your path..." },
    { percent: 55,  text: "🧭 Rerouting connections..." },
    { percent: 100, text: "✨ Integration unlocked!" }
  ];

  // --- Helpers ---
  function getMilestoneMessage(progress) {
    let msg = milestones[0].text;
    for (let m of milestones) {
      if (progress >= m.percent) msg = m.text;
    }
    return msg;
  }

  function updateXPBar() {
    xpFill.style.width = currentXP + "%";
    xpLabel.textContent = `XP: ${currentXP}%`;
    xpMessage.textContent = getMilestoneMessage(currentXP);

    localStorage.setItem("eekhueXP", currentXP);
    localStorage.setItem("eekhueXPMsg", xpMessage.textContent);

    // When XP hits 100, show replay button if not already there
    if (currentXP >= 100 && !document.getElementById(REPLAY_ID)) {
      const replayBtn = document.createElement("button");
      replayBtn.id = REPLAY_ID;
      replayBtn.textContent = "🔄 Replay Journey";
      replayBtn.className = "xp-replay";
      replayBtn.addEventListener("click", resetXP);
      document.body.appendChild(replayBtn);
    }
  }

  function addXP(amount) {
    currentXP = Math.min(100, currentXP + amount);
    updateXPBar();
  }

  function resetXP() {
    currentXP = 0;
    localStorage.removeItem("eekhueXP");
    localStorage.removeItem("eekhueXPMsg");
    const btn = document.getElementById(REPLAY_ID);
    if (btn) btn.remove();
    updateXPBar();
  }

  // --- Init ---
  updateXPBar();

  // --- Realm node clicks (homepage only, safe no-op on quiz page) ---
  document.querySelectorAll(".realm-node").forEach(node => {
    node.addEventListener("click", () => addXP(11)); // 5 realms × 11% = 55%
  });
  
  // --- Quiz page spam button --- 
  const spamBtn = document.getElementById("spamBtn");
  const spamMessage = document.getElementById("spamMessage");
  let spamIndex = 0;

  if (spamBtn && spamMessage && Array.isArray(xpMessages)) {
    spamBtn.addEventListener("click", () => {
      // Pick a random message from YAML data
      const msgObj = xpMessages[Math.floor(Math.random() * xpMessages.length)];
    
      // Update button text and badge message
      spamBtn.textContent = msgObj.button;
      spamMessage.textContent = msgObj.message;
    
      // Add XP
      addXP(msgObj.xp);
    });
  }
  
  
});