document.querySelectorAll(".social-link a").forEach((link) => {
    link.addEventListener("mouseenter", function () {
      for (let i = 0; i < 20; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
  
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDelay = `${Math.random() * 0.2}s`;
  
        this.appendChild(confetti);
  
        confetti.addEventListener("animationend", () => {
          confetti.remove();
        });
      }
    });
  });
  
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index) {
        dot.classList.add("active");
      }
    });
  }
  
  function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  }
  
  // Función para avanzar al siguiente slide
  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Avanza al siguiente slide o vuelve al primero
    showSlide(currentSlideIndex);
  }
  
  showSlide(currentSlideIndex);
  
  setInterval(nextSlide, 5000);
  
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.9, // El texto se considera visible cuando al menos el 50% está en la vista
      }
    );
  
    // Selecciona el elemento que quieres observar
    const texto = document.querySelector(".texto-aparecer");
  
    // Empieza a observar el elemento
    observer.observe(texto);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      if (scrollY >= documentHeight - 100) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    });
  });