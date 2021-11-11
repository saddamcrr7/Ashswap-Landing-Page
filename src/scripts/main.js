import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Controller, EffectFade, Autoplay]);

import { gsap } from "../scripts/vendor/gsap-member/src/all";

const prevslider = new Swiper('.c-prevslider', {
  initialSlide: 2,
  slidesPerView: 1,
  wrapperClass: 'c-prevslider__wrapper',
  slideClass: 'c-prevslider__item',
  slideActiveClass: 'is-active',
  loop: true,
  allowTouchMove: false
})

const nextslider = new Swiper('.c-nextslider', {
  initialSlide: 1,
  slidesPerView: 1,
  wrapperClass: 'c-nextslider__wrapper',
  slideClass: 'c-nextslider__item',
  slideActiveClass: 'is-active',
  loop: true,
  allowTouchMove: false
})


const titleslider = new Swiper('.c-titleslider', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'c-titleslider__wrapper',
  slideClass: 'c-titleslider__item',
  slideActiveClass: 'is-active',
  loop: true,
  allowTouchMove: false
})

const contentslider = new Swiper('.c-contentslider', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'c-contentslider__wrapper',
  slideClass: 'c-contentslider__item',
  slideActiveClass: 'is-active',
  loop: true,
  allowTouchMove: false,
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


//hero partical animation

gsap.from(".o-hero__particle--1", {width: 43, duration: 0.8, repeat:-1, repeatDelay: 3, yoyo: true});

gsap.to(".o-hero__particle--2", {height: 14, duration: 1, delay: 1.5, repeat:-1, repeatDelay: 2, yoyo: true});

gsap.from(".o-hero__particle--3", {width: 49, duration: 1, delay: 4, repeat:-1, repeatDelay: 2, yoyo: true});

gsap.from(".o-hero__particle--4", {height: 24, duration: 1, delay: 1, repeat:-1, repeatDelay: 2, yoyo: true});

const sparkTl = gsap.timeline({repeat:-1, repeatDelay: 2 })
sparkTl.to(".o-hero__particle--5", {y: -700, duration: 5 })
.to(".o-hero__particle--5", {opacity: 0, duration: 0.5,  delay : -4.5});

// gsap.from(".o-hero__particle--6", {height: 24, duration: 1, delay: 1, repeat:-1, repeatDelay: 2, yoyo: true});
