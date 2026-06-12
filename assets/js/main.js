document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  var menuBtn = document.getElementById('mobile-menu-btn');
  var navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      // Change icon based on state
      if (navMenu.classList.contains('active')) {
        menuBtn.textContent = '✕';
      } else {
        menuBtn.textContent = '☰';
      }
    });
  }

  // Contact Form Submission Mock
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('문의가 성공적으로 접수되었습니다. (MVP 데모용 알림)\n담당자가 확인 후 입력하신 이메일로 회신드리겠습니다.');
      contactForm.reset();
    });
  }
});