'use strict';

// document.getElementById("experiencia").innerHTML =
//   "<h1 id='exp'>HOLA CRIS</h1>";

const datosExperiencia = document.getElementById('datosExperiencia');
const seccionExperiencia = document.getElementById('experiencia');

let experiencia = '';
let modals = '';

let experienciaData = [
  {
    id: 1,
    cargo: 'Desarrollador de aplicaciones y Diseñador de personajes 3D',
    empresa:
      'Grupo de Investigación en Cloud Computing, Smart Cities & High Performance (GIHP4C)',
    descripcion:
      'Desarrollo de una aplicación móvil para el agendamiento de Citas de consultas médicas utilizando técnicas de Procesamiento de lenguaje natural, así también realice el modelado de personajes 3D usando Blender y ScketchUp, animaciones de personajes en 3D en Unity  para el proyecto “Educación vial de peatones yconductores de la ciudad de Cuenca a través de sistemas de realidad virtual”.',
    fechaIncio: 'Enero 2020',
    fechaFin: 'Febrero 2022',
    logo: './assets/img/experience/GIHP4.png',
  },
  {
    id: 2,
    cargo: 'Pasante en desarrollo web',
    empresa: 'EMOV EP',
    descripcion:
      'Implementación de plataforma web educativa Moodle para educación vial.jkljk',
    fechaIncio: 'Abril 2021',
    fechaFin: 'Agosto 2021',
    logo: './assets/img/experience/EMOV.png',
  },
];

//console.log(student);

experienciaData.forEach(element => {
  experiencia += `<a class="eins-modal-button" href="#modal${element.id}"
  ><img src="${element.logo}" />
  
  <h4>
  ${element.empresa}.
  </h4></a
  >`;
  modals += `<div id="modal${element.id}" class="modalmask">
      <div class="modalbox movedown">
        <a href="#close" title="Close" class="close">X</a>
        <h2>${element.empresa}</h2>
        <p>
         ${element.descripcion}
        </p>
        <h3>Cargo</h3>
        <p>
          ${element.cargo}
        </p>
      </div>
    </div>`;
});
//datosExperiencia.innerHTML = modals;
//seccionExperiencia.innerHTML = modals;
datosExperiencia.innerHTML = experiencia + modals;
