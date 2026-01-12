// ===================================
// EditFlow - Interactive Features
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuToggle.textContent = '☰';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
  });
}

// Animated counter for feature numbers
const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      // Handle percentage
      if (target.toString().includes('%')) {
        element.textContent = Math.floor(current) + '%';
      } else if (target.toString().includes('+')) {
        element.textContent = Math.floor(current) + '+';
      } else {
        element.textContent = Math.floor(current);
      }
    }
  }, 16);
};

// Observe feature numbers for animation
const featureObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      const text = entry.target.textContent;
      const number = parseInt(text.replace(/\D/g, ''));
      
      if (text.includes('%')) {
        animateCounter(entry.target, number, 1500);
        entry.target.textContent = number + '%';
      } else if (text.includes('+')) {
        animateCounter(entry.target, number, 1500);
        entry.target.textContent = number + '+';
      }
    }
  });
}, { threshold: 0.5 });

const featureNumbers = document.querySelectorAll('.feature-number');
featureNumbers.forEach(num => featureObserver.observe(num));

// Add hover effect to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Portfolio item click handler (optional - for future modal implementation)
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    // Future: Open modal with project details
    console.log('Portfolio item clicked');
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Console message
console.log('%c✨ EditFlow Website', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cDesigned with creativity and passion', 'font-size: 12px; color: #06b6d4;');
