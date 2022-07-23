const menu = document.querySelector('.nav-pic');
const mobMenu = document.getElementById('menu');
const link = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const closeBtn = document.querySelector('[data-close-button]');

const seeProjectDetail = document.querySelectorAll('.work-button');
const projectDetail = document.querySelector('.project-detail');
const mainTag = document.querySelector('.container-all');
const header = document.querySelector('.work');

menu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
link.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
link2.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
link3.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});

const projects = [{
  id: '1',
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured_image: './img/Snapshoot1.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Eyasu Teshome ', 'Front-End Dev', '2022'],
},
{
  id: '2',
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured_image: './img/Snapshoot2.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Eyasu Teshome', 'Front-End Dev', '2021'],
},
{
  id: '3',
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured_image: './img/Snapshoot3.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Contributors: Eyasu Teshome', 'Full-stack website', '2022'],
},
{
  id: '4',
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured_image: './img/Snapshoot4.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Eyasu Teshome', 'Front-End Dev', '2021'],
},
];

seeProjectDetail.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedProject = projects.filter((project) => project.id === e.target.id)[0];
    projectDetail.classList.remove('hide');
    mainTag.classList.add('fixed_postion');
    header.classList.add('fixed_postion');

    projectDetail.innerHTML = `
        <div class="overlay">
        <div id="modal">
            <div class="project-detail-header">
                <h3>${selectedProject.name}</h3>
                <img data-close-button class="close1" alt="Close Botton" src="img/close2.png">
            </div>
            <div class="work-content work-content-pop">
                    <p>${selectedProject.name_detail[0]}</p>
               
                <ul>
                    <li>${selectedProject.name_detail[1]}</li>
                </ul>
                <ul>
                    <li>${selectedProject.name_detail[2]}</li>
                </ul>
            </div>
            <div class="work-img-pop"><img class="work-img-pop1" src="${selectedProject.featured_image}" alt=""></div>
            <div class="flex">
                <div class="p-description">
                    <p>
                        ${selectedProject.description}
                    </p>
                </div>
                <div class="categories">
                    <ul class="buttons">
                        <li><button class="pop-button" type="button">${selectedProject.technologies[0]}</button></li>
                        <li><button class="pop-button" type="button">${selectedProject.technologies[1]}</button></li>
                        <li><button class="pop-button" type="button">${selectedProject.technologies[2]}</button></li>

                    </ul>
                    <div class="project-detail-buttons">
                        <a class="project-link" href="${selectedProject.link_to_live[2]}"><button class="work-button1 see-source">${selectedProject.link_to_live[0]}
              <img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
            </a>
                        <a class="project-link" href="${selectedProject.link_to_source[2]}"><button class="work-button1 see-source">${selectedProject.link_to_source[0]}
              <img class="see-source-img" src=${selectedProject.link_to_source[1]} alt="" /></button>
            </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
      `;
    const projectDetailClose = document.querySelector('.close1');
    projectDetailClose.addEventListener('click', () => {
      projectDetail.classList.add('hide');
      mainTag.classList.remove('fixed_postion');
      header.classList.remove('fixed_postion');
    });
  });
});

const submit = document.querySelector('.submit-btn');
submit.addEventListener('click', (event) => {
  const error = document.querySelector('.error-message');
  const email = document.getElementById('email-address').value;
  const islowerCase = (str) => str === str.toLowerCase();
  if (!islowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Please make sure the E-mail <br>doesn\'t have uppercase letters';
  }
});

const fullNameForm = document.getElementById('user-name');
const emailForm = document.getElementById('email-address');
const messageForm = document.getElementById('msg');

function handleChange() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    fullNameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    messageForm.value = formObject.comment;
  }
});

fullNameForm.onchange = handleChange;
emailForm.onchange = handleChange;
messageForm.onchange = handleChange;
