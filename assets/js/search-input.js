document.addEventListener("DOMContentLoaded", () => {
  const mainSearchInput = document.getElementById("mainSearchInput");
  const mainSearchMenu = document.getElementById("mainSearchMenu");
  const heroSearchSub = document.querySelector(".hero-search-sub");

 function showMainSearchMenu() {
  mainSearchMenu.classList.remove("hidden");

  if (heroSearchSub) {
    heroSearchSub.style.opacity = "0";
    heroSearchSub.style.pointerEvents = "none";
  }
}

function hideMainSearchMenu() {
  mainSearchMenu.classList.add("hidden");

  if (heroSearchSub) {
    heroSearchSub.style.opacity = "1";
    heroSearchSub.style.pointerEvents = "";
  }
}

  function setSearchValue(value) {
    mainSearchInput.value = value.trim();
    mainSearchInput.focus();
    hideMainSearchMenu();
  }

  mainSearchInput.addEventListener("focus", showMainSearchMenu);

  document.querySelectorAll(".main_search_service, .top-service-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setSearchValue(link.textContent);
    });
  });

  document.addEventListener("click", (e) => {
    const isClickInsideSearch = mainSearchInput.contains(e.target) || mainSearchMenu.contains(e.target) || e.target.closest(".top-service-link");

    if (!isClickInsideSearch) {
      hideMainSearchMenu();
    }
  });

  document.querySelectorAll(".recent-item-button").forEach((btn) => {
    const deleteIcon = btn.querySelector(".delete-icon");

    deleteIcon.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      btn.remove();
    });

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const text = btn.childNodes[2]?.textContent?.trim() || btn.textContent.trim();
      setSearchValue(text);
    });
  });
});
