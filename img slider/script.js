let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');
let thumbnail = slider.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

// Function to initialize thumbnail correctly
thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
    moveSlider('next');
};

// Function for prev button
prevBtn.onclick = function () {
    moveSlider('prev');
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = thumbnail.querySelectorAll('.item');
    
    if (direction === 'next') {
        // Move the first item to the end
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else if (direction === 'prev') {
        // Move the last item to the beginning
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    // Remove the animation class after the animation ends
    slider.addEventListener(
        'animationend',
        function () {
            slider.classList.remove(direction);
        },
        { once: true } // Ensures the event listener is removed automatically
    );
}
