const apiKey = "TWvM_zLxG9ar3m65o0pYxe_7lbNpXHpmhsKc_eR4Qbs";

async function fetchMessage(url) {
  const response = await fetch(url);
  const body = await response.json();
  const { results } = body;
  return results;
}

document.addEventListener("DOMContentLoaded", () => {
  const flexItems = document.querySelectorAll(".flex-items");

  flexItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imageUrl = window.getComputedStyle(item).backgroundImage;
      document.querySelector(".background").style.backgroundImage = imageUrl;
    });
  });
});
