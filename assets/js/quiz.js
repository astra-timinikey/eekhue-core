document.addEventListener("DOMContentLoaded", () => {
  const quizEl = document.getElementById("quiz-container");
  if (!quizEl) return;

  const quizSlug = quizEl.dataset.quiz;
  const quizData = window.siteQuizData[quizSlug]; // Jekyll _data injection

  let currentQ = 0;
  let answers = {};

  function renderQuestion() {
    const q = quizData.questions[currentQ];
    quizEl.innerHTML = `
      <div class="quiz-card">
        ${q.image ? `<img src="${q.image}" alt="" class="quiz-img">` : ""}
        <div class="quiz-content">
          <p class="quiz-text">${q.text}</p>
          <div class="quiz-options">
            ${q.options.map(o =>
              `<button class="quiz-option" data-id="${q.id}" data-value="${o.value}" data-points="${o.points}">
                ${o.text}
              </button>`
            ).join("")}
          </div>
          <div class="quiz-nav">
            <button id="prevBtn" ${currentQ === 0 ? "disabled" : ""}>← Prev</button>
            <button id="nextBtn" disabled>Next →</button>
          </div>
        </div>
      </div>
    `;
  }

  quizEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    // option clicked
    if (btn.classList.contains("quiz-option")) {
      answers[btn.dataset.id] = {
        value: btn.dataset.value,
        points: parseInt(btn.dataset.points, 10) || 0
      };
      // enable "Next"
      quizEl.querySelector("#nextBtn").disabled = false;
    }

    // nav clicked
    if (btn.id === "nextBtn") {
      currentQ++;
      if (currentQ < quizData.questions.length) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    }
    if (btn.id === "prevBtn") {
      currentQ--;
      renderQuestion();
    }
  });

  function finishQuiz() {
    // tally total points
    let total = Object.values(answers).reduce((sum, a) => sum + a.points, 0);
    // pick result bucket
    const result = quizData.results.find(r => total >= r.min && total <= r.max);

    quizEl.innerHTML = `
      <div class="quiz-result">
        <h2>${result.title}</h2>
        <p>${result.description}</p>
        ${result.image ? `<img src="${result.image}" alt="" class="quiz-result-img">` : ""}
      </div>
    `;
  }

  renderQuestion();
});