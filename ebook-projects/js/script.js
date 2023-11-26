// Add custom JavaScript here

function userScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark1");
    } else {
      navbar.classList.remove("bg-dark1");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
