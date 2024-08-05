const apiKey = "TWvM_zLxG9ar3m65o0pYxe_7lbNpXHpmhsKc_eR4Qbs";

async function fetchMessage(url) {
  const response = await fetch(url);
  const body = await response.json();
  const { results } = body;
  return results;
}

function getUrl(input) {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=TWvM_zLxG9ar3m65o0pYxe_7lbNpXHpmhsKc_eR4Qbs`;
  return url;
}

function getImgSrc(urlsArray) {
  const { urls } = urlsArray;
  return urls.raw;
}

function getArrayOfImgUrl(fetchedResult) {
  let newArray = [];
  fetchedResult.forEach((element) => {
    newArray.push(getImgSrc(element));
  });
  return newArray;
}

const fetchedSample = await fetchMessage(
  "https://api.unsplash.com/search/photos?page=1&query=new%20york%201800&client_id=TWvM_zLxG9ar3m65o0pYxe_7lbNpXHpmhsKc_eR4Qbs"
);
const sampleArrayOfRawImgs = getArrayOfImgUrl(fetchedSample);

function switchBg() {
  const flexItems = document.querySelectorAll(".flex-items");
  const arrayOfImgs = sampleArrayOfRawImgs;
  for (let i = 0; i < flexItems.length; i++) {
    if (i < arrayOfImgs.length) {
      flexItems[i].style.backgroundImage = `url(${arrayOfImgs[i]})`;
    }
  }
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
