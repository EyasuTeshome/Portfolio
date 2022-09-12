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
  name: 'Zema Songs',
  description: 'This website is Zema Songs Concert website. In this website the 2022 Zema songs Concert is presented including the address, the performers and the programs arrangment. The website is built using HTML, CSS and Javascript',
  featured_image: './img/project-zema.png',
  link_to_live: ['See live', './img/live.png', 'https://eyasuteshome.github.io/Zema-songs/index.html'],
  link_to_source: ['See source', './img/git.png', 'https://github.com/EyasuTeshome/Zema-songs'],
  technologies: ['html', 'css', 'javaScript', 'Bootstrap', 'Git'],
  name_detail: ['Eyasu Teshome ', 'Front-End Dev', '2022'],
},
{
  id: '2',
  name: 'To-do List',
  description: 'This is a simple ToDO List website. the website enable the users to set multiple todos with different functionality like edit delete and mark as complete. Moreover the todo list will be store in local storage, as long as the user doesn\'t delete it, it won\'t be deleted.',
  featured_image: './img/project-todo.png',
  link_to_live: ['See live', './img/live.png', 'https://eyasuteshome.github.io/Todo-List/'],
  link_to_source: ['See source', './img/git.png', 'https://github.com/EyasuTeshome/Todo-List'],
  technologies: ['html', 'css', 'javaScript', 'Bootstrap', 'Git'],
  name_detail: ['Eyasu Teshome', 'Front-End Dev', '2021'],
},
{
  id: '3',
  name: 'MovieArena',
  description: 'This website presents the best Tv shows. Users can interact with the website by liking and commenting on the movies. We have used TVmaze and Involvement API to get the movie content and to store the like and the comments respectively. Javascript, HTML and CSS are the languages used to build the website.',
  featured_image: './img/moviearena.jpeg',
  link_to_live: ['See live', './img/live.png', 'https://eyasuteshome.github.io/MovieArena/'],
  link_to_source: ['See source', './img/git.png', 'https://github.com/EyasuTeshome/MovieArena'],
  technologies: ['html', 'css', 'javaScript', 'TvMaze API', 'Git'],
  name_detail: ['Contributors: Eyasu Teshome', 'Full-stack website', '2022'],
},
{
  id: '4',
  name: 'Global Airpollution Index',
  description: 'In this project I have built Global Air Pollution Index. by using the Latitude and the Longtude of any location in the worl we can see the severity of Air pollution. On the homepage I have included the top 10 countries where the Air Pollution is high.',
  featured_image: './img/air.jpeg',
  link_to_live: ['See live', './img/live.png', 'https://631b5bf9ac6b01187d804c8c--stalwart-hotteok-4f8c89.netlify.app/'],
  link_to_source: ['See source', './img/git.png', 'https://github.com/EyasuTeshome/Airpollution-Index'],
  technologies: ['html', 'css', 'javaScript', 'React', 'Redux'],
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
                        <li><button class="pop-button" type="button">${selectedProject.technologies[3]}</button></li>
                        <li><button class="pop-button" type="button">${selectedProject.technologies[4]}</button></li>

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