
/**intro animation */
const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.text-hide',{y:'0%', duration:1, stagger:0.25});
tl.to('.slider-intro',{y:'-100%', duration:1.5, delay:0.5});
tl.to('.intro',{y:'-100%', duration:1},"-=1");
tl.fromTo('.starting-text',{opacity:0},{opacity:1, duration:1});

/**intro animation */
/** menu navbar mobile*/
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".navbar-container");
const links = document.querySelectorAll(".navbar-container li");
const img_container = document.querySelector(".profil-img");
const img = document.querySelector(".profil-img > img");

window.onscroll = ()=>{
    // pageYOffset or scrollY
    let y = window.pageYOffset ;
  if (y > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

hamburger.addEventListener('click',()=>{
    nav_links.classList.toggle('open');   
});
links.forEach(link => {
    link.classList.toggle('fade');
    link.addEventListener('click',()=>{
        if(nav_links.classList.toggle("open")){
            nav_links.classList.toggle("open")
            links.forEach(item=>{
                if(item.classList.toggle("fade")){
                    item.classList.toggle("fade")
                }
            })
        }
    });
});
img_container.addEventListener('click',()=>{
    img_container.classList.toggle('open');
    img.classList.toggle('open');
})
/** menu navbar mobile*/

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement : '.aboutme-container'
})
.setClassToggle('.profil-img','show')
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement : '.historique-container'
})
.setClassToggle('.historique-body','show')
.addTo(controller);


/**image profil */

const slider = document.querySelector(".slider");
const img_before = document.querySelector(".img-before");
const img_after = document.querySelector(".img-after");
const textHover = document.querySelector(".img-text");
const img_profil_container = document.querySelector(".content-img");

const moveSlider = (e)=>{
    textHover.classList.add('hide');
    let xPos = e.layerX;
    const size = img_profil_container.offsetWidth;
    img_before.style.width= xPos +'px';
    slider.style.left= xPos +'px';

    if(xPos < 30 ){
        img_before.style.width= 0 +'px';
        slider.style.left= 0 +'px';
        textHover.classList.remove('hide') ; 
    }
    if(xPos + 30 > size){
        
        img_before.style.width= size +'px';
        slider.style.left= size +'px'; 
        textHover.classList.remove('hide')  ;
    }
}

img_profil_container.addEventListener('mousemove',moveSlider);
/**image profil */

/**skills animation */
