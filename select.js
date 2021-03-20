const daySelect = document.querySelector('#day');
const monthSelect = document.querySelector('#month');
const yearSelect = document.querySelector('#year');
const formSelect = document.querySelector('.formSelect');
let previousDay;


 // @ts-ignore
 const dateOfBirth = {
  day: '',
  month: '',
  year: ''
};





// @ts-ignore
populateDays(monthSelect.value);
populateYears();

function populateYears() {
  //  получаем текущий год 
  let date = new Date();
  let year = date.getFullYear();

  // выводим 100 лет с текущего года
  for(let i = 0; i <= 100; i++) {
    let option = document.createElement('option');
    // @ts-ignore
    option.textContent = year-i;
    yearSelect.append(option);
  }
};


function populateDays(month) {
  while(daySelect.childNodes.length !== 2){
    daySelect.removeChild(daySelect.lastChild);
  }

  let dayNum;

  // 31 или 30 день?
  if(month === '1' || month === '3' || month === '5' || month === '7' || month === '8' || month === '10' || month === '12') {
    dayNum = 31;
  } else if(month === '4' || month === '6' || month === '9' || month === '11') {
    dayNum = 30;
  }  else {
  // Если месяц февраль, вычисляем високосный год или нет
    // @ts-ignore
    let year = yearSelect.value;
    (year - 2020) % 4 === 0 ? dayNum = 29 : dayNum = 28;
  }

  // выводим нужное количество дней <option> в <select>
  for(let i = 1; i <= dayNum; i++) {
    let option = document.createElement('option');
    // @ts-ignore
    option.textContent = i;
    daySelect.appendChild(option);
  }

  if(previousDay) {
    // @ts-ignore
    daySelect.value = previousDay;

    // @ts-ignore
    if(daySelect.value === "") {
      // @ts-ignore
      daySelect.value = previousDay - 1;
    }

    // @ts-ignore
    if(daySelect.value === "") {
      // @ts-ignore
      daySelect.value = previousDay - 2;
    }

    // @ts-ignore
    if(daySelect.value === "") {
      // @ts-ignore
      daySelect.value = previousDay - 3;
    }
  }
}

// @ts-ignore
daySelect.onchange = function() {
  // @ts-ignore
  previousDay = daySelect.value;
  // @ts-ignore
  
}


// @ts-ignore
yearSelect.onchange = function() {
  // @ts-ignore
  populateDays(monthSelect.value);
  // @ts-ignore
  
}

// @ts-ignore
monthSelect.onchange = function() {
  // @ts-ignore
  populateDays(monthSelect.value);
  // @ts-ignore
  
}


formSelect.addEventListener('submit', (evt) => {

  // @ts-ignore
  if (daySelect.value === '') {
    evt.preventDefault();
    daySelect.classList.add('required-select');
  } else {
    dateOfBirth.day = daySelect.value;
    daySelect.classList.remove('required-select');
  }

  // @ts-ignore
  if (monthSelect.value === '') {
    evt.preventDefault();
    monthSelect.classList.add('required-select');
  } else {
    dateOfBirth.month = monthSelect.value;
    monthSelect.classList.remove('required-select');
  }

  // @ts-ignore
  if (yearSelect.value === '') {
    evt.preventDefault();
    yearSelect.classList.add('required-select');
  } else {
    dateOfBirth.year = yearSelect.value;
    yearSelect.classList.remove('required-select');
  }

  console.log(dateOfBirth);
  // @ts-ignore
  localStorage.age = getAge();
}); 

function getAge () {
  let now = new Date(); //Текущя дата
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  let dob = new Date(dateOfBirth.year, dateOfBirth.month - 1, dateOfBirth.day); //Дата рождения
  let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
  let age; //Возраст

  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age-1;
  }
  console.log(age)
  return age;
}



