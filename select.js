const daySelect = document.querySelector('#day');
const monthSelect = document.querySelector('#month')
const yearSelect = document.querySelector('#year');
const formSelect = document.querySelector('.formSelect');
let previousDay;



// @ts-ignore
populateDays(monthSelect.value)
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
    daySelect.value = previousDay;

    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

daySelect.onchange = function() {
  previousDay = daySelect.value;
}


// @ts-ignore
yearSelect.onchange = function() {
  // @ts-ignore
  populateDays(monthSelect.value);
}

// @ts-ignore
monthSelect.onchange = function() {
  // @ts-ignore
  populateDays(monthSelect.value);
}

formSelect.addEventListener('submit', (evt) => {
  
  if (daySelect.value === '') {
    evt.preventDefault();
    daySelect.classList.add('required-select');
  } else {
    daySelect.classList.remove('required-select');
  }

  if (monthSelect.value === '') {
    evt.preventDefault();
    monthSelect.classList.add('required-select');
  } else {
    monthSelect.classList.remove('required-select');
  }

  if (yearSelect.value === '') {
    evt.preventDefault();
    yearSelect.classList.add('required-select');
  } else {
    yearSelect.classList.remove('required-select');
  }
}); 


