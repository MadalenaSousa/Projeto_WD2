//CONTACTS

var inputArray = querySelectorAll(".contact-form input");
var sumbitButton = querySelector(".contact-form button");

sumbitButton.addEventListener('click', () => {
    inputArray.forEach(input => {
      input.value = '';
    });
  });

//-----