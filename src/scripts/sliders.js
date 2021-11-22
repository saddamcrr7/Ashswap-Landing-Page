import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Controller, EffectFade, Autoplay]);

window.addEventListener('load',()=> {
  homePageSlider()
})

function homePageSlider() {
  const prevslider = new Swiper('.c-prevslider', {
    initialSlide: 2,
    slidesPerView: 1,
    wrapperClass: 'c-prevslider__wrapper',
    slideClass: 'c-prevslider__item',
    slideActiveClass: 'is-active',
    loop: true,
    allowTouchMove: false,
    speed: 500
  })

  const nextslider = new Swiper('.c-nextslider', {
    initialSlide: 1,
    slidesPerView: 1,
    wrapperClass: 'c-nextslider__wrapper',
    slideClass: 'c-nextslider__item',
    slideActiveClass: 'is-active',
    loop: true,
    allowTouchMove: false,
    speed: 500
  })


  const titleslider = new Swiper('.c-titleslider', {
    direction: 'vertical',
    slidesPerView: 1,
    wrapperClass: 'c-titleslider__wrapper',
    slideClass: 'c-titleslider__item',
    slideActiveClass: 'is-active',
    loop: true,
    allowTouchMove: false,
    speed: 500
  })

  const contentslider = new Swiper('.c-contentslider', {
    direction: 'vertical',
    slidesPerView: 1,
    wrapperClass: 'c-contentslider__wrapper',
    slideClass: 'c-contentslider__item',
    slideActiveClass: 'is-active',
    loop: true,
    allowTouchMove: false,
    speed: 500,
    pagination: {
      el: '.c-contentslider__dot',
      type: 'bullets',
    },
  })

  const imageslider = new Swiper('.c-imageslider', {
    slidesPerView: 1,
    wrapperClass: 'c-imageslider__wrapper',
    slideClass: 'c-imageslider__item',
    slideActiveClass: 'is-active',
    loop: true,
    allowTouchMove: false,
    speed: 500,

    controller: {
      control: [contentslider,
        titleslider
      ],
      by: 'container'
    },
  })


  const nextArrow = document.querySelector('.o-sliders__arrow--next')
  const prevArrow = document.querySelector('.o-sliders__arrow--prev')
  const nextsliderElm = document.querySelector('.c-nextslider')
  const prevsliderElm = document.querySelector('.c-prevslider')

  if(nextArrow) {
    nextArrow.addEventListener('click',()=> {
      imageslider.slideNext()
      prevslider.slideNext()
      nextslider.slideNext()
    })
  }

  if(prevArrow) {
    prevArrow.addEventListener('click',()=> {
      imageslider.slidePrev()
      prevslider.slidePrev()
      nextslider.slidePrev()
    })
  }


  if(nextsliderElm) {
    nextsliderElm.addEventListener('click',()=> {
      imageslider.slideNext()
      prevslider.slideNext()
      nextslider.slideNext()
    })
  }

  if(prevsliderElm) {
    prevsliderElm.addEventListener('click',()=> {
      imageslider.slidePrev()
      prevslider.slidePrev()
      nextslider.slidePrev()
    })
  }
}
