const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modalBg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");

openModal.addEventListener("click",()=>{
   modal.classList.remove("hidden")
   modal.classList.add("flex")
   modalBg.classList.remove("hidden")
   modalBg.classList.add("flex")
})

closeModal.addEventListener("click",()=>{
   modal.classList.remove("flex")
   modal.classList.add("hidden")
   modalBg.classList.remove("flex")
   modalBg.classList.add("hidden")
})