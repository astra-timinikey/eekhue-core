document.addEventListener("DOMContentLoaded", () => {
    // Popup card logic
    const nodes = document.querySelectorAll(".realm-node");
    const popup = document.getElementById("realm-card");
    const titleEl = document.getElementById("realm-title");
    const textEl = document.getElementById("realm-text");
    const closeBtn = document.getElementById("realm-close");
  
    nodes.forEach(node => {
      // Set node image background
      const img = node.dataset.img;
      if(img) node.style.backgroundImage = `url('${img}')`;
  
      node.addEventListener("click", () => {
        titleEl.textContent = node.dataset.title;
        textEl.textContent = node.dataset.text;
        popup.classList.add("active");
      });
    });
  
    closeBtn.addEventListener("click", () => popup.classList.remove("active"));
    window.addEventListener("click", e => { if(e.target===popup) popup.classList.remove("active"); });
  
    // Starfield animation
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");
    let stars = [];
  
    function initStars() {
      stars = [];
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      for(let i=0;i<100;i++){
        stars.push({x:Math.random()*width, y:Math.random()*height, r: Math.random()*1.5+0.5, dx:(Math.random()-0.5)*0.2, dy:(Math.random()-0.5)*0.2});
      }
    }
  
    function animateStars(){
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      ctx.clearRect(0,0,width,height);
      stars.forEach(s=>{
        s.x += s.dx;
        s.y += s.dy;
        if(s.x<0)s.x=width; if(s.x>width)s.x=0;
        if(s.y<0)s.y=height; if(s.y>height)s.y=0;
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fill();
      });
      requestAnimationFrame(animateStars);
    }
  
    initStars();
    animateStars();
    window.addEventListener("resize", initStars);
  
    // Node floating random movement
    const nodeData = Array.from(nodes).map(node => ({
      el: node,
      x: node.offsetLeft,
      y: node.offsetTop,
      offsetX: (Math.random() * 5) + 2, // smaller horizontal sway
      offsetY: (Math.random() * 5) + 2, // smaller vertical sway
      speedX: (Math.random() * 0.002) + 0.01, // much slower
      speedY: (Math.random() * 0.002) + 0.01,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2
    }));
  
    function animateNodes(time){
      nodeData.forEach(n=>{
        n.phaseX += n.speedX;
        n.phaseY += n.speedY;
        n.el.style.left = `${n.x + Math.sin(n.phaseX)*n.offsetX}px`;
        n.el.style.top  = `${n.y + Math.sin(n.phaseY)*n.offsetY}px`;
      });
      requestAnimationFrame(animateNodes);
    }
    animateNodes();
  });
  