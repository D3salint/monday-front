document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  let activeDropdown = null;

  const isMobile = () => window.innerWidth < 760;

  const hideAll = () => {
    document.querySelectorAll('[id^="dropdown-"]').forEach((dd) => {
      dd.classList.add("invisible", "pointer-events-none");
      dd.classList.remove("visible", "opacity-100", "pointer-events-auto");
    });
    activeDropdown = null;
  };

  hideAll();

  menuItems.forEach((item) => {
    const dropdownId = item.dataset.dropdownId;
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    const show = () => {
      const rect = item.getBoundingClientRect();
      const navRect = item.closest("nav").getBoundingClientRect();

      if (isMobile()) {
        dropdown.style.left = "50%";
        dropdown.style.transform = "translateX(-50%)";
        dropdown.style.top = "2px";
      } else {
        dropdown.style.top = navRect.top - 78 + "px";
        dropdown.style.left = rect.left - navRect.left + "px";
        dropdown.style.transform = "none";
      }

      hideAll();
      dropdown.classList.remove("invisible", "pointer-events-none");
      dropdown.classList.add("visible", "opacity-100", "pointer-events-auto");
      activeDropdown = dropdown;
    };

    item.addEventListener("mouseenter", () => {
      if (!isMobile()) show();
    });

    item.addEventListener("mouseleave", () => {
      if (!isMobile()) {
        if (!dropdown.matches(":hover")) hideAll();
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (!isMobile()) hideAll();
    });

    item.addEventListener("click", (e) => {
      if (!isMobile()) return;

      e.preventDefault();
      e.stopPropagation();

      if (activeDropdown === dropdown) {
        hideAll();
      } else {
        show();
      }
    });
  });

  document.addEventListener("click", () => {
    if (isMobile()) hideAll();
  });
});
