// ハンバーガメニュー
$(function () {
  $(".header-hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header-wrapper__nav").toggleClass("active");
  });

  $(".header-wrapper__nav a").click(function () {
    $(".header-hamburger").removeClass("active");
    $(".header-wrapper__nav").removeClass("active");
  });
});

// フェードイン
const fadeEls = document.querySelectorAll(".fadeIn");

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
      observer.unobserve(entry.target);
    }
  });
});

fadeEls.forEach((fadeEl) => {
  fadeObserver.observe(fadeEl);
});