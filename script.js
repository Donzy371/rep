document.getElementById("menu-toggle").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Thank you for reaching out! We'll get back to you soon.";
  this.reset();
});



const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission
    message.textContent = "Thank you! Your message has been received.";
    form.reset();
  });
}


const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


