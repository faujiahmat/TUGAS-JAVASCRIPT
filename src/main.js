function getTime() {
  let date = new Date();

  let getYear = date.getFullYear();
  let getMonth = date.getMonth();
  let getDate = date.getDate();
  let getDay = date.getDay();
  let getHour = date.getHours();
  let getMinute = date.getMinutes();

  let getElmDay = document.getElementById('day');
  if ((getHour >= 18 && getHour < 24) || (getHour >= 0 && getHour < 5)) {
    getElmDay.textContent = 'Malam';
  } else if (getHour >= 5 && getHour < 11) {
    getElmDay.textContent = 'Pagi';
  } else if (getHour >= 11 && getHour < 15) {
    getElmDay.textContent = 'Siang';
  } else if (getHour >= 15 && getHour < 18) {
    getElmDay.textContent = 'Sore';
  } else {
    getElmDay.textContent = 'Wait';
  }

  function convertBelow10(time) {
    return time < 10 ? `0${time}` : time;
  }

  const dataBulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const dataHari = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];

  let convertData = `${dataHari[getDay]}, ${convertBelow10(getDate)} ${
    dataBulan[getMonth]
  } ${getYear}`;

  let dateElm = document.getElementById('date');
  dateElm.textContent = convertData;

  let hour = `${convertBelow10(getHour)}:${convertBelow10(getMinute)}`;

  let hourElm = document.getElementById('hour');
  hourElm.textContent = hour;
}
setInterval(getTime, 1000);


//? -------------------------------------------------------------------------------------

const inputElm = document.getElementById('input');
const listElm = document.getElementById('list-container');

function addTask() {
  if (inputElm.value === '') {
    alert('Anda harus memasukkan sesuatu');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputElm.value;
    listElm.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '&#45';
    span.classList.add('span');
    li.appendChild(span);
  }
  inputElm.value = '';
  dataSaver();
}
listElm.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName == 'LI') {
      e.target.classList.toggle('check-list');
      dataSaver();
    } else if (e.target.tagName == 'SPAN') {
      e.target.parentElement.remove();
      dataSaver();
    }
  },
  false
);

function dataSaver() {
  localStorage.setItem('save', listElm.innerHTML);
}

function showData() {
  listElm.innerHTML = localStorage.getItem('save');
}

showData();
