const accordionButton1 = document.getElementById('accordionButton1');
const accordionContent1 = document.getElementById('accordionContent1');
const accordionIcon1 = document.getElementById('accordionIcon1');

accordionButton1.addEventListener('click', () => {
    accordionContent1.classList.toggle('open');
    accordionIcon1.classList.toggle('rotate-180');
});

const accordionButton2 = document.getElementById('accordionButton2');
const accordionContent2 = document.getElementById('accordionContent2');
const accordionIcon2 = document.getElementById('accordionIcon2');

accordionButton2.addEventListener('click', () => {
    accordionContent2.classList.toggle('open');
    accordionIcon2.classList.toggle('rotate-90');
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion___button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const content = button.nextElementSibling;
          const icon = button.querySelector('.accordion___icon');

          if (content.classList.contains('max-h-[800px]')) {
              content.classList.remove('max-h-[800px]');
              content.classList.add('max-h-0');
              icon.classList.remove('rotate-180');
          } else {
              document.querySelectorAll('.accordion___content').forEach(item => {
                  item.classList.remove('max-h-[800px]');
                  item.classList.add('max-h-0');
              });

              document.querySelectorAll('.accordion___icon').forEach(item => {
                  item.classList.remove('rotate-180');
              });

              content.classList.remove('max-h-0');
              content.classList.add('max-h-[800px]');
              icon.classList.add('rotate-180');
          }
      });
  });
});


document.getElementById('categories_btn').addEventListener('click', function() {
  const categoriesContent = document.getElementById('categories_content');
  const categoriesIcon = document.getElementById('categories_icon');
  if (categoriesContent.classList.contains('max-h-0')) {
      categoriesContent.classList.remove('max-h-0');
      categoriesContent.classList.add('max-h-[2000px]');
      categoriesIcon.classList.toggle('rotate-180')
  } else {
      categoriesContent.classList.remove('max-h-[2000px]');
      categoriesContent.classList.add('max-h-0');
      categoriesIcon.classList.toggle('rotate-180')
  }
});


let categry_mobile_btn = document.querySelector('#categry_mobile_btn');
let category_mobile = document.querySelector('#category_mobile');
let close__filter = document.querySelector('.close__filter');

categry_mobile_btn.addEventListener('click', function () {
    category_mobile.classList.add('left-0');
    category_mobile.classList.remove('-left-full');
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('h-screen');
});

close__filter.addEventListener('click', function () {
    category_mobile.classList.remove('left-0');
    category_mobile.classList.add('-left-full');
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('h-screen');
});