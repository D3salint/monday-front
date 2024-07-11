function create_new_project(params) {
    let catergories__bottom__select = document.querySelectorAll(
        ".catergories__bottom__select"
    );
    let catergori__bottom__btn = document.querySelectorAll(
        ".catergori__bottom__btn"
    );
    let catergories__bottom__arrow = document.querySelectorAll(
        ".catergories__bottom__arrow"
    );

    let files = []

    document.querySelector('.sectFileClass').addEventListener('change', function (event) {
        const file = event.target.files[0];
        files.push(file.name)
        const file_preview = document.createElement('div');



        files.forEach((fileName) => {
            document.querySelector('.selected-files').appendChild(file_preview).innerHTML = `
            <div
                    class="relative flex items-center justify-between gap-1 p-2 rounded-lg hover:bg-[#F1F3F9] cursor-pointer files_for_render">
                    <div class="flex items-center gap-1">
                        <div class="border-[#9CA5B3] rounded-lg border-[1px] p-2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5V7.5C11 10 10 11 7.5 11H4.5C2 11 1 10 1 7.5V4.5C1 2 2 1 4.5 1H7"
                                    stroke="#9CA5B3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 5H9C7.5 5 7 4.5 7 3V1L11 5Z" stroke="#9CA5B3"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span class=" text-[#202020] font-bold line-clamp-1">${fileName}</span>
                    </div>

                    <div class="bg-[#FAFAFC] w-[30px] rounded-lg p-2 hover:opacity-70 active:opacity-60 hidden files_for_render_rem">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12M4 4L12 12" stroke="#9CA5B3" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
        `
        })

        hover()
        remove()
    });



    document.querySelector('.sectFileClass-mobile').addEventListener('change', function (event) {
        const file = event.target.files[0];
        files.push(file.name)
        const file_preview = document.createElement('div');



        files.forEach((fileName) => {
            document.querySelector('.selected-files-mobile').appendChild(file_preview).innerHTML = `
            <div
                    class="relative flex items-center justify-between gap-1 p-2 rounded-lg hover:bg-[#F1F3F9] cursor-pointer files_for_render">
                    <div class="flex items-center gap-1">
                        <div class="border-[#9CA5B3] rounded-lg border-[1px] p-2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5V7.5C11 10 10 11 7.5 11H4.5C2 11 1 10 1 7.5V4.5C1 2 2 1 4.5 1H7"
                                    stroke="#9CA5B3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 5H9C7.5 5 7 4.5 7 3V1L11 5Z" stroke="#9CA5B3"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span class=" text-[#202020] font-bold line-clamp-1">${fileName}</span>
                    </div>

                    <div class="bg-[#FAFAFC] w-[30px] rounded-lg p-2 hover:opacity-70 active:opacity-60 hidden files_for_render_rem">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12M4 4L12 12" stroke="#9CA5B3" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
        `
        })

        hover()
        remove()
    });


    function hover() {
        const files_for_render = document.querySelectorAll('.files_for_render')
        files_for_render.forEach((e) => {
            e.addEventListener('mouseenter', function () {
                e.children[1].classList.remove('hidden')
            })
            e.addEventListener('mouseleave', function () {
                e.children[1].classList.add('hidden')
            })
        })
    }


    function remove() {
        const files_for_render = document.querySelectorAll('.files_for_render_rem')

        files_for_render.forEach((e) => {
            e.addEventListener('click', function () {
                const fileName = e.parentElement.children[0].children[1].innerText
                files = files.filter((f) => f !== fileName)
                e.parentElement.remove()
            })
        })
    }

}


create_new_project()

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('titleTextarea');
    const charCountDesktop = document.getElementById('charCountDesktop');
    const charCountMobile = document.getElementById('charCountMobile');
    const maxChars = 70;

    textarea.addEventListener('input', () => {
        let textLength = textarea.value.length;

        if (textLength > maxChars) {
            textarea.value = textarea.value.substring(0, maxChars);
            textLength = maxChars;
        }

        const charText = `${textLength} of ${maxChars} characters`;
        charCountDesktop.textContent = charText;
        charCountMobile.textContent = charText;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // First textarea character count functionality
    const titleTextarea = document.getElementById('titleTextarea');
    const charCountDesktop = document.getElementById('charCountDesktop');
    const charCountMobile = document.getElementById('charCountMobile');
    const maxCharsTitle = 70;

    titleTextarea.addEventListener('input', () => {
        let textLength = titleTextarea.value.length;

        // Limiting the number of characters
        if (textLength > maxCharsTitle) {
            titleTextarea.value = titleTextarea.value.substring(0, maxCharsTitle);
            textLength = maxCharsTitle;
        }

        // Updating the character count display
        const charText = `${textLength} of ${maxCharsTitle} characters`;
        charCountDesktop.textContent = charText;
        charCountMobile.textContent = charText;
    });

    // Second textarea character count functionality
    const descriptionTextarea = document.getElementById('descriptionTextarea');
    const descCharCountDesktop = document.getElementById('descCharCountDesktop');
    const descCharCountMobile = document.getElementById('descCharCountMobile');
    const maxCharsDesc = 500;

    descriptionTextarea.addEventListener('input', () => {
        let textLength = descriptionTextarea.value.length;

        // Limiting the number of characters
        if (textLength > maxCharsDesc) {
            descriptionTextarea.value = descriptionTextarea.value.substring(0, maxCharsDesc);
            textLength = maxCharsDesc;
        }

        // Updating the character count display
        const charText = `${textLength} of ${maxCharsDesc} characters`;
        descCharCountDesktop.textContent = charText;
        descCharCountMobile.textContent = charText;
    });
});
