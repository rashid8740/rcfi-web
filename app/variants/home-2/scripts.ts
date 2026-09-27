// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    document.addEventListener("DOMContentLoaded", () => {
      // 1. HERO ROTATING SLIDES (7-SEC ROTATE, PAUSE ON HOVER)
      const slides = document.querySelectorAll(".hero-slide");
      const dots = document.querySelectorAll(".slide-dot");
      const prevBtn = document.getElementById("slide-prev-btn");
      const nextBtn = document.getElementById("slide-next-btn");
      const heroSection = document.getElementById("hero-slider-section");
      
      let currentSlide = 0;
      let slideInterval = null;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.remove("hidden");
            slide.classList.add("active-slide");
          } else {
            slide.classList.add("hidden");
            slide.classList.remove("active-slide");
          }
        });

        dots.forEach((dot, i) => {
          if (i === index) {
            dot.className = "w-8 h-2 rounded-full bg-secondary-fixed transition-all slide-dot";
          } else {
            dot.className = "w-2.5 h-2 rounded-full bg-tertiary-container hover:bg-secondary-fixed/50 transition-all slide-dot";
          }
        });
        currentSlide = index;
      }

      function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
      }

      function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
      }

      function startAutoPlay() {
        if (!slideInterval) {
          slideInterval = setInterval(nextSlide, 7000);
        }
      }

      function stopAutoPlay() {
        clearInterval(slideInterval);
        slideInterval = null;
      }

      if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); });
      if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); });

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const target = parseInt(dot.getAttribute("data-target"), 10);
          showSlide(target);
        });
      });

      if (heroSection) {
        heroSection.addEventListener("mouseenter", stopAutoPlay);
        heroSection.addEventListener("mouseleave", startAutoPlay);
      }

      startAutoPlay();

      // 2. PRODUCT TAB SWITCHER
      const productTabButtons = document.querySelectorAll(".product-tab-btn");
      const productTabPanels = document.querySelectorAll(".product-tab-panel");

      productTabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const product = btn.getAttribute("data-product");

          productTabButtons.forEach((b) => {
            b.classList.remove("bg-primary", "text-on-primary", "shadow-sm");
            b.classList.add("text-on-surface-variant");
          });

          btn.classList.remove("text-on-surface-variant");
          btn.classList.add("bg-primary", "text-on-primary", "shadow-sm");

          productTabPanels.forEach((panel) => {
            panel.classList.add("hidden");
          });

          const activePanel = document.getElementById("product-tab-" + product);
          if (activePanel) {
            activePanel.classList.remove("hidden");
          }
        });
      });
    });
  `,
];
