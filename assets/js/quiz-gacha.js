document.addEventListener("DOMContentLoaded", () => {
  const topCardEl = document.querySelector("#gacha-top-frame .gacha-card");
  const topCardInner = topCardEl.querySelector(".gacha-card-inner");
  const frontEl = topCardEl.querySelector(".gacha-card-front");
  const backfaceEl = topCardEl.querySelector(".gacha-card-backface");

  const deckCards = document.querySelectorAll(".gacha-card-back");
  const dropdown = document.querySelector("#quiz-selector");

  // Utility: Load quiz info into top card front
  function loadQuizToTop(slug) {
    const quizData = window.siteQuizData[slug];
    if (!quizData) return;

    frontEl.innerHTML = `
      <h2>${quizData.title}</h2>
      <p>${quizData.description || ""}</p>
      <button class="gacha-attempt-btn" data-slug="${slug}">Attempt Quiz</button>
    `;

    // Reset flip state to front
    topCardEl.classList.remove("flipped");
  }

  // Handle clicking "Attempt Quiz" button inside top card
  frontEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".gacha-attempt-btn");
    if (!btn) return;

    const slug = btn.dataset.slug;
    if (!slug) return;

    // Update URL
    const newUrl = `${window.location.pathname}?id=${slug}`;
    window.history.pushState({ slug }, "", newUrl);

    // Load quiz into quiz container
    const quizContainer = document.querySelector("#quiz-container-1");
    if (quizContainer && window.siteQuizData[slug]) {
      quizContainer.innerHTML = "";
      initializeQuiz(quizContainer, slug);
    }
  });

  // Handle deck card click → load top card & flip
  deckCards.forEach(card => {
    card.addEventListener("click", () => {
      const slug = card.dataset.slug;
      if (!slug) return;

      loadQuizToTop(slug);
      // Flip top card to reveal front content
      topCardEl.classList.add("flipped");
    });
  });

  // Handle dropdown selection
  if (dropdown) {
    dropdown.addEventListener("change", (e) => {
      const slug = e.target.value;
      if (!slug) return;

      loadQuizToTop(slug);
      topCardEl.classList.add("flipped");
    });
  }

  // On page load: check ?id= query param
  const urlParams = new URLSearchParams(window.location.search);
  const quizId = urlParams.get("id");
  if (quizId && window.siteQuizData[quizId]) {
    loadQuizToTop(quizId);
    topCardEl.classList.add("flipped");

    const quizContainer = document.querySelector("#quiz-container-1");
    if (quizContainer) {
      quizContainer.innerHTML = "";
      initializeQuiz(quizContainer, quizId);
    }
  }
});
