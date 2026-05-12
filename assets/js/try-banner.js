document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const title = document.querySelector(".try-banner-title");

  if (title && !title.dataset.splitted) {
    title.innerHTML = title.textContent
      .trim()
      .split(" ")
      .map((word) => `<span class="try-banner-word">${word}</span>`)
      .join(" ");

    title.dataset.splitted = "true";
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#try-banner",
      start: "top 75%",
      once: true,
    },
    defaults: {
      ease: "power3.out",
    },
  });

  tl.to(".try-banner-card", {
    opacity: 1,
    scale: 1,
    duration: 0.9,
  });

  tl.to(
    ".try-banner-label",
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
    },
    "-=0.45"
  );

  tl.to(
    ".try-banner-word",
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.07,
    },
    "-=0.35"
  );

  tl.to(
    ".try-banner-button",
    {
      opacity: 1,
    //   duration: 0.6,
    },
    "-=0.25"
  );

  tl.fromTo(
    ".try-rect-left",
    {
      opacity: 0,
      x: -160,
      y: -80,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.6,
      ease: "power4.out",
    },
    "-=0.9"
  );

  tl.fromTo(
    ".try-rect-right",
    {
      opacity: 0,
      x: 140,
      y: 120,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.7,
      stagger: 0.12,
      ease: "power4.out",
    },
    "-=1.4"
  );
});
