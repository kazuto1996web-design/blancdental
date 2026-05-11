// ハンバーガメニュー
const hamburger = document.querySelector(".h-open");
const nav = document.querySelector("#h-nav");
const navLinks = document.querySelectorAll("#h-nav a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("panelactive");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("panelactive");
  });
});

// アコーディオン
const dts = document.querySelectorAll(".faq-list dt");

dts.forEach(dt => {
  dt.addEventListener("click", () => {
    const dd = dt.nextElementSibling;
    const isOpen = dd.classList.contains("open");

    document.querySelectorAll(".faq-list dd").forEach(d => d.classList.remove("open"));
    document.querySelectorAll(".faq-list dt").forEach(d => d.classList.remove("active"));

    if (!isOpen) {
      dd.classList.add("open");
      dt.classList.add("active");
    }
  });
});
// swiper
const voiceSwiper = new Swiper(".voice-wrap__swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: false,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".voice-swiper-button-next",
    prevEl: ".voice-swiper-button-prev",
  },

  breakpoints: {
    831: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});