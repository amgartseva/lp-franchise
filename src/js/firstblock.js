window.addEventListener('load', () => {
  const overlay = document.querySelector('.firstblock__overlay')
  const bg = document.querySelector('.firstblock__bg')
  const header = document.querySelector('.header')
  const headerLogo = document.querySelector('.header__logo');

  if (window.pageYOffset !== 0 && !document.querySelector('.header_white')) {
    header.classList.add('header_white');
    headerLogo.src = './build/svg/logo-header-black.svg';
  }

  let lastScrollTop = 0

window.addEventListener(
  'scroll',
  () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop
    let firstblock = document.querySelector('.firstblock')

    if (scrolled > lastScrollTop) {
      header.classList.add('header_white')
      headerLogo.src = './build/svg/logo-header-black.svg'
    } else {
      header.classList.remove('header_white')
      header.classList.add('header_black')
      headerLogo.src = './build/svg/logo-header.svg'
    }
    lastScrollTop = scrolled <= 0 ? 0 : scrolled

    if (firstblock.getBoundingClientRect().y < 0) {
      header.classList.add('header_white')
      headerLogo.src = './build/svg/logo-header-black.svg'
    } else {
      header.classList.remove('header_white')
      header.classList.add('header_black')
      headerLogo.src = './build/svg/logo-header.svg'
    }
  },
  false
)

  setTimeout(() => {
    overlay.classList.add('firstblock__overlay_loaded')
  }, 500)
  setTimeout(() => {
    bg.classList.add('firstblock__bg_loaded')
    header.classList.add('header_loaded')
  }, 1000)
})
