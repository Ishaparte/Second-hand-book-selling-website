document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
    const successMessage = document.getElementById("successMessage");

    if (paymentForm) {
        paymentForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            
            const nameOnCard = document.getElementById("nameOnCard").value;
            const cardNumber = document.getElementById("cardNumber").value;
            const expMonth = document.getElementById("expMonth").value;
            const expYear = document.getElementById("expYear").value;
            const cvv = document.getElementById("cvv").value;

            
            if (!nameOnCard || !cardNumber || !expMonth || !expYear || !cvv) {
                alert("Please fill in all payment details.");
                return;
            }

            
            const paymentDetails = { nameOnCard, cardNumber, expMonth, expYear, cvv };
            localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));

           
            successMessage.innerHTML = "✅ Payment Successful!";
            successMessage.style.color = "green";

            
            paymentForm.reset();
        });
    }
});
