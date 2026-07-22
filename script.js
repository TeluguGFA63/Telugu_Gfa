// ==========================
// Telugu GFA Product Slider
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(function (slider) {

        const slides = slider.querySelectorAll(".slide");

        let index = 0;

        if (slides.length <= 1) return;

        setInterval(function () {

            slides[index].classList.remove("active");

            index++;

            if (index >= slides.length) {
                index = 0;
            }

            slides[index].classList.add("active");

        }, 3000);

    });

});
