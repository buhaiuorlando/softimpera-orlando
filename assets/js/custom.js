const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('#mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
});


const carousel = document.querySelector('.carousel');
const pageNumbers = document.querySelectorAll('.page-number');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

pageNumbers.forEach((pageNumber, index) => {
    pageNumber.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        updatePagination();
    });
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pageNumbers.length;
    updateCarousel();
    updatePagination();
});

function updateCarousel() {
    const offset = -currentIndex * (370 + 35); // 370px width + 35px spacing
    carousel.style.transform = `translateX(${offset}px)`;
}

function updatePagination() {
    pageNumbers.forEach(pageNumber => pageNumber.classList.remove('active'));
    pageNumbers[currentIndex].classList.add('active');
}

const mediciiCarousel = document.querySelector('.medicii-carousel');
const mediciiPrevButton = document.querySelector('.medicii-carousel-prev');
const mediciiNextButton = document.querySelector('.medicii-carousel-next');

let mediciiCurrentIndex = 0;
const cardWidth = 260;
const visibleCards = 4;
const totalCards = document.querySelectorAll('.medicii-card').length;

if (mediciiNextButton) {

    mediciiNextButton.addEventListener('click', () => {
        if (mediciiCurrentIndex < totalCards - visibleCards) {
            mediciiCurrentIndex++;
            updateMediciiCarousel();
        }
    });
}

if (mediciiPrevButton) {

    mediciiPrevButton.addEventListener('click', () => {
        if (mediciiCurrentIndex > 0) {
            mediciiCurrentIndex--;
            updateMediciiCarousel();
        }
    });
}

function updateMediciiCarousel() {
    const offset = -mediciiCurrentIndex * (cardWidth + 40);
    mediciiCarousel.style.transform = `translateX(${offset}px)`;
}


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1220: {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


document.querySelectorAll('.avantaje-item').forEach(item => {
    item.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        document.querySelectorAll('.avantaje-item').forEach(el => el.classList.remove('active'));
        
        if (!isActive) {
            this.classList.add('active');
        }
    });
});


window.addEventListener('scroll', function() {
    var header = document.querySelector('header'); 
    var scrollPosition = window.scrollY; 
    if (scrollPosition > 50) { 
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled'); 
    }
});
