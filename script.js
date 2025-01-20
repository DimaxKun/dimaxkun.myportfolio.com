function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1); 
    scrollToSection(targetId);
    });
});


const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', function () {
    if (root.classList.contains('dark-mode')) {
        root.classList.remove('dark-mode');
    } else {
        root.classList.add('dark-mode');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
      fadeElements.forEach(element => {
        element.classList.add('visible');
      });
    }, 100);
  });
  

document.addEventListener("DOMContentLoaded", function () {
const slideElements = document.querySelectorAll('.slide-in');
setTimeout(() => {
    slideElements.forEach(element => {
    element.classList.add('visible');
    });
}, 100);
});
  
document.addEventListener("DOMContentLoaded", function () {
    const slideElements = document.querySelectorAll('.slide-in');
    slideElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 300); 
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const slideElements = document.querySelectorAll('.slide-down');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );
    slideElements.forEach(element => observer.observe(element));
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const curtain = document.getElementById('curtain');
  
    curtain.addEventListener('animationend', () => {
      curtain.style.display = 'none';
    });
  });
  
  