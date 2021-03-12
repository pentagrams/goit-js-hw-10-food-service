import './styles.css';
import cardItem from './templates/card.hbs'
import menu from './menu.json'

//Создание разметки

const listRef = document.querySelector('.js-menu');
const markup = cardItem(menu);

listRef.insertAdjacentHTML('beforeend', markup);


//Смена темы 

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.body;
const checkboxRef = document.querySelector('#theme-switch-toggle');

defaultTheme()

checkboxRef.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    darkTheme()
    return;
  }
  lightTeme();
}

function defaultTheme() {
  let lastTheme = localStorage.getItem('Theme');
  if (lastTheme === Theme.DARK) {
    darkTheme()
    checkboxRef.checked = true;
    return;
  }
  lightTeme();
}

function lightTeme() {
  bodyRef.classList.remove(Theme.DARK);
  bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
}

function darkTheme() {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
}


