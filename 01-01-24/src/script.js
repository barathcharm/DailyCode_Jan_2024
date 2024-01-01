let starRatings = document.querySelectorAll(".fa-star");
let message = document.querySelector(".message");
let fiveStarRatingMsg = " Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service."
let fourStarRatingMsg = "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.";
let threeStarRatingMsg = "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.";
let twoStarRatingMsg = "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.";
let oneStarRatingMsg = "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.";

starRatings.forEach((e, i) => {
    e.addEventListener("click", el => {
        console.log(starRatings[i].classList)
        for (let j = 0; j <= i; j++) {
            starRatings[j].classList.add("starColoured")
        }
        if (i < starRatings.length) {
            for (let k = i + 1; k < starRatings.length; k++) {
                starRatings[k].classList.remove("starColoured")
            }
        }
        if (i == 0) {
            console.log(i)
            message.innerHTML = oneStarRatingMsg;
        } else if (i == 1) {
            message.innerHTML = twoStarRatingMsg;
        } else if (i == 2) {
            message.innerHTML = threeStarRatingMsg;
        } else if (i == 3) {
            message.innerHTML = fourStarRatingMsg;
        } else if (i == 4) {
            message.innerHTML = fiveStarRatingMsg;
        }
    })
})