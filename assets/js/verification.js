let verification__modal = document.querySelector("#verification__modal");
let verification__modal__backdrop = document.querySelector("#verification__modal__backdrop");
let verification__modal__close = document.querySelector("#verification__modal__close");
let pass__btn = document.querySelectorAll("#pass__btn");

pass__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    verification__modal.classList.add("scale-1");
    verification__modal.classList.remove("scale-0");
    verification__modal__backdrop.classList.add("block");
    verification__modal__backdrop.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });
});
verification__modal__backdrop.addEventListener("click", function () {
  verification__modal.classList.remove("scale-1");
  verification__modal.classList.add("scale-0");
  verification__modal__backdrop.classList.remove("block");
  verification__modal__backdrop.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});
verification__modal__close.addEventListener("click", function () {
    verification__modal.classList.remove("scale-1");
    verification__modal.classList.add("scale-0");
    verification__modal__backdrop.classList.remove("block");
    verification__modal__backdrop.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
});

document.getElementById('file').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      // Fayl nomini ko'rsatish
      document.getElementById('fileName').textContent = `File name: ${file.name}`;
      
      // Fayl o'lchamini ko'rsatish
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      document.getElementById('fileSize').textContent = `File size: ${fileSizeInMB} MB`;
      
      // Fayl formatini ko'rsatish
      document.getElementById('fileFormat').textContent = `${file.type}`;
  }
});

document.getElementById('verification__modal__close').addEventListener('click', function() {
  document.getElementById('verification__modal').classList.add('scale-0');
});