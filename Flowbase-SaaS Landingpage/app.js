// smooth scrooling

const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  
  scrollBy({
    top: offsetTop,
    behavior: "smooth",
  });
}



// gsap animation
gsap.to("#skate", {duration: 1, y: -100, repeat: -1, repeatDelay: 1, yoyo: true});

let timeline = gsap.timeline();
  timeline.from(".text-tittle", {x:100, opacity: 0, duration: 1})
          .from(".text-intro", {y:100, opacity:0, ease:"back", duration:1})
          .from(".btn-GS", {opacity: 0, duration: 1 })
          .from(".btn-arw", {opacity: 0, duration: 1 });


gsap.to("#chart_9",{x: 100, duration: 1, repeat: -1, yoyo: true})

let img1 = gsap.timeline({scrollTrigger:{
  trigger:".img-1-container",
  start:"top 50%",
  end:"bottom top",
  toggleActions:"restart complete reverse reset",
  markers: true
  
}})
.from("#pose_11", {opacity: 0, duration: 0.5, y: 100 })
.from("#chart_9", {opacity: 0, })
.from(".img-1-intro", {opacity: 0, duration: 0.5, x: 100 })
.from(".img-1-text", {opacity: 0, duration: 0.5, x: 100 })
.from("#LM", {opacity: 0, duration: 0.5})

gsap.to("#chart_7",{y: -100, duration: 1, repeat: -1, yoyo: true})

let img2 = gsap.timeline({scrollTrigger:{
  trigger:".img-2-container",
  start:"top 50%",
  end:"bottom top",
  toggleActions:"restart complete reverse reset",
  markers: true
  
}})
.from("#pose_4", {opacity: 0, duration: 0.5, y: 100 })
.from("#chart_7", {opacity: 0 })
.from(".img-2-intro", {opacity: 0, duration: 0.5, x: 100 })
.from(".img-2-text", {opacity: 0, duration: 0.5, x: 100 })
.from("#LM2", {opacity: 0, duration: 0.5})