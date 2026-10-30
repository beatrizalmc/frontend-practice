// SWIPER HERO
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// LOGIN/CADASTRO
function switchTab(type) {
  const tabs = document.querySelectorAll('.tab-btn');
  const indicator = document.getElementById('tabIndicator');
  const submitBtn = document.getElementById('submitBtn');

  if (type === 'signup') {
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
    indicator.style.transform = 'translateX(0%)';
    submitBtn.textContent = 'Create an Account';
  } else {
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
    indicator.style.transform = 'translateX(100%)';
    submitBtn.textContent = 'Log In';
  }
}