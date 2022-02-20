const openModal=document.getElementById('open');
const modalBox=document.getElementById('modal-container');
const closeModal=document.getElementById('close');

openModal.addEventListener("click",()=>{
    modalBox.classList.add('show')
})

closeModal.addEventListener("click",()=>{
    modalBox.classList.remove('show')
})