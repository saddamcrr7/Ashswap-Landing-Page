import getPosition from './util/getPosition'
import { gsap } from "../scripts/vendor/gsap-member/src/all";

const spots = document.querySelectorAll('.js-spot')
const hoverItems = document.querySelectorAll('.o-ourway__hover-item')

window.addEventListener('load',()=> {
    spots.forEach(spot => {
      const item =  hoverItems[spot.dataset.index]
      const top = getPosition(spot).top
      let left = getPosition(spot).left

      gsap.set(item, {opacity: 0 , y: -10})

      spot.addEventListener('mouseenter',()=> {
        gsap.to(item, {opacity: 1, y: 0})
      })

      spot.addEventListener('mouseleave',()=> {
        gsap.to(item, {opacity: 0, y: -10})
      })


      item.style.top = `${top}px`
      item.style.left = `${left}px`

      if(spot.dataset.index < 3) {

        if(window.innerWidth < 991) {
          left = left + 30
          item.style.left = `${left}px`
        }else {
          left = left - 30
          item.style.left = `${left - item.clientWidth}px`
        }
      }

      if(spot.dataset.index > 3) {
        left = left + 30
        item.style.left = `${left}px`
      }

      hoverItems[3].style.top = `${top + 80}px`

    })
})
