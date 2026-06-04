AOS.init({
  duration: 1000,
  once: true,
});

// Scroll To Top
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Dark / Light Mode
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});