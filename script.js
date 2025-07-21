window.addEventListener("DOMContentLoaded", () => {
  // 🌗 Dark/Light Mode Toggle
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      // Add glow only in dark mode
      if (document.body.classList.contains("dark")) {
        document.body.classList.add("glow-text");
      } else {
        document.body.classList.remove("glow-text");
      }
    });
  }

  // 📨 EmailJS Contact Form
  const contactForm = document.getElementById("contact");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Optional: Add title input to pass into the template if needed
      const formData = new FormData(contactForm);
      formData.append("title", "New Portfolio Message ✨");

      emailjs.sendForm(
        'service_byd0d06',       // ✅ Your EmailJS Service ID
        'template_uvjI5eh',      // ✅ Your EmailJS Template ID
        formData,
        '8RTw1wSThhHnZvvUp'      // ✅ Your EmailJS Public Key
      ).then(
        function () {
          alert("Message sent successfully! 🎉");
          contactForm.reset();
        },
        function (error) {
          alert("Oops! Message failed 😓");
          console.error("EmailJS error:", error);
        }
      );
    });
  }

  // ⏳ Loader Hide
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) loader.style.display = "none";
  });
});
