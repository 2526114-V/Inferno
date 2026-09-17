const contactForm = document.querySelector(".contact-form");
const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelector(".modal-trigger");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.querySelector(".modal-title");
const modalMessage = document.querySelector(".modal-message");

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalContainer.classList.add("show");
    modalContainer.setAttribute("aria-hidden", "false");
}

function hideModal() {
    modalContainer.classList.remove("show");
    modalContainer.setAttribute("aria-hidden", "true");
}

contactForm.addEventListener("submit", (event) => {
    if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
        return;
    }

    const submitButton = contactForm.querySelector(".submit");
    submitButton.value = "Sending...";
    submitButton.disabled = true;
});

modalTrigger.addEventListener("click", () => {
    showModal(
        "How to reach us",
        "Complete the required fields and select Send message. Your message will be sent securely through the contact service."
    );
});

closeModal.addEventListener("click", hideModal);

modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
        hideModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideModal();
    }
});

modalContainer.setAttribute("aria-hidden", "true");
