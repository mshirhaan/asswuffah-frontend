const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');
const navElement = document.querySelector('.main-header');
const buttonBars = document.querySelectorAll('.toggle-button__bar');

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');

  buttonBars[1].classList.remove('hide');
  buttonBars[0].classList.remove('left-cross-bar');
  buttonBars[2].classList.remove('right-cross-bar');
});

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');

  buttonBars[0].classList.add('left-cross-bar');
  buttonBars[2].classList.add('right-cross-bar');
  buttonBars[1].classList.add('hide');
});

function changeCss() {
  this.scrollY > 85
    ? (navElement.style.background = '#00323970')
    : (navElement.style.background = '#003239');
}

window.addEventListener('scroll', changeCss, false);
