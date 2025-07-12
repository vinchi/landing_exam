/**
 * HeartLink 데이팅앱 랜딩페이지 메인 JavaScript
 * 
 * 주요 기능:
 * - 네비게이션 바 반응형 처리
 * - 스크롤 애니메이션
 * - 폼 유효성 검사
 * - 스무스 스크롤
 * - 인터랙션 효과
 */

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 HeartLink 랜딩페이지가 로드되었습니다.');
  
  // 각 기능 초기화
  initializeNavigation();
  initializeScrollAnimations();
  initializeFormValidation();
  initializeSmoothScroll();
  initializeInteractiveEffects();
});

/**
 * 네비게이션 바 초기화 및 반응형 처리
 */
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // 햄버거 메뉴 토글
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // 네비게이션 링크 클릭 시 메뉴 닫기
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // 스크롤 시 네비게이션 바 스타일 변경
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });
}

/**
 * 스크롤 애니메이션 초기화
 */
function initializeScrollAnimations() {
  // Intersection Observer를 사용한 스크롤 애니메이션
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 애니메이션 대상 요소들
  const animateElements = document.querySelectorAll(
    '.feature-card, .step, .testimonial-card, .section-title'
  );

  animateElements.forEach(element => {
    observer.observe(element);
  });

  // 히어로 섹션 특별 애니메이션
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');

  if (heroContent && heroImage) {
    setTimeout(() => {
      heroContent.classList.add('animate-fade-in-left');
    }, 300);
    
    setTimeout(() => {
      heroImage.classList.add('animate-fade-in-right');
    }, 600);
  }
}

/**
 * 폼 유효성 검사 초기화
 */
function initializeFormValidation() {
  const signupForm = document.getElementById('signupForm');
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 폼 데이터 수집
      const formData = new FormData(signupForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const gender = formData.get('gender');

      // 유효성 검사
      if (!validateForm(name, email, phone, gender)) {
        return;
      }

      // 성공 메시지 표시
      showSuccessMessage('가입 신청이 완료되었습니다! 곧 연락드리겠습니다.');
      
      // 폼 초기화
      signupForm.reset();
    });
  }
}

/**
 * 폼 유효성 검사 함수
 * @param {string} name - 이름
 * @param {string} email - 이메일
 * @param {string} phone - 전화번호
 * @param {string} gender - 성별
 * @returns {boolean} 유효성 검사 결과
 */
function validateForm(name, email, phone, gender) {
  let isValid = true;
  const errors = [];

  // 이름 검사
  if (!name || name.trim().length < 2) {
    errors.push('이름을 2글자 이상 입력해주세요.');
    isValid = false;
  }

  // 이메일 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('올바른 이메일 주소를 입력해주세요.');
    isValid = false;
  }

  // 전화번호 검사
  const phoneRegex = /^[0-9-+\s()]{10,}$/;
  if (!phone || !phoneRegex.test(phone)) {
    errors.push('올바른 전화번호를 입력해주세요.');
    isValid = false;
  }

  // 성별 검사
  if (!gender) {
    errors.push('성별을 선택해주세요.');
    isValid = false;
  }

  // 에러 메시지 표시
  if (!isValid) {
    showErrorMessage(errors.join('\n'));
  }

  return isValid;
}

/**
 * 성공 메시지 표시
 * @param {string} message - 메시지 내용
 */
function showSuccessMessage(message) {
  const notification = createNotification(message, 'success');
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

/**
 * 에러 메시지 표시
 * @param {string} message - 메시지 내용
 */
function showErrorMessage(message) {
  const notification = createNotification(message, 'error');
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

/**
 * 알림 메시지 생성
 * @param {string} message - 메시지 내용
 * @param {string} type - 메시지 타입 (success/error)
 * @returns {HTMLElement} 알림 요소
 */
function createNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  // 스타일 적용
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 400px;
    animation: slideInRight 0.3s ease-out;
  `;

  // 닫기 버튼 이벤트
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.remove();
  });

  return notification;
}

/**
 * 스무스 스크롤 초기화
 */
function initializeSmoothScroll() {
  // 모든 내부 링크에 스무스 스크롤 적용
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70; // 네비게이션 바 높이 고려
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 섹션으로 스크롤하는 전역 함수
 * @param {string} sectionId - 섹션 ID
 */
function scrollToSection(sectionId) {
  const targetElement = document.querySelector(`#${sectionId}`);
  
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - 70;
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

/**
 * 인터랙티브 효과 초기화
 */
function initializeInteractiveEffects() {
  // 버튼 호버 효과
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // 카드 호버 효과
  const cards = document.querySelectorAll('.feature-card, .testimonial-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // 폰 모킹업 인터랙션
  const phoneMockup = document.querySelector('.phone-mockup');
  
  if (phoneMockup) {
    phoneMockup.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      this.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    
    phoneMockup.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(5deg)';
    });
  }

  // 통계 카운터 애니메이션
  initializeCounterAnimation();
}

/**
 * 통계 카운터 애니메이션 초기화
 */
function initializeCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        
        // 숫자 추출
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        const suffix = finalValue.replace(/[\d]/g, '');
        
        animateCounter(target, 0, numericValue, suffix);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => {
    observer.observe(stat);
  });
}

/**
 * 카운터 애니메이션
 * @param {HTMLElement} element - 애니메이션 대상 요소
 * @param {number} start - 시작 값
 * @param {number} end - 끝 값
 * @param {string} suffix - 접미사
 */
function animateCounter(element, start, end, suffix) {
  const duration = 2000; // 2초
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 이징 함수 (부드러운 애니메이션)
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(start + (end - start) * easeOutQuart);
    
    element.textContent = currentValue + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

/**
 * 로딩 상태 표시
 * @param {boolean} isLoading - 로딩 상태
 */
function setLoadingState(isLoading) {
  const buttons = document.querySelectorAll('.btn[type="submit"]');
  
  buttons.forEach(button => {
    if (isLoading) {
      button.disabled = true;
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 처리 중...';
    } else {
      button.disabled = false;
      button.innerHTML = '가입하기';
    }
  });
}

/**
 * 디바이스 타입 감지
 * @returns {string} 디바이스 타입
 */
function getDeviceType() {
  const userAgent = navigator.userAgent;
  
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'mobile';
  } else if (/Tablet|iPad/i.test(userAgent)) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

/**
 * 성능 모니터링
 */
function initializePerformanceMonitoring() {
  // 페이지 로드 시간 측정
  window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`📊 페이지 로드 시간: ${loadTime}ms`);
  });

  // 스크롤 성능 모니터링
  let scrollCount = 0;
  let lastScrollTime = Date.now();
  
  window.addEventListener('scroll', function() {
    scrollCount++;
    const currentTime = Date.now();
    
    if (currentTime - lastScrollTime > 1000) {
      console.log(`📊 스크롤 이벤트: ${scrollCount}회/초`);
      scrollCount = 0;
      lastScrollTime = currentTime;
    }
  });
}

// 성능 모니터링 초기화
initializePerformanceMonitoring();

// 전역 함수로 노출
window.scrollToSection = scrollToSection;
window.setLoadingState = setLoadingState;
window.getDeviceType = getDeviceType; 