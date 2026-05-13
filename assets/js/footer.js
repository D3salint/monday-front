document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const logo = document.querySelector(".footer-logo");

  if (logo) {
    const text = logo.textContent.trim();

    logo.innerHTML = text
      .split("")
      .map((char) => `<span class="footer-logo-char">${char}</span>`)
      .join("");

    gsap.set(".footer-logo-char", {
      display: "inline-block",
      y: -180,
      opacity: 0,
    });

    gsap.to(".footer-logo-char", {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "back.out(1.8)",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".footer-bottom-sticky",
        start: "top 30%",
        once: true,
        markers: false,
      },
    });
  }

  gsap.to(".footer-column", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-top",
      start: "top 80%",
      once: true,
    },
  });

  gsap.to(".footer-actions", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
    delay: 0.25,
    scrollTrigger: {
      trigger: ".footer-top",
      start: "top 80%",
      once: true,
    },
  });
});
