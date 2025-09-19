// Simple form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        messageBox.textContent = "⚠️ Please fill in all fields.";
        messageBox.style.color = "red";
      } else {
        messageBox.textContent = "✅ Thank you! Your message has been sent.";
        messageBox.style.color = "green";
        form.reset();
      }
    });
  }
});
