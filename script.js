/* --- Initialize Lenis (Premium Smooth Scroll) --- */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* --- Initialize AOS (Card Animations) --- */
AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true 
});

/* --- Typed.js Animation --- */
const typed = new Typed('.text-type', {
    strings: ['Frontend Developer', 'Web Designer', 'React Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* --- Custom Cursor Logic --- */
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    // Move the small dot instantly
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Add hover effect to clickable elements
const clickableElements = document.querySelectorAll('a, button, .skill-card, input, textarea, .project-card');

clickableElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

/* --- Parallax Background Shapes Logic --- */
document.addEventListener("mousemove", parallaxShapes);
document.addEventListener("scroll", parallaxShapes);

function parallaxShapes(e) {
  const shapes = document.querySelectorAll(".shape");
  
  shapes.forEach((shape) => {
    const speed = shape.getAttribute("data-speed");
    
    // Calculate movement based on Scroll (Y) and Mouse (X)
    // If e.pageX is undefined (scroll event), default to center
    const mouseX = e.pageX || window.innerWidth / 2;
    
    const x = (window.innerWidth - mouseX * speed) / 100;
    const y = (window.scrollY * speed); 
    
    shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

/* --- Navbar Background on Scroll --- */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('bg-dark');
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('shadow');
    }
});


const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    // Active button
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projects.forEach(project => {
      if (filter === "all" || project.dataset.category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

  });
});
