const prevButton= document.getElementById('prev')
const nextButton= document.getElementById('next')
const items= document.querySelectorAll('.item')
const dots= document.querySelectorAll('.dot')
const NumberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0
const total = items.length
let timer;

function update(direction) {

  const currentItem = document.querySelector('.item.active')

  if (currentItem) currentItem.classList.remove('active')

  active = (active + direction + total) % total

  // Atualiza item
  items[active].classList.add('active')

  // Atualiza dots
  dots.forEach(dot => dot.classList.remove('active'))
  if (dots[active]) {
    dots[active].classList.add('active')
  }

  // Atualiza número
  if (NumberIndicator) {
    NumberIndicator.textContent = 
      String(active + 1).padStart(2, '0')
  }
}
prevButton.addEventListener('click', () => {
 update(-1)
})

nextButton.addEventListener('click', () => {
  update(1)
})
