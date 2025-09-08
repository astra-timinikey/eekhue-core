document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu");

  // Hamburger menu functionality
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Random logo and brand name functionality
  const logoImg = document.querySelector(".logo");
  const brandText = document.querySelector(".brand");
  
  if (logoImg) {
    // Array of your logo variants
    const logoVariants = [
      "eekhue-logo.png",
      "eekhue-logo-2.png", 
      "eekhue-logo-3.png",
      "eekhue-logo-4.png",
      "eekhue-logo-dragon.png",
      "eekhue-logo-phoenix.png",
      "eekhue-logo-unicorn.png",
      "eekhue-logo-griffin.png"
      // Add more logo filenames as you create them
    ];

    // Pick a random logo
    const randomLogo = logoVariants[Math.floor(Math.random() * logoVariants.length)];
    
    // Update the src attribute
    logoImg.src = `${BASEURL}/assets/images/${randomLogo}`;
    
    // Optional: Add a fade-in effect when logo loads
    logoImg.style.opacity = "0";
    logoImg.onload = function() {
      logoImg.style.transition = "opacity 0.3s ease";
      logoImg.style.opacity = "1";
    };
    
    // Optional: Log which logo was chosen (remove in production)
    console.log(`🎨 Today's logo: ${randomLogo}`);
  }

  // Random brand name functionality
  if (brandText) {
    const brandVariants = [
      "EekHue",
      "AikHue", 
      "EskHue",
      "AxkHue"
    ];

    // Pick a random brand name
    const randomBrand = brandVariants[Math.floor(Math.random() * brandVariants.length)];
    
    // Update the brand text with a smooth transition
    brandText.style.transition = "opacity 0.2s ease";
    brandText.style.opacity = "0";
    
    setTimeout(() => {
      brandText.textContent = randomBrand;
      brandText.style.opacity = "1";
    }, 200);
    
    // Optional: Log which brand was chosen (remove in production)
    console.log(`🏷️ Today's brand: ${randomBrand}`);
  }
});