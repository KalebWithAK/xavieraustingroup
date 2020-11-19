// main function
$('document').ready(() => {
    // array to hold slide source's
    const slideSrcs = [
        '',
        '',
        '',
    ];

    const s = new SlideController(slideSrcs);

    // start carousel
    $('.carousel').carousel('cycle');
    $('.carousel').carousel('wrap');
});


class SlideController {
    constructor(arr) {
        this.slideSrcs = arr;

        this.addSlides(this.slideSrcs);
    }

    // add all slides from slideSrcs to #slides
    addSlides = (slideSrcs) => {
        this.addFirstSlide(slideSrcs[0]);

        for (let i = 1; i < slideSrcs.length; i++) {
            this.addNthSlide(slideSrcs[i]);
        }
    }

    // set first slide in slideSrcs to active and append to #slides
    addFirstSlide = slideSrc => $('#slides').append(`<div class='carousel-item active'><img class='d-block w-100' src='assets/${slideSrc}' alt="First slide"></div>`);

    // append nth slide to #slides
    addNthSlide = slideSrc => $('#slides').append(`<div class='carousel-item'><img class='d-block w-100' src='assets/${slideSrc}' alt='First slide'></div>`);
}