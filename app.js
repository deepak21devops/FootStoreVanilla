const menuItems = document.querySelectorAll(".menuItem");
const wrapper = document.querySelector(".sliderWrapper");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
