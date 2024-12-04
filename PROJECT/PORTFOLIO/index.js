// Carousal

const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCoursor:true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    breakpoints: {
      0:{
        
        slidesPerView: 1

      },
      368:{
        slidesPerView: 2
      },

      768:{
        slidesPerView: 3
      },
      1024:{
        slidesPerView: 4
      }
    }
   
  });

//   --------------------------------------------------------------------------------------------------------------------