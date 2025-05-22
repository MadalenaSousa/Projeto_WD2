//HOME

var exploreImg = document.querySelector(".explore-img");
var exploreItems = document.querySelectorAll(".explore-items a");
var exploreImgPath = [];

exploreImg.src = "res/home/exploreitems/necklaces.png";

fetch("images.json")
    .then(response => response.json())
    .then(data => {
        const home = data[0];
        exploreImgPath = home[home.length - 1];
    })
    .catch(error => console.error("Error", error));


exploreItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        exploreImg.src = exploreImgPath[index].path;
    });
});

//-----

//CONTACTS

var inputArray = querySelectorAll(".contact-form input");
var sumbitButton = querySelector(".contact-form button");

sumbitButton.addEventListener('click', () => {
    inputArray.forEach(input => {
      input.value = '';
    });
  });

//-----