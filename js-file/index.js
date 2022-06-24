const menu = document.querySelector('.nav-pic');
const mobMenu = document.getElementById('menu');
const link = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const closeBtn = document.querySelector('[data-close-button]');

const seeProjectDetail = document.querySelectorAll('.work-button');
const projectDetail = document.querySelector('.project-detail');
const mainTag = document.querySelector('.home');
const header = document.querySelector('.header');

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
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featured_image: './img/Snapshoot1.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Eyasu Teshome ', 'Front-End Dev', '2022'],
},
{
  id: '2',
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featured_image: './img/Snapshoot2.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Eyasu Teshome', 'Front-End Dev', '2021'],
},
{
  id: '3',
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featured_image: './img/Snapshoot3.png',
  link_to_live: ['See live', './img/live.png', 'https://github.com'],
  link_to_source: ['See source', './img/git.png', 'https://github.com'],
  technologies: ['html', 'css', 'javaScript'],
  name_detail: ['Contributors: Eyasu Teshome', 'Full-stack website', '2022'],
},
{
  id: '4',
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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
        <img data-close-button class="close1" alt="Close Botton" src="img/close2.png">
            <div class="project-detail-header">
                <h3>${selectedProject.name}</h3>

            </div>
            <div class="work-content">
                <ul class="client-name">
                    <li>${selectedProject.name_detail[0]}</li>
                </ul>
                <ul>
                    <li>${selectedProject.name_detail[1]}</li>
                </ul>
                <ul>
                    <li>${selectedProject.name_detail[2]}</li>
                </ul>
            </div>
            <div class="work-img-pop" style="background: url(${selectedProject.featured_image});
      background-size: cover; width: auto;"></div>
            <div class="flex">
                <div>
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
                        <a href="${selectedProject.link_to_live[2]}"><button class="work-button1 see-source">${selectedProject.link_to_live[0]}
              <img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
            </a>
                        <a href="${selectedProject.link_to_source[2]}"><button class="work-button1 see-source">${selectedProject.link_to_source[0]}
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
    });
  });
});