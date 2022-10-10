'use strict';

let seccionPortafolio = '';
const portafolio = document.getElementById('portfl');
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModel = document.querySelector('.close-modal');

var portfolioData = [
  {
    title:
      'Aplicación Móvil para el Agendamiento de Citas de Consultas Médicas Utilizando Técnicas de Procesamiento de Lenguaje Natural',
    subtitle: "Promo website for Nintendo's 3DS game",
    description:
      'Fue desarrollado usando tecnologías como Spring, PostgreSQL, AWS, Ionic y Rasa Framework, se implemento la autenticación de los usuarios por tokens para acceder a servicios de escritura y lectura privados, para la persistencia en la base de datos se usó Spring Data JPA.',
    code: 'disney',
    video: 'https://youtube.com/shorts/NPh3SKf0OWA',
    buttons: [false, false, false, 'http://artacademy.nintendo.com/disney/'],
  },
  {
    title:
      'Aplicación Móvil para el Agendamiento de Citas de Consultas Médicas Utilizando Técnicas de Procesamiento de Lenguaje Natural',
    subtitle: "Promo website for Nintendo's 3DS game",
    description:
      'Fue desarrollado usando tecnologías como Spring, PostgreSQL, AWS, Ionic y Rasa Framework, se implemento la autenticación de los usuarios por tokens para acceder a servicios de escritura y lectura privados, para la persistencia en la base de datos se usó Spring Data JPA.',
    code: 'disney',
    video: 'https://youtube.com/shorts/NPh3SKf0OWA',
    buttons: [false, false, false, 'http://artacademy.nintendo.com/disney/'],
  },
  {
    title:
      'Aplicación Móvil para el Agendamiento de Citas de Consultas Médicas Utilizando Técnicas de Procesamiento de Lenguaje Natural',
    subtitle: "Promo website for Nintendo's 3DS game",
    description:
      'Fue desarrollado usando tecnologías como Spring, PostgreSQL, AWS, Ionic y Rasa Framework, se implemento la autenticación de los usuarios por tokens para acceder a servicios de escritura y lectura privados, para la persistencia en la base de datos se usó Spring Data JPA.',
    code: 'disney',
    video: 'https://youtube.com/shorts/NPh3SKf0OWA',
    buttons: [false, false, false, 'http://artacademy.nintendo.com/disney/'],
  },
];

/* <iframe  src="https://www.youtube.com/embed/NPh3SKf0OWA" frameborder="0" allowfullscreen></iframe> */

portfolioData.forEach(element => {
  seccionPortafolio += `<article class="proyectos"'>
  <h3>${element.title}</h3>
  <p>
    ${element.description}
  </p>
</article>`;
});

portafolio.innerHTML = seccionPortafolio;
