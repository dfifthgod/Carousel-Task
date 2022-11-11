const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let slidewidth = slideImage[0].clientWidth;
let currentSlide = 0;
let numberOfImages = slideImage.length;



function init(){

    slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");
}

init();

// next button

nextBtn.addEventListener( "click", () => {
    if(currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

//prev button 

prevBtn.addEventListener( "click", () => {
    if(currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        currentSlide = numberOfImages - 1;
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

// go to slide

function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slidewidth * slideNumber +"px)";
}