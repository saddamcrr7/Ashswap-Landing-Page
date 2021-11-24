import { gsap } from "../scripts/vendor/gsap-member/src/all";

window.addEventListener('load', ()=> {
  window.innerWidth < 991 && function() {
    var t = document.querySelector(".c-navbar");
    if (t) {
        t.isOpen = !1,
        t.toggler = t.querySelector(".c-navbar__toggler"),
        t.group = t.querySelector(".c-navbar__group"),
        t.items = t.querySelectorAll(".c-navbar__nav-item"),
        t.btn = t.querySelectorAll(".c-navbar__btn"),
        t.togglerSpans = t.querySelectorAll(".js-toggler-sapn");
        var e = gsap.timeline()
          , r = gsap.timeline();
        e.pause(),
        r.pause(),
        e.to(t.group, {
            height: '100vh'
        }),
        r.to(t.togglerSpans[0], {
            rotate: 45,
            y: 9,
            duration: .2
        }).to(t.togglerSpans[1], {
            x: 50,
            duration: .5,
            delay: -.2
        }).to(t.togglerSpans[2], {
            rotate: -45,
            y: -6,
            duration: .2,
            delay: -.5
        }),
        t.items.forEach((function(t, r) {
            e.from(t, {
                opacity: 0,
                y: 20,
                duration: .2
            })
        }
        )),
        e.from(t.btn, {
            opacity: 0,
            y: 20,
            duration: .2
        }),
        t.toggler.addEventListener("click", (function() {
            0 == t.isOpen ? (e.play(),
            r.play(),
            t.isOpen = !0,
            document.body.style.overflow = "hidden") : (e.reverse(),
            r.reverse(),
            document.body.style.overflow = "auto",
            t.isOpen = !1)
        }
        ))
    }
  }();

})

