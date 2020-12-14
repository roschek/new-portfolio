import "./blocks/style.css";
import Netmask from "inputmask";

//текст с эффектом появления

window.addEventListener('scroll', function(){
 const header = document.querySelector('.header')
  if(scrollY >=10){
    header.classList.add('header-move')
  }
  else header.classList.remove("header-move")
})
const upperText = [
  "Frontend developer</br>",
  "JavaScript, HTML, CSS",
];

function typeText() {
  let line = 0;
  let count = 0;
  let outText = "";
  let htmlOut = document.querySelector(".uppertext__text");

  function typeLine() {
    setTimeout(() => {
      outText += upperText[line][count];
      htmlOut.innerHTML = outText + "|";
      count++;
      if (count >= upperText[line].length) {
        count = 0;
        line++;
        if (line == upperText.length) {
          line = 0;
          count = 0;
          outText = "";
        }
      }
      typeLine();
    }, 100);
  }

  typeLine();
}
typeText()


//бургер меню
const burgerBttn = document.querySelector(".burger");
const navMenu = document.querySelector(".header__menu-list");

function toggleMenu() {
  navMenu.classList.toggle("active");
  burgerBttn.classList.toggle("bttn-active");
}

burgerBttn.addEventListener("click", toggleMenu);



const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//валидация
const form = document.forms.subscribe
const submit = document.querySelector('.submit')
const inputs = document.querySelectorAll('input')
const textArea = document.querySelector('#message')

const sendForm = ()=>{
  submit.removeAttribute('disabled')
  const formData = new FormData(form);
   fetch('send.php', {
    method: "POST",
    body: formData
  })
      .then((res) => {
            if (res) {
              submit.textContent = 'Ваше сообщение отправлено'
              textArea.value = '';
              inputs.forEach((elt) => {
                elt.value = ' '
              })
            }})
       .catch(err=> {submit.textContent = 'Упс, что-то пошло не так'; console.log(err)})

}
form.addEventListener('submit', (evt) => {
  let checkValidity = false
  evt.preventDefault()
  inputs.forEach(elem =>{
    if(elem.value.trim().length ===0){
      submit.setAttribute('disabled', true)
      elem.style = "border-bottom:2px solid red"
      elem.placeholder = "Это обязательное поле"
      return checkValidity =true
    }
      else return checkValidity = false
    })
    if(!checkValidity){
      sendForm()
    }
    else {submit.textContent = 'Упс, что-то пошло не так'}
    })

inputs.forEach((elt) => {
  elt.addEventListener('click', () => {
    submit.removeAttribute('disabled')
    elt.style = "border-bottom:2px solid green"
    elt.value = ''
    document.querySelector('textarea').value = ''
    submit.textContent = 'Отправить'
  })
})

const telMask = document.querySelector('#tel')
Netmask({ "mask": "+7 (999) 999-99-99" }).mask(telMask);
