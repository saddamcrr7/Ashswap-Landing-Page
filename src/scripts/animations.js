
import { gsap } from "../scripts/vendor/gsap-member/src/all";

import Parallax from 'parallax-js'

window.addEventListener('load', ()=> {
  animations()
})

function animations() {
  const scene = document.getElementById('scene');
  const parallaxInstance = new Parallax(scene);

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

  const fireTl = gsap.timeline({repeat:-1, yoyo: true})

  fireTl.to('.o-hero__volcano-flame--sm', {y: -10, duration: 0.7, ease: 'none'})
  .to('.o-hero__volcano-flame--lg', {y: -15, duration: 1, delay: -0.8, ease: 'none'})


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


  gsap.to('.o-cta__particle--1',{scaleX: 0, duration: 1, repeat:-1, repeatDelay: 2, yoyo: true})
  gsap.to('.o-cta__particle--2' ,{scaleY: 0, duration: 0.8, repeat:-1, repeatDelay: 2, yoyo: true})


  const CTAParticlesTl = gsap.timeline({repeat:-1, repeatDelay: 4, yoyo: true})
  CTAParticlesTl
  .to('.o-cta__particle--3',{x: 200, opacity: 0, duration: 0.8,})
  .to('.o-cta__particle--4',{x: 200, opacity: 0, duration: 0.8, delay : -0.8})


  const sparkTl2 = gsap.timeline({repeat:-1})
  sparkTl2.from(".o-sliders__particle--1", {y: 500, duration: 3 })
  .to(".o-sliders__particle--1", {opacity: 0, duration: 1,  delay : -1})
  .to(".o-sliders__particle--2", {y: -700, duration: 4,  delay : -2})
  .to(".o-sliders__particle--2", {opacity: 0, duration: 1,  delay : -1})

  gsap.to('.o-sliders__particle--4',{x: 200, duration: 1, repeat:-1, repeatDelay: 1.5, yoyo: true})
  gsap.to('.o-sliders__particle--5' ,{x: -200, duration:1, repeat:-1, repeatDelay: 2, yoyo: true})

}



const sparkTl3 = gsap.timeline({repeat:-1, repeatDelay: 1.5,})
sparkTl3.to(".o-ourway__particle--1", {y: -200, rotate: 20, duration: 3 })
.to(".o-ourway__particle--1", {opacity: 0, duration: 1,  delay : -1})
.to(".o-ourway__particle--2", {y: -250, duration: 3, delay : -3})
.to(".o-ourway__particle--2", {opacity: 0, duration: 1,  delay : -1})
.from(".o-ourway__particle--4", {y: 350, duration: 4, delay : -3})
.to(".o-ourway__particle--4", {opacity: 0, duration: 1,  delay : -1})

gsap.to('.o-ourway__particle--3',{x: -200, duration: 1, repeat:-1, repeatDelay: 1.5, yoyo: true})

gsap.to('.o-ourway__particle-2--1',{opacity: 0, x: 100, duration: 1, repeat:-1, repeatDelay: 1, yoyo: true})
gsap.to('.o-ourway__particle-2--2',{opacity: 0, x: -100, duration: 1, repeat:-1, repeatDelay: 1, yoyo: true})
