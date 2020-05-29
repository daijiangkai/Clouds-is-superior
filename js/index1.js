var mySwiper = new Swiper('.swiper1', {
    loop: true,
  autoplay : {
    delay:2000,
    disableOnInteraction: false,
  },
    slidesPerView: 2,
    slidesPerGroup: 2,
        // roundLengths : true, 
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
            1024.5: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          },
       
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
  });
  // $("#spd li").click(function(){
  //   $("#spd li").removeClass("spda");
  //   $("#spd li p").removeClass("sp1");
  // })
 