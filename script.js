var swiper = new Swiper(".slider", {
    simulateTouch: true,
    navigation: {
      nextEl: ".news__swiper-button-next",
      prevEl: ".news__swiper-button-prev",
    },
    on: {
      slideChange: function (swiper) {
        console.log("bbb");
        document.querySelector(".first-slide__news").innerHTML =
          (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
      },
    },
  
    Keyboard: {
      enabled: true,
      onlyInViueport: true,
      pageUpDown: true,
    },
    autoHeight: false,
    //slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
  });