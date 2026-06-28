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
