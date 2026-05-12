document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const journeyTitle = document.querySelector(".journey-title");
  const journeyCounter = document.querySelector(".journey-counter");

  if (journeyTitle && !journeyTitle.dataset.splitted) {
    journeyTitle.innerHTML = journeyTitle.textContent
      .trim()
      .split(" ")
      .map((word) => `<span class="journey-word">${word}</span>`)
      .join(" ");

    journeyTitle.dataset.splitted = "true";
  }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#journey",
        start: "top 75%",
        once: true,
      },
    })
    .to(".journey-card", {
      opacity: 1,
      scale: 1,
      duration: 0.75,
      stagger: 0.35,
      ease: "power3.out",
    })
    .to(
      journeyCounter,
      {
        innerText: 100000,
        duration: 1.8,
        ease: "power3.out",
        snap: {
          innerText: 1,
        },
        onUpdate() {
          journeyCounter.textContent = Number(journeyCounter.innerText).toLocaleString("de-DE");
        },
      },
      "-=0.94"
    )
    .to(
      ".journey-word",
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".journey-button",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.2"
    );

  const cards = gsap.utils.toArray(".journey-message");

  if (!cards.length) return;

  const positions = [
    {
      y: 0,
      scale: 1,
      zIndex: 3,
      opacity: 1,
    },
    {
      y: -18,
      scale: 0.8,
      zIndex: 2,
      opacity: 0.9,
    },
    {
      y: -38,
      scale: 0.5,
      zIndex: 1,
      opacity: 0.7,
    },
  ];

  function applyPositions(animated = true) {
    cards.forEach((card, index) => {
      const state = positions[index];

      if (animated) {
        gsap.to(card, {
          ...state,
          duration: 0.7,
          ease: "power3.inOut",
        });
      } else {
        gsap.set(card, state);
      }
    });
  }

  applyPositions(false);

  setInterval(() => {
    const first = cards.shift();

    cards.push(first);

    applyPositions(true);
  }, 2500);
});
