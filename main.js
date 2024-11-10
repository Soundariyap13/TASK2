import Header from '../Ui-Controller/Header.js';
import Navigation from '../Ui-Controller/Navigation.js';
import Container from '../Ui-Controller/Container.js';

document.addEventListener('DOMContentLoaded', function () {
  const headerInstance = new Header(document.querySelector('.header'));
  const navigationInstance = new Navigation(document.querySelector('.navigation'));
  const containerInstance = new Container(document.querySelector('.container'));

  headerInstance.render();
  navigationInstance.render();
  containerInstance.render();
});

































































