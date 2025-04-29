document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navRight = document.querySelector('.nav-right');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');
  
    header.classList.add('visible');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navRight.classList.toggle('active');
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Language selector functionality
    const languageSelect = document.querySelector('.language-select');
    languageSelect.addEventListener('change', (e) => {
      // In a real application, this would trigger a language change
      console.log(`Language changed to ${e.target.value}`);
    });
  
    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchIcon = document.querySelector('.search-container i');
  
    searchIcon.addEventListener('click', () => {
      if (searchInput.value.trim() !== '') {
        // In a real application, this would trigger a search
        console.log(`Searching for: ${searchInput.value}`);
      }
    });
  
    // Login button functionality
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
      // In a real application, this would open a login modal or redirect to a login page
      console.log('Login button clicked');
    });
  
    // Add hover effect to game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      // Activa la clase visible cuando el usuario se acerca al final de la página
      if (scrollY >= documentHeight - 100) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    });
   
    
  
  });