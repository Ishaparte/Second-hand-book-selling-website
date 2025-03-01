document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("char-count");

    // Star Rating System
    stars.forEach(star => {
        star.addEventListener("click", function() {
            let rating = this.getAttribute("data-value");
            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    // Character Counter for Feedback
    messageInput.addEventListener("input", function() {
        let remaining = 300 - this.value.length;
        charCount.textContent = remaining;
    });

    // Submit Form
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("🚀 Thank you for your feedback!");
        this.reset();
        stars.forEach(s => s.classList.remove("active"));
        charCount.textContent = "300";
    });
});
