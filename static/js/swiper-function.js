




const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    speed:1000,
    effect: 'slide',
    easing:'ease-in-out',
  

    autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
    
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }

    },
    on: {
        slideChange: function () {
            updateDescription(this);
        },
    },

});


function updateDescription(swiperInstance) {
    // Get the active slide
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];

    // Extract data attributes
    const product = activeSlide.getAttribute('data-product') || 'N/A';
    const description = activeSlide.getAttribute('data-description') || 'N/A';
    const price = activeSlide.getAttribute('data-price') || 'N/A';
    const pairings = activeSlide.getAttribute('data-pairings') || 'N/A';

    // Update the description content
    const descriptionContainer = document.querySelector('.swiper__description__list');
    descriptionContainer.innerHTML = `
        <tr>
            <td>Product:</td>
            <td>${product}</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>${description}</td>
        </tr>
        <tr>
            <td>Price:</td>
            <td>${price}</td>
        </tr>
        <tr>
            <td>Pairings:</td>
            <td>${pairings}</td>
        </tr>
    `;
}


updateDescription(swiperHome);








const swiper = new Swiper('.featured__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
