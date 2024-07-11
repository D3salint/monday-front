const searchInput = document.getElementById('searchInput');
const autocompleteResults = document.getElementById('autocompleteResults');
let selectedIndex = -1;

const suggestions = [
    "Web Design",
    "Mobile Design",
    "Branding & Logo Design",
];


searchInput.addEventListener('input', function () {
    const inputText = this.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(function (suggestion) {
        return suggestion.toLowerCase().includes(inputText);
    });

    renderSuggestions(filteredSuggestions);
});

searchInput.addEventListener('keydown', function (e) {
    const ul = autocompleteResults.querySelector('ul');
    const lis = ul.getElementsByTagName('li');

    switch (e.key) {
        case 'ArrowDown':
            selectedIndex = Math.min(selectedIndex + 1, lis.length - 1);
            selectedIndex
            break;
        case 'ArrowUp':
            selectedIndex = Math.max(selectedIndex - 1, -1);
            break;
        case 'Enter':
            if (selectedIndex !== -1) {
                e.preventDefault();
                searchInput.value = lis[selectedIndex].textContent.trim();
                autocompleteResults.style.display = 'none';
            }
            break;
    }

    highlightSelected(lis);
});

function renderSuggestions(suggestions) {
    const ul = autocompleteResults.querySelector('ul');
    ul.innerHTML = '';

    suggestions.forEach(function (suggestion, index) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#'; // Replace with actual link if needed
        a.className = 'text-[#575E6A] font-medium flex items-center text-xs gap-1';
        a.innerHTML = `
                <span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1359_26099)">
<path d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z" stroke="#9CA5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4996 10.5016L8.34961 8.35156" stroke="#9CA5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1359_26099">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>

                </span>
                ${suggestion}
            `;
        li.appendChild(a);
        ul.appendChild(li);

        li.addEventListener('click', function () {
            searchInput.value = suggestion;
            autocompleteResults.style.display = 'none';
        });
    });

    if (suggestions.length > 0) {
        autocompleteResults.style.display = 'block';
    } else {
        autocompleteResults.style.display = 'none';
    }

    selectedIndex = -1;
}

function highlightSelected(lis) {
    for (let i = 0; i < lis.length; i++) {
        if (i === selectedIndex) {
            lis[i].classList.add('bg-gray-200'); 
        } else {
            lis[i].classList.remove('bg-gray-200');
        }
    }
}