const figureEls = document.querySelectorAll("figure");

figureEls.forEach((item) => {
  item.addEventListener("click", () => {
    figureEls.forEach((a) => {
      a.classList.remove("active");
    });

    item.classList.add("active");
  });
});
