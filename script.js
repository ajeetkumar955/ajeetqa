const navLinks = document.querySelectorAll(".top-nav a");
const sections = document.querySelectorAll("section");

/* Smooth Scroll on Click */
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").includes(".pdf")) return;

    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({ behavior: "smooth" });
  });
});

/* Scroll Spy Active Highlight */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => link.classList.remove("active"));

  if (scrollY < 200) return;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
