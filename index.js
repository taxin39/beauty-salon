

/******* swiper **************/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/******* text **************/
let btn = document.querySelector('.btn');
let style3 = document.querySelector('.style-3');

btn.addEventListener('click',() => {
  btn.style.display = 'none';
  style3.classList.add('open');
});
