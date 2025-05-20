let selectedRating = null;
const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // حذف انتخاب قبلی
    ratingButtons.forEach((b) => b.classList.remove("selected"));
    // علامت‌گذاری دکمه فعلی
    btn.classList.add("selected");
    selectedRating = btn.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    localStorage.setItem("rating", selectedRating);
    window.location.href = "thankyou.html";
  } else {
    alert("Please Choose a Rating");
  }
});
