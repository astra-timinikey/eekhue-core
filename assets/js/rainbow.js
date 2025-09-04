// assets/js/rainbow.js
document.addEventListener("DOMContentLoaded", () => {

  // Grab all the rainbow triggers
  const rainbowColors = document.querySelectorAll(".rainbow-color");
  const personaCards = document.querySelectorAll(".persona-card");

  // Helper to hide all cards
  function hideAllCards() {
    personaCards.forEach(card => card.style.display = "none");
  }

  // Initialize: hide all cards
  hideAllCards();

  // Add click listeners to each rainbow color
  rainbowColors.forEach(colorEl => {
    colorEl.addEventListener("click", () => {
      const targetId = colorEl.dataset.persona; // e.g. "creative-performer"
      const targetCard = document.getElementById(targetId);

      if (!targetCard) return;

      // Toggle visibility
      if (targetCard.style.display === "block") {
        targetCard.style.display = "none";
      } else {
        hideAllCards(); // hide other cards
        targetCard.style.display = "block"; // show this card
      }
    });
  });

  // Optional: close card when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside = [...personaCards, ...rainbowColors].some(el => el.contains(e.target));
    if (!clickedInside) hideAllCards();
  });

});