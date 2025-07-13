/**
 * 여놀 (여기서 놀자) Landing Page - Main JavaScript
 * 
 * Features:
 * - Responsive navigation menu
 * - Smooth scrolling for anchor links
 * - Scroll-triggered animations using Intersection Observer
 * - Dynamic number counting animation
 * - Form validation
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('HeartLink Initialized');

  initMobileNav();
  initSmoothScroll();
  initScrollAnimations();
  initCounterAnimation();
  initFormValidation();
});

/**
 * Initializes the mobile navigation menu.
 */
const initMobileNav = () => {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = navMenu.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  };

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
};

/**
 * Initializes smooth scrolling for all anchor links.
 */
const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const navbar = document.querySelector('.navbar');
  const navHeight = navbar ? navbar.offsetHeight : 80;

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - navHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
};

/**
 * Initializes scroll-triggered animations using Intersection Observer.
 */
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
};

/**
 * Initializes the animated counters in the hero section.
 */
const initCounterAnimation = () => {
  const counters = document.querySelectorAll('.stat-number[data-goal]');

  const animateCounter = (counter) => {
    const goal = +counter.dataset.goal;
    const duration = 2000;
    let current = 0;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      current = Math.floor(goal * percentage);
      counter.textContent = current;

      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    };
    let start = null;
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  counters.forEach(counter => observer.observe(counter));
};

/**
 * Initializes form validation for the signup form.
 */
const initFormValidation = () => {
  const form = document.getElementById('signupForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const gender = form.elements.gender.value;

    if (name === '' || email === '' || gender === '') {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (!/^[\S]+@[\S]+\.[\S]+$/.test(email)) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    alert(`가입해주셔서 감사합니다, ${name}님!`);
    form.reset();
  });
};