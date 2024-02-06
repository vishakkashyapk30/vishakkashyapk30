//sticky navbar
window.onscroll = () => {
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
};

//scroll sections active
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
}

//For Achievements
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Dark Light Mode
let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

//Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading , .edu-heading' , {origin: 'top'});
ScrollReveal().reveal('.home-img img, .skills-container, .achievements-wrapper, .blog-box' , {origin: 'bottom'});
ScrollReveal().reveal('.about-content', {origin: 'right'});

