document.addEventListener("DOMContentLoaded", () => {
  const notificationModal = document.querySelector(".notification_modal");
  const messagesModal = document.querySelector(".messages_modal");
  const headerProfileChangeBox = document.querySelector(
    "#header__profile__change_box"
  );
  const headerShopModal = document.querySelector("#header__shop__modal");
  const headerShopModalNull = document.querySelector(
    ".header__shop__modal__null"
  );
  const headerShopBtn = document.querySelectorAll("#header__shop__btn");
  const shopCardBox = document.querySelector(".shop__card__box");

  const notificationButton = document.querySelector("#notification_button");
  const messagesButton = document.querySelector("#messages_button");
  const headerProfileChangeBoxOpen = document.querySelector(
    "#header__profile__change_box__open"
  );
  const shopCardsbtn = document.querySelectorAll(".shop__card__delete");
  const shopCards = document.querySelectorAll(".shop__card");
  const shopCardCounts = document.querySelectorAll(".shop__card__count");
  const shopCardPrices = document.querySelectorAll(".shop__card__price");

  const searchInput = document.getElementById("search_services");
  const searchMenu = document.getElementById("search__menu");

  let activeModal = null;

  function closeAllModals() {
    notificationModal.classList.add("hidden");
    messagesModal.classList.add("hidden");
    headerProfileChangeBox.classList.add("hidden");
    headerShopModal.classList.add("hidden");
    headerShopModalNull.classList.add("hidden");
    searchMenu.classList.add("hidden");
    activeModal = null;
  }

  function openModal(modal) {
    if (activeModal === modal) {
      closeAllModals();
    } else {
      closeAllModals();
      modal.classList.remove("hidden");
      activeModal = modal;
    }
  }

  notificationButton.addEventListener("click", () => {
    openModal(notificationModal);
  });

  messagesButton.addEventListener("click", () => {
    openModal(messagesModal);
  });

  headerProfileChangeBoxOpen.addEventListener("click", () => {
    openModal(headerProfileChangeBox);
  });

  headerShopBtn.forEach((button) => {
    button.addEventListener("click", () => {
      if (shopCardBox.children.length === 0) {
        openModal(headerShopModalNull);
      } else {
        openModal(headerShopModal);
      }
    });
  });

  shopCardsbtn.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      shopCards[index].remove();

      if (shopCardBox.children.length === 0) {
        openModal(headerShopModalNull);
      }
    });
  });

  const notificationButtons = [
    document.getElementById("notifications_preview_button_id_1"),
    document.getElementById("notifications_preview_button_id_2"),
    document.getElementById("notifications_preview_button_id_3"),
  ];

  const notificationSections = [
    document.getElementById("notifications_preview_section_id_1"),
    document.getElementById("notifications_preview_section_id_2"),
    document.getElementById("notifications_preview_section_id_3"),
  ];

  notificationButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      notificationButtons.forEach((btn, idx) => {
        btn.classList.remove("active_notifications_preview");
        btn.children[idx === 2 ? 0 : 1].classList.add("hidden");
        notificationSections[idx].classList.add("hidden");
      });

      button.classList.add("active_notifications_preview");
      button.children[index === 2 ? 0 : 1].classList.remove("hidden");
      notificationSections[index].classList.remove("hidden");
    });
  });

  const profileChangeClient = document.querySelector(".profilchange__client");
  const profileChangeSeller = document.querySelector(".profilchange__seller");
  const clientBtns = document.querySelectorAll(".client__btn");
  const sellerBtns = document.querySelectorAll(".seller__btn");

  clientBtns.forEach((item) => {
    item.addEventListener("click", () => {
      profileChangeSeller.classList.add("hidden");
      profileChangeClient.classList.remove("hidden");
    });
  });

  sellerBtns.forEach((item) => {
    item.addEventListener("click", () => {
      profileChangeClient.classList.add("hidden");
      profileChangeSeller.classList.remove("hidden");
    });
  });

  window.addEventListener("resize", () => {
    closeAllModals();
  });

  window.addEventListener("click", (event) => {
    if (
      activeModal &&
      !activeModal.contains(event.target) &&
      !event.target.closest("#notification_button") &&
      !event.target.closest("#messages_button") &&
      !event.target.closest("#header__profile__change_box__open") &&
      !Array.from(headerShopBtn).some((button) => button.contains(event.target))
    ) {
      closeAllModals();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search_services");
  const searchMenu = document.getElementById("search__menu");

  function showSearchMenu() {
    searchMenu.classList.remove("hidden");
  }

  function hideSearchMenu() {
    searchMenu.classList.add("hidden");
  }

  searchInput.addEventListener("focus", showSearchMenu);

  document.addEventListener("click", (event) => {
    if (
      !searchInput.contains(event.target) &&
      !searchMenu.contains(event.target)
    ) {
      hideSearchMenu();
    }
  });

  window.addEventListener("resize", hideSearchMenu);

  const searchRecentItems = document.querySelectorAll(".search_recent");
  searchRecentItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (!item.querySelector(".close-button")) {
        const closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add(
          "absolute",
          "right-0",
          "text-[#9CA5B3]",
          "hover:text-[#202020]",
          "font-bold",
          "transition-all",
          "duration-200",
          "ease-in-out",
          "text-xl",
          "close-button"
        );
        closeButton.addEventListener("click", (event) => {
          event.stopPropagation();
          item.remove();
        });
        item.appendChild(closeButton);
      }
    });

    item.addEventListener("mouseleave", () => {
      const closeButton = item.querySelector(".close-button");
      if (closeButton) {
        closeButton.remove();
      }
    });
  });
});
