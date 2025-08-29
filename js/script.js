document.addEventListener("DOMContentLoaded", () => {
  // --- Click counter ---
  const btn = document.getElementById("helloBtn");
  const resetBtn = document.getElementById("resetBtn");
  const output = document.getElementById("output");
  let clickCount = 0;
  const emojis = ["🎉","🚀","✨","🔥","🌟","💡","🎈"];

  btn.addEventListener("click", () => {
    clickCount++;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    if (clickCount % 10 === 0) {
      output.textContent = `${emoji} Wow! You reached ${clickCount} clicks! ${emoji}`;
    } else if (clickCount % 5 === 0) {
      output.textContent = `${emoji} Nice! ${clickCount} clicks already! ${emoji}`;
    } else {
      output.textContent = `${emoji} JavaScript works! Clicked ${clickCount} times. ${emoji}`;
    }

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    output.style.color = `rgb(${r}, ${g}, ${b})`;

    output.style.transform = "scale(1.1)";
    setTimeout(() => { output.style.transform = "scale(1)"; }, 150);
  });

  resetBtn.addEventListener("click", () => {
    clickCount = 0;
    output.textContent = "Counter reset!";
    output.style.color = varAccent();
    output.style.transform = "scale(1)";
  });

  function varAccent() {
    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue('--accent') || '#7aa2f7';
  }

  // --- HTTP request demo ---
  const fetchBtn = document.getElementById("fetchBtn");
  const fetchOutput = document.getElementById("fetchOutput");

  fetchBtn.addEventListener("click", async () => {
    fetchOutput.textContent = "Fetching...";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      fetchOutput.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      fetchOutput.textContent = "Error fetching data: " + err;
    }
  });

  // --- Personality quiz ---
  const quiz = document.getElementById("quiz");
  quiz.addEventListener("click", (e) => {
    if (!e.target.dataset.answer) return; // ignore clicks outside buttons
    const answer = e.target.dataset.answer;

    if (answer === "gadget") {
      alert("You chose gadgets! Redirecting to your persona page...");
      window.location.href = "../persona/gadget-tinker.html";
    } else {
      alert("You chose ideas! Redirecting to your persona page...");
      window.location.href = "../persona/idea-thinker.html";
    }
  });
});
