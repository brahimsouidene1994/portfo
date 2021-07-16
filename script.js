/**intro animation */
const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.text-hide',{y:'0%', duration:1, stagger:0.25});
tl.to('.slider-intro',{y:'-100%', duration:1.5, delay:0.5});
tl.to('.intro',{y:'-100%', duration:1},"-=1.25");
tl.fromTo('.starting-text',{opacity:0},{opacity:1, duration:1});

/**intro animation */
/** animation of scroll pages */
$(document).ready(function(){
    $("#btn-footer").click(function(){
        $('html, body').animate({
            scrollTop: $("#footer-part").offset().top
        }, 2000);
    });
    $("#btn-education").click(function(){
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 2000);
    });
    $("#btn-services").click(function(){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 2000);
    })
    $("#btn-works").click(function(){
        $('html, body').animate({
            scrollTop: $("#works").offset().top
        }, 2000);
    })
  });
/** animation of scroll pages */
/** menu navbar mobile*/
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".navbar-container");
const links = document.querySelectorAll(".navbar-container li");
const img_container = document.querySelector(".profil-img");
const img = document.querySelector(".profil-img > img");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    if(currentScrollPos === 0){
        document.getElementById("navbar").style.background = "none";
    }else{
        document.getElementById("navbar").style.background = "rgb(40, 54, 24)";
    }
  }
  else {
    document.getElementById("navbar").style.top = "-10%";  
}
  prevScrollpos = currentScrollPos;
}
/**active link item */
var header = document.getElementById("my-navlinks");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
/**active link item */
/**hamburger */
hamburger.addEventListener('click',()=>{
    nav_links.classList.toggle('open');   
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
});

/**hamburger */



/**academy animation */
// var controller = new ScrollMagic.Controller();
// var sceneAcademy1 = new ScrollMagic.Scene({
//     triggerElement : '.historique-container .historique-body'
// })
// .setClassToggle('.first-study','show')
// .addTo(controller);
// var sceneAcademy2 = new ScrollMagic.Scene({
//     triggerElement : '.historique-container .historique-body'
// })
// .setClassToggle('.second-study','show')
// .addTo(controller);
// var sceneAcademy3 = new ScrollMagic.Scene({
//     triggerElement : '.historique-container .historique-body'
// })
// .setClassToggle('.third-study','show')
// .addTo(controller);
/**academy animation */

function  goToContact(){
    $('html, body').animate({
        scrollTop: $("#footer-part").offset().top
    }, 2000);
}
/** menu services */
function openSkills(evt, skills) {
    var  i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-content");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skills).style.display = "block";
    document.getElementById(skills).style.width = "100%";
    document.getElementById(skills).style.height = "100%";
    document.getElementById(skills).style.background = "none";
    evt.currentTarget.className += " active";
}
/** menu services */