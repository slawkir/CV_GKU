// variables
const modalCallBack = document.querySelector('.call-back-window');
const modalThanks = document.querySelector('.thanks');
const btnCallBack = document.querySelector('.call-back');
const modalSubmit = document.querySelector('.modal-form__item button');
const btnClose = document.querySelector('.btn-close');
const btnCloseThanks = document.querySelector('.thanks > .modal-content .btn-close');

const achievementsItems = document.querySelectorAll('.achievements-item '); 
const blockProjects = document.querySelector('.projects'); 
const blockSkills = document.querySelector('.skills'); 
const blockEducation = document.querySelector('.education'); 
const blockForeign = document.querySelector('.foreign'); 

const linkProjects = document.querySelector('#link-projects'); 
const linkSkills = document.querySelector('#link-skills'); 
const linkEducation = document.querySelector('#link-edu'); 
const linkForeign = document.querySelector('#link-foreign'); 


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
function showBlockSkills() { 
  hideAchievementsItems();
  blockSkills.style.display = 'flex';
}
function showBlockEducation() { 
  hideAchievementsItems();
  blockEducation.style.display = 'flex';
}
function showBlockForeign() { 
  hideAchievementsItems();
  blockForeign.style.display = 'flex';
}
function showBlockProjects() { 
  hideAchievementsItems();
  blockProjects.style.display = 'flex';
}
function hideAchievementsItems() { 
  achievementsItems.forEach(item => {
    item.style.display = "none";
  });
}


// events
btnCallBack.addEventListener("click", showModalCallBack);
modalSubmit.addEventListener("click", submitCallBack);
btnClose.addEventListener("click", closeModalCallBack);
btnCloseThanks.addEventListener("click", closemodalThanks);

linkSkills.addEventListener('click', showBlockSkills);
linkEducation.addEventListener('click', showBlockEducation);
linkForeign.addEventListener('click', showBlockForeign);
linkProjects.addEventListener('click', showBlockProjects);
