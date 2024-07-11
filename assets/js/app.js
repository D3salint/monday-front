document.getElementById('toggle__btn').addEventListener('click', function () {
    var toggleInfo = document.getElementById('toggle_info');
    var toggleIcon = document.getElementById('toggle__icon').firstElementChild;
    if (toggleInfo.classList.contains('max-h-0')) {
        toggleInfo.classList.remove('max-h-0');
        toggleInfo.classList.add('max-h-[1000px]');
        toggleIcon.classList.add('rotate-180'); 
    } else {
        toggleInfo.classList.add('max-h-0');
        toggleInfo.classList.remove('max-h-[1000px]');
        toggleIcon.classList.remove('rotate-180'); 
    }
});

document.querySelectorAll('.btn_footer').forEach((btn) => {
    btn.addEventListener('click', () => {
        const infoElement = btn.nextElementSibling;
        const footerRotate = btn.querySelector('.footer_rotate');

        if (infoElement.classList.contains('h-0')) {
            infoElement.classList.remove('h-0');
            infoElement.style.height = `${infoElement.scrollHeight}px`;
            footerRotate.classList.add('rotate-180');
        } else {
            infoElement.style.height = '0';
            infoElement.addEventListener('transitionend', () => {
                infoElement.classList.add('h-0');
                footerRotate.classList.remove('rotate-180');
            }, { once: true });
        }
    });
});