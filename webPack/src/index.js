import './styles.css';
import posts from './menu.json';
import template from './templates/menu.hbs'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const refs = {
    menuUl: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('.js-switch-input'),
    body: document.querySelector('body')
}

console.log(refs.body)



function buildPostFeed (posts){
    const markUp = posts.map(post =>  template(post)).join('') ;    
    refs.menuUl.insertAdjacentHTML('beforeend',markUp)
    }

buildPostFeed(posts)

function checkTheme(){
    if (localStorage.getItem('Theme') === null) {
        localStorage.setItem('Theme', `${Theme.LIGHT}`)
      }
      if (localStorage.getItem('Theme') === Theme.DARK) {
        refs.body.classList.add("dark-theme");
        refs.themeSwitch.checked = true;
      }
      if (localStorage.getItem('Theme') === Theme.LIGHT) {
        refs.body.classList.add("light-theme");
        refs.themeSwitch.checked = false;
      }
      
}
checkTheme()

refs.themeSwitch.addEventListener('input',() =>{
    if (refs.themeSwitch.checked === true) {
        refs.body.classList.remove("light-theme");
        refs.body.classList.add("dark-theme");
        localStorage.setItem('Theme', `${Theme.DARK}`)
    }else{
        refs.body.classList.remove("dark-theme");
        refs.body.classList.add("light-theme");
        localStorage.setItem('Theme', `${Theme.LIGHT}`)
        themeSwitch.checked = false;
        }
     })


    





