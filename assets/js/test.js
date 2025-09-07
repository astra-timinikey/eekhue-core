document.addEventListener("DOMContentLoaded", () => {

  function getAccent() {
    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue("--accent") || "#7aa2f7";
  }

  /* -------------------------
     HTTP fetch demo
     ------------------------- */
  const fetchBtn = document.getElementById("fetchBtn");
  const fetchOutput = document.getElementById("fetchOutput");

  if (fetchBtn && fetchOutput) {
    fetchBtn.addEventListener("click", async () => {
      fetchOutput.textContent = "Fetching...";
      console.log("Fetching data...");
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await resp.json();
        console.log("Data received:", data);
        fetchOutput.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        console.error("Fetch error:", err);
        fetchOutput.textContent = "Error fetching data: " + err;
      }
    });
  }

  /* -------------------------
     Multi-step Personality Quiz
     ------------------------- */
  const quiz = document.getElementById("quiz");
  const quizOutput = document.getElementById("quiz-output");
  const quizDataEl = document.getElementById("quizData");

  if (quiz && quizOutput && quizDataEl) {
    let answers = {};

    // helper to render next set of buttons
    function renderQ2() {
      quiz.innerHTML = `
        <p>Q2: How do you approach challenges?</p>
        <button data-question="q2" data-answer="hands-on">🛠 Hands-on experimentation</button>
        <button data-question="q2" data-answer="planning">📋 Careful planning</button>
      `;
    }

    quiz.addEventListener("click", (e) => {
      const target = e.target;
      if (!target || !target.dataset || !target.dataset.answer) return;

      const question = target.dataset.question;
      const answer = target.dataset.answer;
      answers[question] = answer;
      quizDataEl.value = JSON.stringify(answers);
      console.log("Quiz — current answers:", answers);

      // show immediate feedback
      quizOutput.textContent = `You answered ${answer}`;

      if (question === "q1") {
        // move to Q2
        setTimeout(renderQ2, 300);
        return;
      }

      if (question === "q2") {
        // decide persona and redirect after slight delay
        quizOutput.textContent = "Processing your personality...";
        const isGadgetTinker = answers.q1 === "gadget" && answers.q2 === "hands-on";
        const targetRel = isGadgetTinker ? "persona/gadget-tinker.html" : "persona/creative-performer.html";
        const targetUrl = joinPath(targetRel);
        console.log("Final answers:", answers);
        console.log("Redirecting to:", targetUrl);

        setTimeout(() => {
          window.location.href = targetUrl;
        }, 900);
      }
    });
  }
});
   
