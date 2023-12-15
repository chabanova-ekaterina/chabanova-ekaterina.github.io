/*Swiper*/
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    
    autoplay: {
    delay: 2500,
    disableOnInteraction: false
    },
    
    loop: true,
    speed: 800,
    hideOnClick: false,
    
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    mousewheel: true,
    keyboard: true,
    dynamicBullets: true
    },
    
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    },
    });
    
    /*FAQ*/
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
    
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {content.style.maxHeight = content.scrollHeight + "px";
        }
        });
    }
    
    /* menu*/
        const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links a");
      
        burger.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
      
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.5
              }s `;
            }
          });
          burger.classList.toggle("toggle");
        });

      };
      
      navSlide();
