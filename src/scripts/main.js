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

import Parallax from 'parallax-js'

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);


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

gsap.from(".o-hero__particle--1", {scaleX: 0, duration: 0.8, repeat:-1, repeatDelay: 3, yoyo: true});

gsap.to(".o-hero__particle--2", {scaleY: 0, duration: 1, delay: 1.5, repeat:-1, repeatDelay: 2, yoyo: true});

gsap.from(".o-hero__particle--3", {scaleX: 0, duration: 1, delay: 4, repeat:-1, repeatDelay: 2, yoyo: true});

gsap.from(".o-hero__particle--4", {scaleY: 0, duration: 1, delay: 1, repeat:-1, repeatDelay: 2, });

const sparkTl = gsap.timeline({repeat:-1})
sparkTl.to(".o-hero__particle--5", {y: -400, duration: 3 })
.to(".o-hero__particle--5", {opacity: 0, duration: 1,  delay : -1})
.to(".o-hero__particle--6", {y: -250, duration: 3,  delay : -3 })
.to(".o-hero__particle--6", {opacity: 0, duration: 1,  delay : -1})
.to(".o-hero__particle--7", {y: -400, duration: 3, })
.to(".o-hero__particle--7", {opacity: 0, duration: 1,  delay : -1})
.to(".o-hero__particle--8", {y: -300, duration: 3,  delay : -3 })
.to(".o-hero__particle--8", {opacity: 0, duration: 1,  delay : -1})



gsap.to('.o-discover__particle--1',{scaleY: 0, duration: 0.8, repeat:-1, repeatDelay: 2, yoyo: true})
gsap.to('.o-discover__particle--7',{scaleY: 0, duration: 0.8, repeat:-1, repeatDelay: 3, yoyo: true})
gsap.to('.o-discover__particle--5',{scaleX: 0, duration: 0.8, delay : 0.5, repeat:-1, repeatDelay: 3, yoyo: true})

const discoverParticlesTl = gsap.timeline({repeat:-1, repeatDelay: 4, yoyo: true})
discoverParticlesTl
.to('.o-discover__particle--2',{x: 200, opacity: 0, duration: 0.8,})
.to('.o-discover__particle--3',{x: 200, opacity: 0, duration: 0.8, delay : -0.8})
.to('.o-discover__particle--4',{x: 200, opacity: 0, duration: 0.8, delay : -0.8})
.to('.o-discover__particle--6',{x: 200, opacity: 0, duration: 0.8, delay : -0.8})
.to('.o-discover__title span',{x: 200, opacity: 0, duration: 0.8, delay : -0.8})


gsap.to('.cta__particle--1',{scaleX: 0, duration: 1, repeat:-1, repeatDelay: 2, yoyo: true})
gsap.to('.cta__particle--2' ,{scaleY: 0, duration: 0.8, repeat:-1, repeatDelay: 2, yoyo: true})


const CTAParticlesTl = gsap.timeline({repeat:-1, repeatDelay: 4, yoyo: true})
CTAParticlesTl
.to('.cta__particle--3',{x: 200, opacity: 0, duration: 0.8,})
.to('.cta__particle--4',{x: 200, opacity: 0, duration: 0.8, delay : -0.8})


const sparkTl2 = gsap.timeline({repeat:-1})
sparkTl2.from(".o-sliders__particle--1", {y: 500, duration: 3 })
.to(".o-sliders__particle--1", {opacity: 0, duration: 1,  delay : -1})
.to(".o-sliders__particle--2", {y: -700, duration: 4,  delay : -2})
.to(".o-sliders__particle--2", {opacity: 0, duration: 1,  delay : -1})

gsap.to('.o-sliders__particle--4',{x: 200, duration: 1, repeat:-1, repeatDelay: 1.5, yoyo: true})
gsap.to('.o-sliders__particle--5' ,{x: -200, duration:1, repeat:-1, repeatDelay: 2, yoyo: true})
