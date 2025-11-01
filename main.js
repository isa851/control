document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-value");
  let animated = false;

  
  const animateCount = (el, target, duration = 3000) => {
    let start = 0;
    const stepTime = 16; 
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start).toLocaleString(); 
    }, stepTime);
  }

  
  const section = document.querySelector(".achievements-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          animateCount(counter, target, 3000);
        });
      }
    });
  });

  if (section) observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".hero-illustration");
  const images = Array.from(carousel.querySelectorAll("img"));
  let currentIndex = 0;
  const speed = 3000; 

  carousel.style.position = "relative";
  carousel.style.overflow = "hidden";
  carousel.style.width = "100%";
  carousel.style.height = "350px"; 
  carousel.style.display = "flex";

  images.forEach(img => {
    img.style.minWidth = "100%"; 
    img.style.transition = "transform 0.8s ease"; 
  });

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;   
    images.forEach(img => {
      img.style.transform = `translateX(${offset}%)`;
    });
  }

  setInterval(nextSlide, speed);
});

