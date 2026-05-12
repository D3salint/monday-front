document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const footerMatchbox = document.querySelector(".footer-matchbox");
  const footerLid = document.querySelector(".footer-lid");
  const footerLogo = document.querySelector(".footer-logo");
  const footerCopyright = document.querySelector(".footer-copyright");
  const footerNav = document.querySelector(".footer-nav");
  const footerActions = document.querySelector(".footer-actions");

  if (!footerMatchbox || !footerLid || !footerLogo) return;

  if (!footerLogo.dataset.splitted) {
    footerLogo.innerHTML = footerLogo.textContent
      .trim()
      .split("")
      .map((letter) => (letter === " " ? `<span class="inline-block w-[0.3em]"></span>` : `<span class="footer-logo-letter">${letter}</span>`))
      .join("");

    footerLogo.dataset.splitted = "true";
  }

  gsap.set(".footer-column", {
    opacity: 0,
    y: 30,
  });

  gsap.set(".footer-actions", {
    opacity: 0,
    y: 30,
  });

  gsap.set(footerLid, {
    yPercent: 0,
  });

  gsap.set(".footer-logo-letter", {
    opacity: 0,
    y: -120,
    rotate: 8,
  });

  gsap.set(footerCopyright, {
    opacity: 0,
    y: 20,
  });

  gsap.to(".footer-column", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: footerNav,
      start: "top 85%",
      once: true,
    },
  });

  gsap.to(".footer-actions", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: footerActions,
      start: "top 92%",
      once: true,
    },
  });

  let logoPlayed = false;

  const playLogo = () => {
    if (logoPlayed) return;
    logoPlayed = true;

    console.log("logo animation started");

    gsap.to(".footer-logo-letter", {
      opacity: 1,
      y: 0,
      rotate: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: "bounce.out",
      overwrite: true,
    });

    gsap.to(".footer-copyright", {
      opacity: 1,
      y: 0,
      delay: 0.45,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  };

  gsap.to(footerLid, {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: footerMatchbox,
      start: "top 75%",
      end: "bottom 20%",
      scrub: 1,

      onUpdate(self) {
        if (self.progress >= 0.35) {
          playLogo();
        }
      },
    },
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
