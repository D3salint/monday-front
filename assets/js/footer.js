document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const component = document.querySelector(".footer-parallax-component");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.set(component, { y: 260 });

    gsap.to(component, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".footer-parallax",
        start: "top 95%",
        end: "bottom bottom",
        scrub: 1.2,
        markers: false,
      },
    });
  });

  mm.add("(max-width: 767px)", () => {
    gsap.set(component, { y: 580 });

    gsap.to(component, {
      y: 280,
      ease: "none",
      scrollTrigger: {
        trigger: ".footer-parallax",
        start: "top 95%",
        end: "bottom bottom",
        scrub: 1.2,
        markers: false,
      },
    });
  });

  gsap.set(".footer-column", {
    opacity: 0,
    y: 28,
  });

  gsap.set(".footer-actions", {
    opacity: 0,
    y: 28,
  });

  gsap.to(".footer-column", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-parallax-hat",
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
      trigger: ".footer-parallax-hat",
      start: "top 80%",
      once: true,
    },
  });
});