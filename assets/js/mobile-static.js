const staticToggle2 = document.querySelector('#staticToggle2');
const staticInfo2 = document.querySelector('#staticInfo2');
const svgContainers2 = document.querySelectorAll('.svg-container-2');
const progressContainers = document.querySelectorAll('.progress-container-2');

staticToggle2.addEventListener('click', function () {
    toggleStaticInfo();
});

function toggleStaticInfo() {
    if (staticInfo2.classList.contains('max-h-0')) {
        staticInfo2.classList.remove('max-h-0', 'hidden', 'p-4');
        staticInfo2.classList.add('max-h-[1000px]', 'p-0', 'mt-2.5');
        svgContainers2.forEach(container => container.classList.add('rotate-180'));
        startAnimations();
    } else {
        staticInfo2.classList.remove('max-h-[1000px]', 'p-0', 'mt-2.5');
        staticInfo2.classList.add('max-h-0');
        svgContainers2.forEach(container => container.classList.remove('rotate-180'));
        resetProgressAnimations();
    }
}

function startAnimations() {
    progressContainers.forEach(container => {
        const percentage = container.getAttribute('data-percentage-2');
        const progressBar = container.querySelector('.progress-bar');
        const progressLabel = container.querySelector('.progress-label');

        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        setTimeout(() => {
            progressBar.style.transition = `width 2s`;
            progressBar.style.width = percentage + '%';
            animateProgressLabel(progressLabel, percentage);
        }, 10);
    });
}

function resetProgressAnimations() {
    progressContainers.forEach(container => {
        const progressBar = container.querySelector('.progress-bar');
        const progressLabel = container.querySelector('.progress-label');

        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        progressLabel.innerHTML = '';

        setTimeout(() => {
            progressBar.style.transition = `width 2s`;
        }, 10);
    });
}

function animateProgressLabel(label, target) {
    let current = 0;
    const increment = target / (2000 / 50);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        label.innerHTML = `${Math.round(current)}<span class="text-[#B7C3D6] font-medium">%</span>`;
    }, 50);
}
