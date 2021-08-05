import { Theme } from '../src/data/classes.js';
import templateMenu from './template.hbs';
import menu from './menu.json';
import './styles.css';

const linkMenuContainer = document.querySelector('.js-menu');
const linkSwitchToggle = document.querySelector('.theme-switch__toggle');
const linkBodyClass = document.querySelector('body');

linkSwitchToggle.addEventListener('change', changeWindowColor);
document.addEventListener('DOMContentLoaded', setLocalStorageData);

linkMenuContainer.insertAdjacentHTML('beforeend', createContainerMarkup(menu));

function createContainerMarkup(menu) {
  return menu.map(templateMenu).join('');
}

function changeWindowColor() {
  if (linkBodyClass.classList.value !== Theme.DARK) {
    linkBodyClass.classList.add(Theme.DARK);
    linkBodyClass.classList.remove(Theme.LIGHT);
  } else {
    linkBodyClass.classList.add(Theme.LIGHT);
    linkBodyClass.classList.remove(Theme.DARK);
  }
  localStorage.setItem('background', `${linkBodyClass.classList.value}`);
}

function setLocalStorageData(e) {
  const background = localStorage.getItem('background');

  if (background !== Theme.DARK) {
    linkBodyClass.classList.add(Theme.LIGHT);
  } else {
    linkBodyClass.classList.add(Theme.DARK);
    linkSwitchToggle.checked = background === Theme.DARK;
  }
}
