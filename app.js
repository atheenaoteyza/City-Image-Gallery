const apiKey = "TWvM_zLxG9ar3m65o0pYxe_7lbNpXHpmhsKc_eR4Qbs";

document.addEventListener("DOMContentLoaded", () => {
  const flexItems = document.querySelectorAll(".flex-items");

  flexItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const color = window.getComputedStyle(item).backgroundColor;
      document.body.style.backgroundColor = color;
    });

    item.addEventListener("mouseout", () => {
      document.body.style.backgroundColor = "#e02525"; // Reset to the default background color
    });
  });
});
