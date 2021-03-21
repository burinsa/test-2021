const predictionDate = document.querySelector('.prediction-date');
const predictionFooter = document.querySelector('.prediction__footer-text');
const predictionBtn = document.querySelector('.prediction__btn');
const prediction = document.querySelector('.prediction');
const divReq = document.querySelector('.div-req');
const wrapReq = document.createElement('ul');
const url = 'https://swapi.dev/api/people/1/';
const btnclose = document.createElement('button');

btnclose.className = 'button';
btnclose.classList.add('btn-close');
btnclose.textContent = 'Скрыть';
btnclose.addEventListener('click', clearList)


// установка завтрашнего числа
let date = new Date();
predictionDate.textContent = tomorrowDay(date);

function tomorrowDay (date) {  
  date.setDate(date.getDate() + 1)
  let d = date.toLocaleString('ru', {
    day:   '2-digit',
    month: '2-digit',
    year:  '2-digit'
  });
  return d;
}

predictionFooter.addEventListener('click', () => {
  predictionFooter.classList.add('footer__text-show');
  setTimeout(() => {    
    predictionFooter.classList.remove('footer__text-show');      
  }, 5000);
});

function clearList () {
  wrapReq.remove();
  btnclose.remove();
}

function outputRequest (obj) {  

  while (wrapReq.firstChild) {
    wrapReq.removeChild(wrapReq.firstChild);
  }

  for(let key in obj) {
    console.log(obj[key])
    let itemReq = document.createElement('li');
    itemReq.className = 'request-list__item';
    itemReq.textContent = key + ": " + obj[key]; 
    wrapReq.className = 'request-list';   
    wrapReq.appendChild(itemReq);
    // wrapReq.append(btnclose);
  }  
  prediction.append(wrapReq);
  prediction.append(btnclose);
} 



predictionBtn.addEventListener('click', () => {
  
  async function getResponse () {
    
    let response = await fetch(url);
    let content = await response.json();
    
    outputRequest(content);
  };    
  getResponse();  
});




