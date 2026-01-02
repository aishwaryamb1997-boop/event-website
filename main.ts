export {}; // ensures module scope (prevents redeclaration issues)

const bookButton = document.getElementById("bookBtn") as HTMLButtonElement | null;

if (bookButton) {
    bookButton.addEventListener("click", () => {
        alert("Booking flow coming soon!");
    });
}

const shapes = document.querySelectorAll<HTMLElement>(".shape");

shapes.forEach((shape, index) => {
    let direction = index % 2 === 0 ? 1 : -1;
    let position = 0;

    setInterval(() => {
        position += direction * 0.2;
        shape.style.transform = `translateY(${position}px)`;
        if (Math.abs(position) > 12) direction *= -1;
    }, 30);
});
const form = document.getElementById("bookingForm") as HTMLFormElement | null;
const successMsg = document.getElementById("formSuccess") as HTMLParagraphElement | null;

if (form && successMsg) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        // Helper function
        function validateField(
            input: HTMLInputElement | HTMLSelectElement,
            errorEl: HTMLElement,
            condition: boolean
        ) {
            const group = input.parentElement as HTMLElement;
            if (!condition) {
                group.classList.add("invalid");
                errorEl.style.display = "block";
                isValid = false;
            } else {
                group.classList.remove("invalid");
                errorEl.style.display = "none";
            }
        }

        // Get fields
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const phone = document.getElementById("phone") as HTMLInputElement;
        const ticket = document.getElementById("ticket") as HTMLSelectElement;

        // Validate fields
        validateField(
            name,
            document.getElementById("nameError")!,
            name.value.trim().length > 0
        );

        validateField(
            email,
            document.getElementById("emailError")!,
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
        );

        validateField(
            phone,
            document.getElementById("phoneError")!,
            phone.value.trim().length >= 10
        );

        validateField(
            ticket,
            document.getElementById("ticketError")!,
            ticket.value !== ""
        );

        // Final result
        if (isValid) {
            successMsg.style.display = "block";
            form.reset();
        }
    });
}

