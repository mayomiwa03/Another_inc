const month = document.querySelector(".month");
const yearPl = document.querySelector(".yearly");

const choose = function () {
  month.classList.toggle("active");
  yearPl.classList.toggle("active");
};

document.querySelector(".plan").addEventListener("click", choose);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
