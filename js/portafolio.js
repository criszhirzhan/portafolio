'use strict';

let seccionPortafolio = '';
const portafolio = document.getElementById('portfl');
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModel = document.querySelector('.close-modal');

var portfolioData = [
  {
    title: 'Nintendo Disney Art Academy',
    subtitle: "Promo website for Nintendo's 3DS game",
    description:
      'Nintendo Disney Art Academy is a website designed by <a href="http://enterthestudio.com/">Enter the Studio</a> for Nintendo\'s 3DS game. It was developed using technologies like GSAP, CSS3, slick.js, and JQuery. It was also customized and tested on many modern devices including the 3DS console.',
    code: 'disney',
    video: 'https://youtube.com/shorts/NPh3SKf0OWA',
    buttons: [false, false, false, 'http://artacademy.nintendo.com/disney/'],
  },
  {
    title: 'Fridge Binge',
    subtitle: 'Website for a retro games startup',
    description:
      "Fridge Binge was developed and designed as a gaming site using AngularJS, Node.js, MongoDB, Express, Handlebars, Passport, Bcrypt, and RESTful APIs. It's Auth sytem was later migrated to Angular 2 and Firebase as a future proof upgrade.",
    code: 'fridgebinge',
    video: 'https://www.youtube.com/watch?v=cwEptPBYVvk',
    buttons: ['desktop', false, false, 'http://www.fridgebinge.com'],
  },
];

/* <iframe  src="https://www.youtube.com/embed/NPh3SKf0OWA" frameborder="0" allowfullscreen></iframe> */

portfolioData.forEach(element => {
  seccionPortafolio += `<section class="proyectos"'>
  <h3>${element.title}</h3>
  <p>
    ${element.description}
  </p>
</section>`;
});

portafolio.innerHTML = seccionPortafolio;
