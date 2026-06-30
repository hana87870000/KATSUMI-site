"use strict";
{
  // ハンバーガーメニュー
  const btn = document.querySelector(".hamburger-btn");
  const menu = document.querySelector(".hamburger-menu");

  btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  //   ヘッダー消す
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add("is-hidden");
        } else {
          header.classList.remove("is-hidden");
        }
      });
    },
    {
      threshold: 0,
    },
  );

  observer.observe(footer);

  //   WORKS--写真の切り替わり
  const items = document.querySelectorAll(".works__item");
  const images = document.querySelectorAll(".works__image");

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      images.forEach((image) => {
        image.classList.remove("is-active");
      });

      images[index].classList.add("is-active");
    });
  });
}
