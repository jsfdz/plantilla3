showMenu.addEventListener('click', () => { navMenu.classList.toggle('active') })
const swiper = new Swiper('.services__container', { slidesPerView: 1, navigation: { nextEl: '.services__button-next', prevEl: '.services__button-prev' }, breakpoints: { 370: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 992: { slidesPerView: 4 } } })
const swiper2 = new Swiper('.portfolio__container', { slidesPerView: 1, navigation: { nextEl: '.portfolio__button-next', prevEl: '.portfolio__button-prev' }, breakpoints: { 370: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 992: { slidesPerView: 4 } } })
