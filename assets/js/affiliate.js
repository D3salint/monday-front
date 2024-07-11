let alf__select = document.querySelector("#alf__select")
letalf__select__arrow = document.querySelector("#alf__select__arrow")
alf__select.addEventListener('click' , function(){
    alf__select.classList.toggle("h-[43px]")
    alf__select.classList.toggle("max-h-[800px]")
    letalf__select__arrow.classList.toggle("rotate-180")
})