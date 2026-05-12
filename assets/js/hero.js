document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;

  const subtitle = document.querySelector(".hero-subtitle");

  if (subtitle && !subtitle.dataset.splitted) {
    subtitle.innerHTML = subtitle.textContent
      .trim()
      .split(" ")
      .map((word) => `<span class="hero-subtitle-word">${word}</span>`)
      .join(" ");

    subtitle.dataset.splitted = "true";
  }

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  tl.to(
    ".hero-word",
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.08,
    },
    0
  )
    .to(
      ".hero-label",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      0
    )
    .to(
      ".hero-subtitle-word",
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.045,
      },
      0
    )

    .to(
      ".hero-subtitle",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.45"
    )

    .to(
      ".hero-search",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.45"
    )

    .to(
      ".hero-search-sub",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.45"
    );
});
