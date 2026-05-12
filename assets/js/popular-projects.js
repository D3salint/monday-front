document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 75%",
        once: true,
      },
    })
    .to(".projects-label", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .to(
      ".projects-title",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.35"
    )
    .to(
      ".project-card",
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.25"
    );
});