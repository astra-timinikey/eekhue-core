document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const resetBtn = document.getElementById("resetBtn");
  const output = document.getElementById("output");
  let clickCount = 0;

  const emojis = ["🎉","🚀","✨","🔥","🌟","💡","🎈"];

  // Click counter
  btn.addEventListener("click", () => {
    clickCount++;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    console.log("Button clicked. Count:", clickCount);

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
    console.log("Counter reset");
    output.textContent = "Counter reset!";
    output.style.color = varAccent();
    output.style.transform = "scale(1)";
  });

  function varAccent() {
    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue('--accent') || '#7aa2f7';
  }

  // HTTP request demo
  const fetchBtn = document.getElementById("fetchBtn");
  const fetchOutput = document.getElementById("fetchOutput");
  if (fetchBtn) {
    fetchBtn.addEventListener("click", async () => {
      fetchOutput.textContent = "Fetching...";
      console.log("Fetching data...");
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Data received:", data);
        fetchOutput.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        console.error("Fetch error:", err);
        fetchOutput.textContent = "Error fetching data: " + err;
      }
    });
  }

  // Personality quiz
  const quiz = document.getElementById("quiz");
  if (quiz) {
    quiz.addEventListener("click", (e) => {
      if (!e.target.dataset.answer) return;
      const answer = e.target.dataset.answer;
      console.log("Quiz answer clicked:", answer);

      // Use **relative paths from current page**
      let targetPath = "";
      if (answer === "gadget") {
        targetPath = "persona/gadget-tinker.html";  // relative to the page hosting this JS
      } else {
        targetPath = "persona/idea-thinker.html";
      }

      console.log("Redirecting to:", targetPath);
      window.location.href = targetPath;
    });
  }
});
