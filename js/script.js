document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const output = document.getElementById("output");
  let clickCount = 0;

  const emojis = ["🎉","🚀","✨","🔥","🌟","💡","🎈"];

  btn.addEventListener("click", () => {
    clickCount++;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    output.textContent = `${emoji} JavaScript works! Clicked ${clickCount} times. ${emoji}`;

    // Random color for fun
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    output.style.color = `rgb(${r}, ${g}, ${b})`;

    // Add a small animation
    output.style.transform = "scale(1.1)";
    setTimeout(() => { output.style.transform = "scale(1)"; }, 150);
  });
});
