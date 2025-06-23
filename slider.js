let currentSlideIndex = 0;
const totalSlides = 5;
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    const translateX = -currentSlideIndex * 20;
    slider.style.transform = `translateX(${translateX})`;

    // dots update
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex)
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    updateSlider();
}

function currentSlide(slidIndex) {
    currentSlideIndex = slidIndex - 1;
    updateSlider();
}

let autoPlayInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

sliderContainer.addEventListener('mouseleave',()=>{
    autoPlayInterval = setInterval(()=>{
        changeSlide(1);
    }, 5000);
})

//==============
let startX = 0;
let endX=0;

sliderContainer.addEventListener('touchstart', (e)=>{
    startX = e.touches[0].clientX;
});
sliderContainer.addEventListener('touchend', (e)=>{
    endX = e.changedTouches[0].clientX;
    const difference = startX - endX;
    if(Math.abs(difference)>50){
        if(difference>0){
            changeSlide(1);
        }else{
            changeSlide(-1);
        }
    }
});











