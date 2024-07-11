

let sectionSipmle = document.querySelectorAll('#sectionSipmle')
let sectionEdit = document.querySelectorAll('#sectionEdit')
let BtnEtdit = document.querySelectorAll('#BtnEtdit')
let responsiveEditSection = document.querySelectorAll("#responsiveEditSection");
let responsiveSection = document.querySelectorAll("#responsiveSection");
let responsiveBtnEdit = document.querySelectorAll("#responsiveBtnEdit");


BtnEtdit.forEach(function (item, index) {
  item.addEventListener('click', function () {
    sectionSipmle[index].classList.toggle("hidden")
    sectionEdit[index].classList.toggle("hidden")
  })
})
responsiveBtnEdit.forEach(function (item, index) {
  item.addEventListener('click', function () {
    responsiveEditSection[index].classList.toggle("hidden")
    responsiveSection[index].classList.toggle("hidden")
  })
})

let toggle__btn = document.querySelectorAll('#toggle__btn')
let toggle_info = document.querySelectorAll('#toggle_info')
toggle__btn.forEach(function (item, index) {
  item.addEventListener('click', function () {
    toggle_info[index].classList.toggle('max-h-[1600px]')
    toggle_info[index].classList.toggle('max-h-0')
    item.classList.toggle('bg-[#F1F3F9]')
    item.classList.toggle('bg-white')
  })
})




let sellectRadio = document.querySelectorAll("#sellectRadio");
let serviceCard = document.querySelectorAll("#serviceCard");
let serviceCardBig = document.querySelectorAll("#serviceCardBig");



serviceCard.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (item.classList.contains("border-[#AEB5BF]")) {
      // Agar element allaqachon faollashtirilgan bo'lsa, uni deaktivatsiya qilish
      item.classList.remove("md:opacity-65");
      item.classList.remove("border-[#AEB5BF]");
      item.classList.remove("bg-[#F1F3F9]");
      item.classList.add("bg-white");
      item.classList.add("border-white");
      item.classList.remove("cardShadowActive");
      serviceCardBig[index].classList.add("hidden");
      item.classList.remove("active");
    } else {
      // Barcha elementlarni deaktivatsiya qilish
      serviceCard.forEach(function (item, index) {
        item.classList.add("md:opacity-65");
        item.classList.remove("border-[#AEB5BF]");
        item.classList.remove("bg-[#F1F3F9]");
        item.classList.add("bg-white");
        item.classList.add("border-white");
        item.classList.remove("cardShadowActive");
        serviceCardBig[index].classList.add("hidden");
        item.classList.remove("active");
      });

      // Bosilgan elementni faollashtirish
      item.classList.remove("md:opacity-65");
      item.classList.add("border-[#AEB5BF]");
      item.classList.add("bg-[#F1F3F9]");
      item.classList.remove("bg-white");
      item.classList.remove("border-white");
      item.classList.add("cardShadowActive");
      serviceCardBig[index].classList.remove("hidden");
      item.classList.add("active");
    }
  });
});

sellectRadio.forEach(function (item, index) {
  item.addEventListener("click", function () {
    sellectRadio.forEach(function (item) {
      item.classList.remove("text-[#4790FF]");
      item.classList.remove("bg-[#EDF4FF]");
      item.classList.remove("border-[#F2F2F2]");
      item.classList.add("border-[#FAFAFC]");
      item.classList.add("bg-[#FAFAFC]");
    });
    item.classList.add("text-[#4790FF]");
    item.classList.add("bg-[#EDF4FF]");
    item.classList.add("border-[#F2F2F2]");
    item.classList.remove("border-[#FAFAFC]");
    item.classList.remove("bg-[#FAFAFC]");
  });
});