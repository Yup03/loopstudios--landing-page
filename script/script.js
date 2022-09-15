"use script";

const btnEl = document.querySelector(".btn-mobile-nav"),
  navEl = document.querySelector(".nav"),
  allsections = document.querySelectorAll(".section");

btnEl.addEventListener("click", () => navEl.classList.toggle("nav--open"));


const obs = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.15,
  rootMargin: "45px",
});
allsections.forEach((section) => {
  section.classList.add("section--hidden");
  obs.observe(section);
});

function reveal(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  obs.unobserve(entry.target);

  console.log(entry);
}
