document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const footerLogo = document.querySelector(".footer-logo");
  const footerNav = document.querySelector(".footer-nav");
  const footerActions = document.querySelector(".footer-actions");

  if (footerLogo && !footerLogo.dataset.splitted) {
    footerLogo.innerHTML = footerLogo.textContent
      .trim()
      .split("")
      .map((letter) =>
        letter === " "
          ? `<span class="inline-block w-[0.3em]"></span>`
          : `<span class="footer-logo-letter">${letter}</span>`
      )
      .join("");

    footerLogo.dataset.splitted = "true";
  }

  const isVisible = (el) => {
    if (!el) return false;

    const rect = el.getBoundingClientRect();

    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  const showLogo = (animate = true) => {
    gsap.to(".footer-logo-letter", {
      opacity: 1,
      y: 0,
      rotate: 0,
      duration: animate ? 0.9 : 0,
      stagger: animate ? 0.08 : 0,
      ease: "bounce.out",
      overwrite: true,
    });
  };

  const showColumns = (animate = true) => {
    gsap.to(".footer-column", {
      opacity: 1,
      y: 0,
      duration: animate ? 0.7 : 0,
      stagger: animate ? 0.12 : 0,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const showActions = (animate = true) => {
    gsap.to(".footer-actions", {
      opacity: 1,
      y: 0,
      duration: animate ? 0.7 : 0,
      ease: "power3.out",
      overwrite: true,
    });
  };

  if (isVisible(footerLogo)) {
    showLogo(false);
  } else {
    gsap.set(".footer-logo-letter", {
      opacity: 0,
      y: 40,
      rotate: 8,
    });

    ScrollTrigger.create({
      trigger: footerLogo,
      start: "top 85%",
      once: true,
      onEnter: () => showLogo(true),
    });
  }

  if (isVisible(footerNav)) {
    showColumns(false);
  } else {
    gsap.set(".footer-column", {
      opacity: 0,
      y: 30,
    });

    ScrollTrigger.create({
      trigger: footerNav,
      start: "top 85%",
      once: true,
      onEnter: () => showColumns(true),
    });
  }

  if (isVisible(footerActions)) {
    showActions(false);
  } else {
    gsap.set(".footer-actions", {
      opacity: 0,
      y: 30,
    });

    ScrollTrigger.create({
      trigger: footerActions,
      start: "top 92%",
      once: true,
      onEnter: () => showActions(true),
    });
  }

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();

    if (isVisible(footerLogo)) showLogo(false);
    if (isVisible(footerNav)) showColumns(false);
    if (isVisible(footerActions)) showActions(false);
  });
});