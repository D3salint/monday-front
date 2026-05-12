document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const savesTitle = document.querySelector(".saves-title");

  if (savesTitle && !savesTitle.dataset.splitted) {
    savesTitle.innerHTML = savesTitle.innerHTML
      .trim()
      .split(" ")
      .map((word) => `<span class="saves-word">${word}</span>`)
      .join(" ");

    savesTitle.dataset.splitted = "true";
  }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#saves-money",
        start: "top 75%",
        once: true,
      },
    })
    .to(".saves-word", {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.055,
      ease: "power3.out",
    })
    .to(
      ".saves-head",
      {
        opacity: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.2"
    )
    .to(
      ".saves-cell",
      {
        opacity: 1,
        duration: 0.55,
        stagger: 0.035,
        ease: "power3.out",
      },
      "-=0.25"
    )
    .to(
      ".saves-stats",
      {
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.15"
    )
    .to(
      ".saves-button",
      {
        opacity: 1,

        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.25"
    );
});
