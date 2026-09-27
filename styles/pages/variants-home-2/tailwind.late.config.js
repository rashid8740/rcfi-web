// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "document.addEventListener DOMContentLoaded const slides document.querySelectorAll .hero-slide dots .slide-dot prevBtn document.getElementById slide-prev-btn nextBtn slide-next-btn heroSection hero-slider-section let currentSlide slideInterval null function showSlide index slides.forEach slide i if slide.classList.remove slide.classList.add else dots.forEach dot dot.className nextSlide next slides.length prevSlide prev startAutoPlay !slideInterval setInterval stopAutoPlay clearInterval nextBtn.addEventListener click prevBtn.addEventListener dot.addEventListener target parseInt dot.getAttribute data-target heroSection.addEventListener mouseenter mouseleave productTabButtons .product-tab-btn productTabPanels .product-tab-panel productTabButtons.forEach btn btn.addEventListener product btn.getAttribute data-product b b.classList.remove b.classList.add btn.classList.remove btn.classList.add productTabPanels.forEach panel panel.classList.add activePanel product-tab- activePanel.classList.remove" }],
};
