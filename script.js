function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 20 + "px"; 
    crsr.style.top = dets.y + 20 + "px"; 
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start:"top 30%",
        end:"top 0",
        scrub:2,
    }
});

tl.to(".page1 h1", {
    x:-90,
}, "anim")

tl.to(".page1 h2", {
    x:90,
}, "anim")

tl.to(".page1 video", {
    width:"90%",
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start:"top -110%",
        end:"top -120",
        scrub:2,
    }
})

tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start:"top -320%",
        end:"top -380",
        scrub:2,
    }
})

tl3.to(".main", {
    backgroundColor: "#111",
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "400px"
        crsr.style.height = "350px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent"
        var att = elem.getAttribute("data-image")
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector(".purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})