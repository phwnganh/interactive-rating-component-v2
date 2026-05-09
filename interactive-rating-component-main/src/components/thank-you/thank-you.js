const ratingElement = document.querySelector(".thank-you__rating")
const selectedRating = localStorage.getItem("selectedRating");

ratingElement.textContent = selectedRating;