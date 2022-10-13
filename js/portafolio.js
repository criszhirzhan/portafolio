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
    video: 'https://youtube.com/shorts/NPh3SKf0OWA',
    disabled: false,
    repository: 'https://github.com/criszhirzhan/cita_doc_front',
  },
  {
    title: 'Aplicación para la Gestión de Contactos',
    description:
      'Aplicación JEE basado en Servlets, JSP y JPA para el intercambio de datos en un modelo de tres capas aplicando los patrones diseño de software MVC y DAO. ',
    video: ' ',
    disabled: true,
    repository:
      'https://github.com/criszhirzhan/Practica-de-laboratorio-02-Servlets-JSP-y-JPA',
  },
  {
    title: 'Aplicación para Correo Electrónico',
    description:
      'Fue desarrollado usando tecnologías como PHP, CSS, HTML, Ajax y una base de datos MySQL. ',
    video: ' ',
    disabled: true,
    repository:
      'https://github.com/criszhirzhan/Practica04-Mi-Correo-Electronico',
  },
];

portfolioData.forEach(element => {
  seccionPortafolio += `<article class="proyectos"'>
  <h3>${element.title}</h3>
  <p>
    ${element.description}
  </p>
  <button ${element.disabled ? 'disabled' : ' '} onclick="openResource('${
    element.video
  }')" type="button" class="btn btn-outline-info">Video</button>
  <button onclick="openResource('${
    element.repository
  }')" type="button" class="btn btn-outline-secondary">Repositorio</button>
</article>`;
});
const openResource = link => {
  window.open(link);
};
portafolio.innerHTML = seccionPortafolio;
