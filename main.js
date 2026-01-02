"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookButton = document.getElementById("bookBtn");
if (bookButton) {
    bookButton.addEventListener("click", function () {
        alert("Booking flow coming soon!");
    });
}
var shapes = document.querySelectorAll(".shape");
shapes.forEach(function (shape, index) {
    var direction = index % 2 === 0 ? 1 : -1;
    var position = 0;
    setInterval(function () {
        position += direction * 0.2;
        shape.style.transform = "translateY(".concat(position, "px)");
        if (Math.abs(position) > 12)
            direction *= -1;
    }, 30);
});
var form = document.getElementById("bookingForm");
var successMsg = document.getElementById("formSuccess");
if (form && successMsg) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var isValid = true;
        // Helper function
        function validateField(input, errorEl, condition) {
            var group = input.parentElement;
            if (!condition) {
                group.classList.add("invalid");
                errorEl.style.display = "block";
                isValid = false;
            }
            else {
                group.classList.remove("invalid");
                errorEl.style.display = "none";
            }
        }
        // Get fields
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var ticket = document.getElementById("ticket");
        // Validate fields
        validateField(name, document.getElementById("nameError"), name.value.trim().length > 0);
        validateField(email, document.getElementById("emailError"), /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
        validateField(phone, document.getElementById("phoneError"), phone.value.trim().length >= 10);
        validateField(ticket, document.getElementById("ticketError"), ticket.value !== "");
        // Final result
        if (isValid) {
            successMsg.style.display = "block";
            form.reset();
        }
    });
}
