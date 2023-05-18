// assignment
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

// scroll

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.article-text', {delay:200, origin: 'top'});
sr.reveal('.main-image', {delay:450, origin: 'top'});
sr.reveal('.icons', {delay:500, origin: 'left'});

// // scroll section
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
//
// window.onscroll = () => {
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id')
//
//         if (top >= offset && top < offset + height){
//             // active navbar links
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id +']').classList.add('active');
//             })
//         }
//     })
//     // sticky header
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
// }
