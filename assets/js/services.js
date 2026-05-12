document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".label-services, .title-services", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#services",
      start: "top 75%",
      once: true,
    },
  });

  gsap.to(".services-bg-circle", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#services",
      start: "top 75%",
      once: true,
    },
  });

  gsap.to(".services-bg-pattern", {
    opacity: 1,
    duration: 1,
    delay: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#services",
      start: "top 75%",
      once: true,
    },
  });

  gsap.fromTo(
    ".services-bg-illustration",
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#services",
        start: "top 65%",
        once: true,
      },
    }
  );

  gsap.to(".service-card", {
    opacity: 1,
    "--service-anim-y": "0px",
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-list",
      start: "top 75%",
      once: true,
    },
  });
});
