// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar el carrusel con opciones personalizadas
    const carousel = document.querySelector("#valorantCarousel")
    if (carousel) {
      const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000,
        pause: "hover",
      })
    }
  
    // Efecto para las tarjetas de noticias
    const cards = document.querySelectorAll(
      ".news-card, .featured-news, .sidebar-news, .video-card, .video-card-small, .player-card, .category-card",
    )
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)"
        this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = ""
        this.style.boxShadow = ""
      })
    })
  
    // Efecto para los placeholders de video
    const videoThumbnails = document.querySelectorAll(".video-thumbnail, .video-thumbnail-small")
    videoThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Aquí se podría implementar la lógica para reproducir videos
        console.log("Video clicked")
  
        // Efecto visual al hacer clic
        const playButton = this.querySelector(".play-button, .play-button-small")
        if (playButton) {
          playButton.style.transform = "translate(-50%, -50%) scale(1.2)"
  
          setTimeout(() => {
            playButton.style.transform = "translate(-50%, -50%)"
          }, 200)
        }
      })
    })
  
    // Añadir efecto de desplazamiento suave para los enlaces de navegación
    const navLinks = document.querySelectorAll(".navbar-nav a")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // No prevenimos el evento por defecto para permitir la navegación real
  
        // Cerrar el menú móvil si está abierto
        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse)
          bsCollapse.hide()
        }
      })
    })
  
    // Botón de volver arriba
    const backToTopButton = document.getElementById("backToTop")
    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopButton.classList.add("active")
        } else {
          backToTopButton.classList.remove("active")
        }
      })
  
      backToTopButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Detectar cuando el usuario hace scroll para añadir efectos
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
  
      // Añadir clase a la barra de navegación cuando se hace scroll
      const navbar = document.querySelector(".navbar")
      if (navbar) {
        if (scrollPosition > 100) {
          navbar.classList.add("navbar-scrolled")
          navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)"
        } else {
          navbar.classList.remove("navbar-scrolled")
          navbar.style.boxShadow = "none"
        }
      }
  
      // Animación para elementos que entran en el viewport
      const animateElements = document.querySelectorAll(
        ".news-card, .featured-news, .category-card, .player-card, .video-card, .video-card-small, .section-header",
      )
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animated")
        }
      })
    })
  
    // Inicializar los elementos con opacidad 0 para la animación
    const animateElements = document.querySelectorAll(
      ".news-card, .featured-news, .category-card, .player-card, .video-card, .video-card-small, .section-header",
    )
    animateElements.forEach((element) => {
      element.classList.add("fade-in")
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Añadir clase para elementos animados
    document.querySelectorAll(".fade-in").forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
    })
  
    // Disparar el evento de scroll para animar los elementos visibles inicialmente
    window.dispatchEvent(new Event("scroll"))
  
    // Animación para elementos con la clase 'animated'
    document.addEventListener("scroll", () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        if (isElementInViewport(el)) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }
      })
    })
  
    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
    }
  
    // Efecto hover para los botones
    const buttons = document.querySelectorAll(".btn-valorant, .btn-valorant-outline")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px)"
      })
  
      button.addEventListener("mouseleave", function () {
        this.style.transform = ""
      })
    })
  
    // Inicializar tooltips de Bootstrap si existen
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    if (tooltipTriggerList.length > 0) {
      tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
    }
  
    // Formulario de newsletter
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
        const emailInput = this.querySelector('input[type="email"]')
        if (emailInput && emailInput.value) {
          // Aquí iría la lógica para enviar el email al servidor
          console.log("Email suscrito:", emailInput.value)
  
          // Mostrar mensaje de éxito
          alert("¡Gracias por suscribirte a nuestro newsletter!")
          emailInput.value = ""
        }
      })
    }
  })
  