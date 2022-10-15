'use strict';

const skillsHTML = document.getElementById('skills');
let skills = '';

var skillsData = [
  {
    nombre: 'HTML',
    logo: './assets/img/skills/html.png',
  },
  {
    nombre: 'ANGULAR',
    logo: './assets/img/skills/angular.png',
  },
  {
    nombre: 'CSS',
    logo: './assets/img/skills/css.png',
  },
  {
    nombre: 'JAVA',
    logo: './assets/img/skills/java.png',
  },
  {
    nombre: 'JAVASCRIPT',
    logo: './assets/img/skills/js.png',
  },
  {
    nombre: 'MYSQL',
    logo: './assets/img/skills/mysql.png',
  },
  {
    nombre: 'POSTGRESS',
    logo: './assets/img/skills/postgress.png',
  },
  {
    nombre: 'PYTHON',
    logo: './assets/img/skills/python.png',
  },
  {
    nombre: 'GIT',
    logo: './assets/img/skills/git.png',
  },
  {
    nombre: 'IONIC',
    logo: './assets/img/skills/ionic.png',
  },
  {
    nombre: 'SPRING BOOT',
    logo: './assets/img/skills/springBoot.png',
  },
];

skillsData.forEach(element => {
  skills += `<div>
    <img src="${element.logo}" />
    <span class="tooltip">${element.nombre}</span>
    </div>`;
});

skillsHTML.innerHTML = skills;
