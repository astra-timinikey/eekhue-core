document.addEventListener("DOMContentLoaded", () => {
    const quizEl = document.getElementById("quiz-container");
    if (!quizEl) return;
  
    const quizSlug = quizEl.dataset.quiz;
    const quizData = window.siteQuizData[quizSlug]; // injected via Jekyll
  
    let currentQ = 0;
    let answers = {};
  
    function renderQuestion() {
      const q = quizData.questions[currentQ];
      quizEl.innerHTML = `
        <p>${q.text}</p>
        ${q.options.map(o => 
          `<button data-id="${q.id}" data-value="${o.value}">${o.text}</button>`
        ).join("")}
      `;
    }
  
    quizEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
  
      answers[btn.dataset.id] = btn.dataset.value;
      currentQ++;
  
      if (currentQ < quizData.questions.length) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    });
  
    function finishQuiz() {
      // Count dominant value
      let counts = {};
      Object.values(answers).forEach(v => counts[v] = (counts[v] || 0) + 1);
      let top = Object.keys(counts).sort((a,b) => counts[b]-counts[a])[0];
      let result = quizData.results[top];
  
      quizEl.innerHTML = `<h2>${result.title}</h2><p>${result.description}</p>`;
      setTimeout(() => { window.location.href = result.redirect; }, 1500);
    }
  
    renderQuestion();
  });
  