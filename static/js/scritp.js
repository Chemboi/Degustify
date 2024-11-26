
  document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Collect form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate the fields
    if (!firstName || !lastName || !email) {
      alert('Please fill in all the fields.');
      return;
    }

    // Add interactivity (e.g., send data to server or display a success message)
    alert(`Thank you, ${firstName}, for subscribing!`);
  });


  let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:true,

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween:-32,
        }

    }
});

const swiper = new Swiper('.featured__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
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
