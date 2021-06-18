// gsap animation

// let home = document.getElementsByClassName("home");
// let feature = document.getElementsByClassName("feature");
// let pricing = document.getElementsByClassName("pricing");
// let blog = document.getElementsByClassName("blog");


const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}