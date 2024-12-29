// Nav Bar Script

let icon = document.querySelector(".icon-bar");
let nav = document.querySelector(".nav");

icon.addEventListener("click", () => {
  nav.classList.toggle("showNav");
  if (nav.classList.contains("showNav")) {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// click to top header
const scrollBtn = document.querySelector("#scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// login page script
function togglePassword() {
  const passwordField = document.getElementById("password");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
}

// Tab Switching Logic
document.getElementById("loginTab").addEventListener("click", () => {
  document.getElementById("loginTab").classList.add("active-tab");
  document.getElementById("registerTab").classList.remove("active-tab");
  // Add register form switching logic here if needed
});

document.getElementById("registerTab").addEventListener("click", () => {
  document.getElementById("registerTab").classList.add("active-tab");
  document.getElementById("loginTab").classList.remove("active-tab");
  // Add login form switching logic here if needed
});
