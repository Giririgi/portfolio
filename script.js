// Small enhancement: highlight the current navigation section.
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-links a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
