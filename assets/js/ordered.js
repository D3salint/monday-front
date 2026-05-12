document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger || !window.MotionPathPlugin) return;

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const orderedSection = document.querySelector("#ordered");
  const orderedTitle = document.querySelector("#ordered h2");
  const orderedCards = gsap.utils.toArray(".ordered-orbit-card");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!orderedSection || !orderedTitle || !orderedCards.length) return;

  if (!orderedTitle.dataset.splitted) {
    orderedTitle.innerHTML = orderedTitle.textContent
      .trim()
      .split(" ")
      .map((word) => `<span class="ordered-word">${word}</span>`)
      .join(" ");

    orderedTitle.dataset.splitted = "true";
  }

  if (!isMobile) {
    orderedCards.forEach((card, index) => {
      gsap.set(card, {
        motionPath: {
          path: "#orderedPath",
          align: "#orderedPath",
          alignOrigin: [0.5, 0.5],
          start: index / orderedCards.length,
          end: index / orderedCards.length,
        },
        opacity: 0,
      });
    });
  } else {
    gsap.set(orderedCards, {
      opacity: 0,
      clearProps: "motionPath",
    });
  }

  const orderedTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#ordered",
      start: "top 70%",
      once: true,
    },
  });

  orderedTl
    .to(".ordered-word", {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: "power3.out",
    })
    .to(
      ".ordered-button",
      {
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
      },
      "-=0.25"
    )
    .to(
      orderedCards,
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.2"
    );

  if (!isMobile) {
    const orbitTweens = [];

    orderedCards.forEach((card, index) => {
      const tween = gsap.to(card, {
        motionPath: {
          path: "#orderedPath",
          align: "#orderedPath",
          alignOrigin: [0.5, 0.5],
          start: index / orderedCards.length,
          end: index / orderedCards.length + 1,
        },
        duration: 150,
        ease: "none",
        repeat: -1,
      });

      orbitTweens.push(tween);

      card.addEventListener("mouseenter", () => {
        orbitTweens.forEach((t) => t.pause());

        gsap.to(card, {
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        orbitTweens.forEach((t) => t.resume());

        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }
});
