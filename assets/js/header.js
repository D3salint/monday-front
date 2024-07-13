const headerItems = document.querySelectorAll("#header_item");
const headerProfileChangeBoxOpen = document.querySelector("#header__profile__cahge_box__open");
const headerProfileChangeBox = document.querySelector("#header__profile__cahge_box");
const headerProfileChangeBoxBackdrop = document.querySelector("#header__profile__cahge_box__backgdrop");
const profileChangeClient = document.querySelector(".profilchange__client");
const profileChangeSeller = document.querySelector(".profilchange__seller");
const clientBtns = document.querySelectorAll(".client__btn");
const sellerBtns = document.querySelectorAll(".seller__btn");
const headerShopBtn = document.querySelectorAll("#header__shop__btn");
const headerShopModal = document.querySelector("#header__shop__modal");
const headerShopModalBackdrop = document.querySelector("#header__shop__modal__backgdrop");
const shopCardBox = document.querySelector(".shop__card__box");
const shopCardsbtn = document.querySelectorAll(".shop__card__delete");
const shopCards = document.querySelectorAll(".shop__card");
const headerShopModalNull = document.querySelector(".header__shop__modal__null");
const minusBtnShopCards = document.querySelectorAll(".minus__btn__shop__card");
const shopCardCounts = document.querySelectorAll(".shop__card__count");
const shopCardPluses = document.querySelectorAll(".shop__card__plus");
const shopCardPrices = document.querySelectorAll(".shop__card__price");

function addDots(number) {
  let numStr = number.toString();
  let result = "";
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = "." + result;
    }
  }
  return result;
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

headerItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    headerItems.forEach((item) => {
      removeClass(item, "header_active");
    });
    addClass(item, "header_active");
  });
});

shopCardsbtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    shopCards[index].remove();
    if (shopCardBox.children.length == 0) {
      addClass(headerShopModal, "hidden");
      addClass(headerShopModalNull, "flex");
      removeClass(headerShopModalNull, "hidden");
    }
  });
});

headerShopBtn.forEach(function (item, index) {
  item.addEventListener("click", () => {
    if (shopCardBox.children.length == 0) {
      toggleClass(headerShopModalNull, "flex");
      toggleClass(headerShopModalNull, "hidden");
    } else {
      toggleClass(headerShopModal, "hidden");
      toggleClass(headerShopModal, "block");
    }
    toggleClass(headerShopModalBackdrop, "block");
    toggleClass(headerShopModalBackdrop, "hidden");

  });
  item.addEventListener("click", function () {
    headerProfileChangeBox.classList.add("hidden")
    headerProfileChangeBox.classList.remove("block")
  })
})



headerShopModalBackdrop.addEventListener("click", () => {
  addClass(headerShopModal, "hidden");
  addClass(headerShopModalBackdrop, "hidden");
  removeClass(headerShopModal, "block");
  removeClass(headerShopModalBackdrop, "block");
  addClass(profileChangeSeller, "hidden");
  removeClass(headerShopModalNull, "flex");
  addClass(headerShopModalNull, "hidden");
});

clientBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    addClass(profileChangeSeller, "hidden");
    addClass(profileChangeClient, "block");
    removeClass(profileChangeClient, "hidden");
  });
});

sellerBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    addClass(profileChangeClient, "hidden");
    addClass(profileChangeSeller, "block");
    removeClass(profileChangeSeller, "hidden");
  });
});

headerProfileChangeBoxOpen.addEventListener("click", () => {
  toggleClass(headerProfileChangeBox, "block");
  toggleClass(headerProfileChangeBoxBackdrop, "block");
  toggleClass(headerProfileChangeBox, "hidden");
  toggleClass(headerProfileChangeBoxBackdrop, "hidden");
  shopCardBox.classList.add("hidden")
  shopCardBox.classList.remove("block")
});

headerProfileChangeBoxBackdrop.addEventListener("click", () => {
  addClass(headerProfileChangeBox, "hidden");
  addClass(headerProfileChangeBoxBackdrop, "hidden");
});

minusBtnShopCards.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (shopCardCounts[index].textContent * 1 > 0) {
      shopCardCounts[index].textContent = shopCardCounts[index].textContent * 1 - 1;
      let newPrice = parseInt(shopCardPrices[index].textContent.replace(/\./g, "")) - 110000;
      shopCardPrices[index].textContent = addDots(newPrice);
    }
  });

  shopCardPluses[index].addEventListener("click", () => {
    shopCardCounts[index].textContent = shopCardCounts[index].textContent * 1 + 1;
    let newPrice = parseInt(shopCardPrices[index].textContent.replace(/\./g, "")) + 110000;
    shopCardPrices[index].textContent = addDots(newPrice);
  });
});


let header_items = document.querySelectorAll('#header_item')

header_items.forEach(function (item, index) {
  item.addEventListener('click', function () {
    header_items.forEach(function (item) {
      item.classList.remove('header_active')
    })

    item.classList.add('header_active')
  })
})

function header() {
  const buttons = [
    document.getElementById('notifications_preview_button_id_1'),
    document.getElementById('notifications_preview_button_id_2'),
    document.getElementById('notifications_preview_button_id_3')
  ];

  const sections = [
    document.getElementById('notifications_preview_section_id_1'),
    document.getElementById('notifications_preview_section_id_2'),
    document.getElementById('notifications_preview_section_id_3')
  ];

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn, idx) => {
        if (index === idx) {
          btn.classList.add('active_notifications_preview');
          btn.children[index === 2 ? 0 : 1].classList.remove('hidden');
        } else {
          btn.classList.remove('active_notifications_preview');
          btn.children[idx === 2 ? 0 : 1].classList.add('hidden');
        }
      });

      sections.forEach((section, idx) => {
        if (index === idx) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });



  const notificationButton = document.querySelector('#notification_button');
  const notificationModal = document.querySelector('.notification_modal');
  const hide_modal = document.querySelector('#hide_modal');

  notificationButton.addEventListener('click', () => {
    notificationModal.classList.toggle('hidden');

    if (!notificationModal.classList.contains('hidden')) {
      hide_modal.style.visibility = 'visible';
    }
  });



  const messages_button = document.querySelector('#messages_button');
  const messages_modal = document.querySelector('.messages_modal');

  messages_button.addEventListener('click', () => {
    messages_modal.classList.toggle('hidden');

    if (!messages_modal.classList.contains('hidden')) {
      hide_modal.style.visibility = 'visible';
    }
  });



  hide_modal.addEventListener('click', () => {
    hide_modal.style.visibility = 'hidden';
    notificationModal.classList.add('hidden');
    messages_modal.classList.add('hidden');
  })

  document.querySelector('#search_messages').addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    const searchMessagesSections = document.querySelectorAll('.search_messages_section');
    const notificationModal = document.querySelector('.messages_modal');


    searchMessagesSections.forEach(eItem => {
      const messageText = eItem.querySelector('.message-text').textContent.trim().toLowerCase();
      const isMatch = messageText.includes(searchTerm);



      eItem.classList.toggle('match', isMatch);
      eItem.style.display = isMatch ? 'block' : 'none';
    });
  });



  document.querySelector('#search_services').addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    const searchMessagesSections = document.querySelectorAll('.search_services_section')


    searchMessagesSections.forEach(eItem => {
      const messageText = eItem.textContent.toLowerCase();
      const isMatch = messageText.includes(searchTerm);



      eItem.classList.toggle('match', isMatch);
      eItem.style.display = isMatch ? 'inline-block' : 'none';
    });
  });


}

header();



document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search_services');
  const searchMenu = document.getElementById('search__menu');

  function showSearchMenu() {
      searchMenu.classList.remove('hidden');
  }

  function hideSearchMenu() {
      searchMenu.classList.add('hidden');
  }

  searchInput.addEventListener('focus', showSearchMenu);

  document.addEventListener('click', (event) => {
      if (!searchInput.contains(event.target) && !searchMenu.contains(event.target)) {
          hideSearchMenu();
      }
  });

  window.addEventListener('resize', hideSearchMenu);

  const searchRecentItems = document.querySelectorAll('.search_recent');
  searchRecentItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          if (!item.querySelector('.close-button')) {
              const closeButton = document.createElement('span');
              closeButton.innerHTML = '&times;';
              closeButton.classList.add('absolute', 'right-0', 'text-[#9CA5B3]', 'hover:text-[#202020]', 'font-bold', 'transition-all', 'duration-200', 'ease-in-out', 'text-xl', 'close-button');
              closeButton.addEventListener('click', (event) => {
                  event.stopPropagation();
                  item.remove();
              });
              item.appendChild(closeButton);
          }
      });

      item.addEventListener('mouseleave', () => {
          const closeButton = item.querySelector('.close-button');
          if (closeButton) {
              closeButton.remove();
          }
      });
  });
});

