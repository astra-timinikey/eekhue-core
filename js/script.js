document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("helloBtn");
    const output = document.getElementById("output");
  
    btn.addEventListener("click", () => {
      output.textContent = "🎉 JavaScript is working on GitHub Pages!";
    });
  });
  