document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#news",
        start: "top 75%",
        once: true,
      },
    })
    .to(".news-title", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .to(
      ".news-more",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.35"
    )
    .fromTo(
      ".news-card",
      {
        opacity: 0,
        scale: 0.92,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.25"
    );
});