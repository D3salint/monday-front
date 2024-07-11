const accordionButton1_mobile = document.getElementById('accordionButton1_mobile');
const accordionContent1_mobile = document.getElementById('accordionContent1_mobile');
const accordionIcon1_mobile = document.getElementById('accordionIcon1_mobile');

accordionButton1_mobile.addEventListener('click', () => {
    accordionContent1_mobile.classList.toggle('open');
    accordionIcon1_mobile.classList.toggle('rotate-180');
});

const accordionButton2_mobile = document.getElementById('accordionButton2_mobile');
const accordionContent2_mobile = document.getElementById('accordionContent2_mobile');
const accordionIcon2_mobile = document.getElementById('accordionIcon2_mobile');

accordionButton2_mobile.addEventListener('click', () => {
    accordionContent2_mobile.classList.toggle('open');
    accordionIcon2_mobile.classList.toggle('rotate-90');
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons_mobile = document.querySelectorAll('.accordion___button_mobile');
    buttons_mobile.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.accordion___icon_mobile');

            if (content.classList.contains('max-h-[800px]')) {
                content.classList.remove('max-h-[800px]');
                content.classList.add('max-h-0');
                icon.classList.remove('rotate-180');
            } else {
                document.querySelectorAll('.accordion___content_mobile').forEach(item => {
                    item.classList.remove('max-h-[800px]');
                    item.classList.add('max-h-0');
                });

                document.querySelectorAll('.accordion___icon_mobile').forEach(item => {
                    item.classList.remove('rotate-180');
                });

                content.classList.remove('max-h-0');
                content.classList.add('max-h-[800px]');
                icon.classList.add('rotate-180');
            }
        });
    });
});


document.getElementById('categories_btn_mobile').addEventListener('click', function () {
    const categoriesContentMobile = document.getElementById('categories_content_mobile');
    const categoriesIconMobile = document.getElementById('categories_icon_mobile');
    if (categoriesContentMobile.classList.contains('max-h-0')) {
        categoriesContentMobile.classList.remove('max-h-0');
        categoriesContentMobile.classList.add('max-h-[2000px]');
        categoriesIconMobile.classList.toggle('rotate-180')
    } else {
        categoriesContentMobile.classList.remove('max-h-[2000px]');
        categoriesContentMobile.classList.add('max-h-0');
        categoriesIconMobile.classList.toggle('rotate-180')
    }
});