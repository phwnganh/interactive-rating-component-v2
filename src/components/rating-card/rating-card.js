const options = document.querySelectorAll(".rating-card__option");
const submitBtn = document.querySelector(".rating-card__submit");

let selectedRating = null;

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(item => {
            item.dataset.state = "idle";
        })
        console.log("option", option);
        option.dataset.state = "selected";

        selectedRating = option.dataset.rating; // thay vi option.textContent
    })
})

submitBtn.addEventListener("click", () => {
    if(!selectedRating) {
        alert("Please select a rating");
        return;
    }

    console.log("click")


    localStorage.setItem("selectedRating", selectedRating);

    window.location.href = "../../../thankyou.html";

})