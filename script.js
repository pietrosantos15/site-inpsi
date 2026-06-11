document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuButton");
  const mobileMenu = document.querySelector("#mobileMenu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuButton.setAttribute("aria-expanded", String(!isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const carousel = document.querySelector("#carousel");
  const dots = [...document.querySelectorAll(".carousel-dot")];
  const prevButton = document.querySelector("#carouselPrev");
  const nextButton = document.querySelector("#carouselNext");
  let slide = 0;

  function setSlide(next) {
    if (!carousel || dots.length === 0) return;

    slide = (next + dots.length) % dots.length;
    carousel.style.transform = `translateX(-${slide * 100}%)`;

    dots.forEach((dot, index) => {
      dot.className = `carousel-dot h-2.5 w-8 rounded-full ${
        index === slide ? "bg-bone" : "bg-bone/45"
      }`;
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => setSlide(index));
  });

  prevButton?.addEventListener("click", () => setSlide(slide - 1));
  nextButton?.addEventListener("click", () => setSlide(slide + 1));

  // CORREÇÃO: A linha "setInterval(() => setSlide(slide + 1), 5200);" foi removida.
  // Agora o carrossel só mudará quando o usuário clicar nas setas (‹ ou ›) ou nas barras inferiores.
});