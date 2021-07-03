
/**intro animation */
const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.text-hide',{y:'0%', duration:1, stagger:0.25});
tl.to('.slider-intro',{y:'-100%', duration:1.5, delay:0.5});
tl.to('.intro',{y:'-100%', duration:1},"-=1");
tl.fromTo('.profil-img',{opacity:0},{opacity:1, duration:1});


/**intro animation */
/** menu navbar mobile*/
const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".navbar-container");
const links = document.querySelectorAll(".navbar-container li");
const img_container = document.querySelector(".profil-img");
const img = document.querySelector(".profil-img > img");


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
