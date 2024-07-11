let dropDown = document.querySelectorAll('.dropDown')
let dropDown__text = document.querySelectorAll('.dropDown__text')
let arrow = document.querySelectorAll('.arrow')

dropDown.forEach((item, index) => {
    item.addEventListener('click', () => {
        dropDown__text[index].classList.toggle('mt-4')
        dropDown__text[index].classList.toggle('h-max')
        arrow[index].classList.toggle('rotate-180')
    })
})


let drop = document.querySelectorAll('.serviceDrop')
let dropArrow = document.querySelectorAll('.arrowDrop')
let downDrop = document.querySelectorAll('.serviceDropDown')

dropArrow.forEach(response => {
    response.classList.add('duration-300')
})

drop.forEach((item, index) => {
    item.addEventListener('click', () => {
        dropArrow[index].classList.toggle('rotate-180')
        downDrop[index].classList.toggle('h-max')
        downDrop[index].classList.toggle('h-0')
        downDrop[index].classList.toggle('mt-4')
    })
})

let tab = document.querySelectorAll('.tab')

tab.forEach((response, index) => {
    response.classList.add('duration-300')
  response.addEventListener('click', () => {
    tab.forEach(response => {
        response.style.boxShadow = 'none'  
    })
    tab[index].style.boxShadow = "5px 10px 40px 2px #0000000D"
    tab[index].classList.add('bg-white')

  })
})