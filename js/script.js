document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const resetBtn = document.getElementById("resetBtn");
  const output = document.getElementById("output");
  let clickCount = 0;

  const emojis = ["🎉","🚀","✨","🔥","🌟","💡","🎈"];

  btn.addEventListener("click", () => {
    clickCount++;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    // If/else logic based on thresholds
    if (clickCount % 10 === 0) {
      output.textContent = `${emoji} Wow! You reached ${clickCount} clicks! ${emoji}`;
    } else if (clickCount % 5 === 0) {
      output.textContent = `${emoji} Nice! ${clickCount} clicks already! ${emoji}`;
    } else {
      output.textContent = `${emoji} JavaScript works! Clicked ${clickCount} times. ${emoji}`;
    }

    // Random color for fun
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    output.style.color = `rgb(${r}, ${g}, ${b})`;

    // Small animation
    output.style.transform = "scale(1.1)";
    setTimeout(() => { output.style.transform = "scale(1)"; }, 150);
  });

  // Reset button logic
  resetBtn.addEventListener("click", () => {
    clickCount = 0;
    output.textContent = "Counter reset!";
    output.style.color = varAccent();
    output.style.transform = "scale(1)";
  });

  // Helper function for reset color
  function varAccent() {
    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue('--accent') || '#7aa2f7';
  }
});
