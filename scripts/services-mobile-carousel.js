// Responsive SwiperJS initialization for mobile services carousel
// Requires SwiperJS CSS and JS to be loaded in the HTML

document.addEventListener('DOMContentLoaded', function() {
  if (window.Swiper) {
    new Swiper('.swiper-services-mobile', {
      slidesPerView: 1.1,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      breakpoints: {
        480: { slidesPerView: 1.2 },
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});
