'use strict';

/* CSS animation classes settings |
 Configuración de las clases para las animaciones */
const allCards = document.querySelectorAll('.container-member');




/* Footer link settings |
 Configuración del enlace del Footer */
const footerLink = document.querySelector('#footer a'),
      profiles = ['https://github.com/javiervaleriano',
      'https://codepen.io/javiervaleriano',
      'https://www.linkedin.com/in/javier-valeriano1508/',
      'https://devchallenges.io/portfolio/javiervaleriano'];

footerLink.href = profiles[Math.floor(Math.random() * profiles.length)];