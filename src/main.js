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

const dataHariSpecial = [
  'Sabtu',
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
];

let convertData = `${dataHari[getDay]}, ${convertBelow10(getDate)} ${
  dataBulan[getMonth]
} ${getYear}`;

let dateElm = document.getElementById('date');
dateElm.textContent = convertData;

let hour = `${convertBelow10(getHour)}:${convertBelow10(getMinute)}`;

let hourElm = document.getElementById('hour');
hourElm.textContent = hour;

//? -------------------------------------------------------------------------------------

// let valueTime = document.getElementById('time-input').value;
// let valueDate = document.getElementById('date-input').value;

const inputElm = document.getElementById('input');
const listElm = document.getElementById('list-container');

function addTask() {
  if (inputElm.value === '') {
    alert('Anda harus memasukkan sesuatu');
  } else {
    let list = document.createElement('li');
    list.innerHTML = inputElm.value;
    console.log(list.innerHTML);
    listElm.appendChild(list);
    let spanElm = document.createElement('span')
    spanElm.classList.add('span')
    list.appendChild(spanElm)
  }
  inputElm.value = '';
}

// let listElm = document.getElementById('list');
// btnElm.addEventListener('click', function () {
//   let valueInput = document.getElementById('input').value;
//   // // let addlist = document.createElement('div');
//   // let getTime = document.getElementById('time-input').value;
//   // let getDate = document.getElementById('date-input').value;
//   // let stringDate = String(getDate);
//   // let splitString = stringDate.split('-');
//   // let newDate = new Date(splitString[0], splitString[1], splitString[2]);
//   // let newDay = dataHariSpecial[newDate.getDay()];
//   // console.log(newDate.getDay());
//   // console.log(newDate);
//   // listElm.innerHTML = `<div class="h-14 bg-white/50 mt-4 pt-2 px-3 rounded-lg text-slate-500 font-normal drop-shadow-md animation-show overflow-hidden flex justify-between "><div><div>${valueInput}</div><div class="flex text-xs font-thin gap-3"><div>${newDay}</div><div>${getTime}</div></div></div><div ><button name="remove" class="h-full w-16 bg-black"></button></div></div>`;
//   // console.log(listElm);
//   // addlist.classList.add(
//   //   'h-14',
//   //   'bg-white/50',
//   //   'mt-4',
//   //   'pt-2',
//   //   'px-3',
//   //   'rounded-lg',
//   //   'text-slate-500',
//   //   'font-normal',
//   //   'drop-shadow-md',
//   //   'animation-show',
//   //   'overflow-hidden',
//   //   'flex',
//   //   'justify-between',
//   //   'test'
//   // );

//   // let removeElm = document.getElementsByName('remove');
//   // removeElm.forEach((item) => {
//   //   item.addEventListener('click', function () {
//   //     addlist.classList.add('hidden')
//   //   });
//   // });
//   // console.log(removeElm);

// //   if (valueInput.length !== 0) {
// //     listElm.appendChild(addlist);
// //   } else {
// //   }
// // });
// // let inputElm = document.getElementById('input');
// // inputElm.addEventListener('keydown', function () {
// //   let valueInput = document.getElementById('input').value;
// //   let btnDateElm = document.getElementById('btn-date');
// //   btnDateElm.classList.add('contents');
// //   if (valueInput === '') {
// //     console.log('salah');
// //   } else {
// //     console.log('benar');
// //   }
// // });

// // let btnDateElm = document.getElementById('btn-date');
// // function ButtonDate() {
// //   // let valueInput = document.getElementById('input').value;
// //   btnDateElm.classList.add('contents');

// //   // console.log('yes');
// // }

// // console.log(valueDate);
// })
