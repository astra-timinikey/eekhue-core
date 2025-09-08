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
      "eekhue-logo-sunglasses.png", 
      "eekhue-logo-shield.png",
      "eekhue-logo-fire.png",
      "eekhue-logo-water.png",
      "eekhue-logo-ice.png",
      "eekhue-logo-earth.png",
      "eekhue-logo-air.png",
      "eekhue-logo-poison.png"
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
      "AykHue",   // AQ = Adversity Quotient
      "BeekHue",  // BQ = Body Quotient
      "SeekHue",  // CQ = Cultural / Curiosity Quotient
      "DeekHue",  // DQ = Digital Quotient
      "EekHue",   // EQ = Emotional Quotient
      "EfkHue",   // FQ = Financial Quotient
      "AikHue",   // IQ = Intelligence Quotient
      "EmkHue",   // MQ = Moral Quotient
      "EnkHue",   // NQ = Nutritional Quotient
      "OakHue",   // OQ = Open Quotient
      "PeekHue",  // PQ = Physical / Positive Quotient
      "ArkHue",   // RQ (less standard, sometimes "Rational Quotient")
      "EskHue",   // SQ = Spiritual Quotient
      "TeekHue",  // TQ = Trust / Total Quotient
      "VeekHue",  // VQ (not standardized, sometimes "Values Quotient")
      "DoubleYoukHue" // WQ (rare, sometimes "Will Quotient")
    ];
    // Array of font families (make sure they're loaded via CSS or Google Fonts)
    const fontVariants = [
      "Arial, sans-serif",
      "'Courier New', monospace",
      "'Times New Roman', serif",
      "'Trebuchet MS', sans-serif",
      "'Comic Sans MS', cursive", // fun example
      "'Montserrat', sans-serif", // example if loaded from Google Fonts
      "'Roboto Slab', serif"       // example if loaded from Google Fonts
    ];

    // Pick a random brand name & font
    const randomBrand = brandVariants[Math.floor(Math.random() * brandVariants.length)];
    const randomFont = fontVariants[Math.floor(Math.random() * fontVariants.length)];
    
    // Update the brand text with a smooth transition
    brandText.style.transition = "opacity 0.2s ease";
    brandText.style.opacity = "0";
    
    setTimeout(() => {
      brandText.textContent = randomBrand;
      brandText.style.fontFamily = randomFont;
      brandText.style.opacity = "1";
    }, 200);
    
    // Optional: Log which brand was chosen (remove in production)
    console.log(`🏷️ Today's brand: ${randomBrand}`);
  }
});