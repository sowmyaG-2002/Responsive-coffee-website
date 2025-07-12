// ===== Mobile Menu Open/Close =====
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// ===== Swiper Slider Initialization =====
const swiper = new Swiper('.slider-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// ===== Smooth Scroll for "Order Now" and "Contact Us" Buttons =====
document.querySelectorAll('.order-now, .contact-us').forEach(button => {
  button.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Contact Form Submit with Popup Message =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("formSuccessPopup");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset();
          popup.style.display = "block";

          setTimeout(() => {
            popup.style.display = "none";
          }, 4000);
        } else {
          alert("⚠️ Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("❌ Error submitting the form.");
      }
    });
  }
});
