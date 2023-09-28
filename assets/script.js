// variables
const modalCallBack = document.querySelector('.call-back-window');
const modalThanks = document.querySelector('.thanks');
const btnCallBack = document.querySelector('.call-back');
const modalSubmit = document.querySelector('.modal-form__item button');
const btnClose = document.querySelector('.btn-close');
const btnCloseThanks = document.querySelector('.thanks > .modal-content .btn-close');
const blockProjects = document.querySelector('.projects'); 
const blockSkills = document.querySelector('.skills'); 


// function
function showModalCallBack() { 
  modalCallBack.style.display = 'flex';
}
function closeModalCallBack() { 
  modalCallBack.style.display = 'none';
}
function submitCallBack() { 
  closeModalCallBack();
  modalThanks.style.display = 'flex';
}
function closemodalThanks() { 
  modalThanks.style.display = 'none';
}


// events
btnCallBack.addEventListener("click", showModalCallBack);
modalSubmit.addEventListener("click", submitCallBack);
btnClose.addEventListener("click", closeModalCallBack);
btnCloseThanks.addEventListener("click", closemodalThanks);
