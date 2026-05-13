document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const currentLang = document.documentElement.lang === "ru" ? "ru" : "en";

  const data = {
    en: {
      clients: [
        {
          step: "1",
          title: "Select a service",
          text: "The Monday store presents large selection of services from professionals.",
          image: "img/temp/quick-start-step-1.png",
        },
        {
          step: "2",
          title: "Pay",
          text: "The money will be transferred to the seller after he has completed the work, and you will approve of it.",
          image: "img/temp/quick-start-step-2.png",
        },
        {
          step: "3",
          title: "Get the result",
          text: "100% money back guarantee in case of failure to fulfil the order.",
          image: "img/temp/quick-start-step-3.png",
        },
      ],

      sellers: [
        {
          step: "1",
          title: "Create Service",
          text: "Register. Complete your profile. Place your services in our catalog. 5 minutes - and you're done!",
          image: "img/temp/quick-start-step-1.png",
        },
        {
          step: "2",
          title: "Receive your order",
          text: "Buyers will see your service in the catalog and place an order. You will receive a notification about this.",
          image: "img/temp/quick-start-step-2-sellers.png",
        },
        {
          step: "3",
          title: "Submit your work and get paid",
          text: "Complete and submit work on time. Receive payment guaranteed and on time every time your order is successfully completed.",
          image: "img/temp/quick-start-step-3.png",
        },
      ],
    },

    ru: {
      clients: [
        {
          step: "1",
          title: "Выберите услугу",
          text: "В магазине Monday представлен большой выбор услуг от профессионалов.",
          image: "img/temp/quick-start-step-1.png",
        },
        {
          step: "2",
          title: "Оплатите",
          text: "Деньги будут переведены исполнителю после того, как он выполнит работу, а вы её одобрите.",
          image: "img/temp/quick-start-step-2.png",
        },
        {
          step: "3",
          title: "Получите результат",
          text: "100% гарантия возврата денег, если заказ не будет выполнен.",
          image: "img/temp/quick-start-step-3.png",
        },
      ],

      sellers: [
        {
          step: "1",
          title: "Создайте услугу",
          text: "Зарегистрируйтесь, заполните профиль и разместите свои услуги в нашем каталоге. 5 минут — и готово!",
          image: "img/temp/quick-start-step-1.png",
        },
        {
          step: "2",
          title: "Получите заказ",
          text: "Покупатели увидят вашу услугу в каталоге и оформят заказ. Вы получите уведомление об этом.",
          image: "img/temp/quick-start-step-2-sellers.png",
        },
        {
          step: "3",
          title: "Сдайте работу и получите оплату",
          text: "Выполните и сдайте работу вовремя. Получайте гарантированную оплату после успешного завершения заказа.",
          image: "img/temp/quick-start-step-3.png",
        },
      ],
    },
  };

  const tabs = document.querySelectorAll(".quick-start-tab");
  const list = document.getElementById("quick-start-list");
  const defaultTab = document.querySelector('[data-tab="clients"]');

  if (!tabs.length || !list || !defaultTab) return;

  const setActiveTab = (activeTab) => {
    tabs.forEach((tab) => {
      const isActive = tab === activeTab;

      tab.classList.toggle("bg-[#EDF4FF]", isActive);
      tab.classList.toggle("text-[#4790FF]", isActive);
      tab.classList.toggle("text-[#B7C3D6]", !isActive);
    });
  };

  function renderCards(type, animated = true) {
    const updateCards = () => {
      list.innerHTML = data[currentLang][type]
        .map(
          (item) => `
            <li class="quick-start-card relative">
              ${getStepNumberSvg(item.step)}

              <div class="relative z-[1] py-4 px-5 rounded-2xl bg-white md:flex md:items-center md:gap-16">
                <div class="flex flex-col items-start gap-4 md:gap-6">
                  <p class="w-9 h-6 rounded-lg bg-[#FAFAFC] text-center font-Satoshi font-bold text-[12px] text-black flex items-center justify-center">
                    ${item.step}
                  </p>

                  <p class="mt-1 font-Satoshi font-bold text-sm md:text-2xl">
                    ${item.title}
                  </p>

                  <p class="font-Satoshi font-medium text-xs text-black/60 max-w-80 md:text-base">
                    ${item.text}
                  </p>
                </div>

                <div class="w-full h-60 md:-order-1 md:w-72">
                  <img src="${item.image}" alt="">
                </div>
              </div>
            </li>
          `
        )
        .join("");

      const cards = list.querySelectorAll(".quick-start-card");

      if (!animated) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          x: 90,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.13,
          ease: "power3.out",
        }
      );
    };

    const currentCards = list.querySelectorAll(".quick-start-card");

    if (animated && currentCards.length) {
      gsap.to(currentCards, {
        opacity: 0,
        x: -40,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: updateCards,
      });
    } else {
      updateCards();
    }
  }

  function getStepNumberSvg(step) {
    const paths = {
      1: `<path d="M22.0801 15.87H0.000105724V-1.01328e-05H38.9161V100.878H22.0801V15.87Z" fill="#9CA5B3"/>`,
      2: `<path d="M71.208 102.534L1.24204 102.672V89.424L34.224 61.548C37.628 58.696 40.48 56.074 42.78 53.682C45.172 51.29 47.058 49.036 48.438 46.92C49.818 44.804 50.83 42.688 51.474 40.572C52.118 38.456 52.44 36.156 52.44 33.672C52.44 27.968 50.968 23.552 48.024 20.424C45.08 17.296 40.94 15.732 35.604 15.732C30.084 15.732 25.714 17.572 22.494 21.252C19.274 24.932 17.618 29.992 17.526 36.432H4.30346e-05C0.0920432 29.072 1.61004 22.678 4.55404 17.25C7.49804 11.73 11.638 7.49799 16.974 4.55399C22.31 1.51799 28.52 -5.36442e-06 35.604 -5.36442e-06C42.78 -5.36442e-06 48.944 1.33399 54.096 4.00199C59.34 6.57799 63.388 10.304 66.24 15.18C69.092 20.056 70.518 25.898 70.518 32.706C70.518 36.202 70.012 39.56 69 42.78C68.08 45.908 66.654 48.99 64.722 52.026C62.79 54.97 60.398 57.96 57.546 60.996C54.694 64.032 51.336 67.206 47.472 70.518L22.908 91.494L16.56 86.112H71.208V102.534Z" fill="#9CA5B3"/>`,
      3: `<path d="M68.7242 14.0761L32.2922 47.6101L20.7002 39.468L56.0282 7.03805L52.9922 15.594H4.69223V5.09024e-05H68.7242V14.0761ZM32.9822 50.922H20.7002V39.468C22.4482 38.088 24.7482 37.168 27.6002 36.708C30.4522 36.156 33.1202 35.88 35.6042 35.88C40.3882 35.88 44.9422 36.616 49.2662 38.088C53.5902 39.5601 57.4082 41.722 60.7202 44.574C64.1242 47.334 66.7922 50.784 68.7242 54.9241C70.6562 58.9721 71.6222 63.6181 71.6222 68.8621C71.6222 75.7621 70.0122 81.7421 66.7922 86.8021C63.5722 91.8621 59.1562 95.7721 53.5442 98.5321C48.0242 101.292 41.8602 102.672 35.0522 102.672C28.4282 102.672 22.4482 101.384 17.1122 98.8081C11.8682 96.1401 7.68223 92.2761 4.55423 87.2161C1.51823 82.1561 0.00023457 75.992 0.00023457 68.7241H17.3882C17.3882 74.5201 18.9982 79.0281 22.2182 82.2481C25.5302 85.3761 29.9002 86.9401 35.3282 86.9401C40.8482 86.9401 45.2642 85.2841 48.5762 81.9721C51.9802 78.5681 53.6822 74.1061 53.6822 68.5861C53.6822 63.5261 51.9802 59.3401 48.5762 56.028C45.1722 52.624 39.9742 50.922 32.9822 50.922Z" fill="#9CA5B3"/>`,
    };

    return `
      <svg
        class="pointer-events-none absolute left-[-42px] top-1/2 z-0 hidden h-[101px] w-auto -translate-y-1/2 md:block"
        viewBox="0 0 80 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g opacity="0.1" filter="url(#quick-start-step-${step})">
          ${paths[step]}
        </g>

        <defs>
          <filter
            id="quick-start-step-${step}"
            x="0"
            y="0"
            width="120"
            height="120"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="5" dy="2"/>
            <feGaussianBlur stdDeviation="3.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
          </filter>
        </defs>
      </svg>
    `;
  }

  setActiveTab(defaultTab);
  renderCards("clients", false);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#quick-start",
        start: "top 75%",
        once: true,
      },
    })
    .to(".quick-start-label", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .to(
      ".quick-start-title",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.35"
    )
    .to(
      ".quick-start-tabs",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.35"
    )
    .to(
      ".quick-start-card",
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: "power3.out",
      },
      "-=0.2"
    );

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab);
      renderCards(tab.dataset.tab, true);
    });
  });
});
