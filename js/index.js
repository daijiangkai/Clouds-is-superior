var mySwiper = new Swiper('.swiper1', {
    loop: true,
    autoplay: 2000,
    slidesPerView: 2,
    slidesPerGroup: 2,
        // roundLengths : true, 
        breakpoints: {
           
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }
    autoplayDisableOnInteraction: false,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    
  });