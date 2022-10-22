'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal')

// console.log(btnShowModal)
const openModel = function () {
      console.log('Tıklandı')
      modal.classList.remove('hidden')
      overlay.classList.remove("hidden")
}

const closeModal = function () {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click',openModel)
}

btnCloseModal.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) { //e--> event kısaltması genelde e kullanılır
  // console.log("Tuşa basıldı")
  console.log(e.key)
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // console.log("Escape basıldı")
      closeModal()
  }
}) //keyup-->kaldırdığında, keydown-->bastığında , keypress--> basılı tuttuğunda







