function selectItem(item) {
   document.querySelector('.stickyItem').innerText = item;
}

function selectItempickUp(item) {
  document.querySelector('.stickyItem-pickUp').innerText = item;
}

function selectItemdropOff(item) {
  document.querySelector('.stickyItem-dropOff').innerText = item;
}


 // function displayCar(){

 //   const chooseCar = document.querySelector('.js-car-choose');
 //   chooseCar.src = '/images/model-BMW-img.png';
//  }


//Book ride Section 

function displayLocation () {
  const pickUp = document.querySelector('.js-pickUp-location').innerText

  document.querySelector('.js-pickUp-location-display')
  .innerHTML = pickUp;
}

function displayLocationDropOff () {
  const dropOff = document.querySelector('.js-DropOff-location').innerText

  document.querySelector('.js-DropOff-location-display')
  .innerHTML = dropOff;
}


function displayDate () {
  const pickUpDate = document.querySelector('.js-pickUp-date').value

  document.querySelector('.js-pickUp-date-display')
  .innerHTML = pickUpDate;

  console.log(pickUpDate);
}


function getValuePickupDate() {
  const calendarInput = document.getElementById('calendarInput');
  const selectedDate = calendarInput.value;

  document.querySelector('.js-pickUp-date-display')
  .innerHTML = selectedDate;
}

function getValueDropOffDate() {
  const calendarInput = document.getElementById('calendarInput1');
  const selectedDate = calendarInput.value;

  document.querySelector('.js-dropOff-date-display')
  .innerHTML = selectedDate;
}

function changeCarImageAudi () {
   const img = document.querySelector('.js-display-car-model');
   img.src = './images/model-Audi-A1.png';
}

function changeCarImageVWGolf () {
  const img = document.querySelector('.js-display-car-model');
  img.src = './images/model-VW-Golf.png';
}

function changeCarImageToyota () {
  const img = document.querySelector('.js-display-car-model');
  img.src = './images/model-toyota-img.png';
}

function changeCarImageBMW () {
  const img = document.querySelector('.js-display-car-model');
  img.src = './images/model-BMW-img.png';
}

function changeCarImageMercedes () {
  const img = document.querySelector('.js-display-car-model');
  img.src = './images/model-Mercedes-img.png';
}

function changeCarImageVWPassat () {
  const img = document.querySelector('.js-display-car-model');
  img.src = './images/model-VW-Passat.png';
}


//Sroll Function (Search Button)
function scrollToSection() {
  const section = document.getElementById('section2'); 
  section.scrollIntoView({ behavior: 'smooth' });
}


//Input Manager
function InputManager () {
  let Surname = document.querySelector('.surname').value;
  let Name = document.querySelector('.name').value;
  let Number = document.querySelector('.number')
  let Age = document.querySelector('.age').value;
  let Mail = document.querySelector('.mail').value;
  let City = document.querySelector('.city').value;
  let Code = document.querySelector('.code').value;


  if (Surname === '' ||
         Name === '' || 
         Number === '' || 
         Age === '' || 
         Mail === '' || 
         City === '' || 
         Code === '' || 
         Surname.length < 3 ||
         Name.length < 3 ||
         Number.length < 3) 
         {
          messageHTML = `
          <button class="message-btn-unvalid">Please fill out all fields and check if they are correct! </button>
          `;
          document.querySelector('.js-displayMessage').innerHTML = messageHTML;
          
        } else if (Mail.includes('@') && Mail.includes('.')) {
          messageHTML = `
          <button class="message-btn" id="message-btn">Succsessfull order! Check your mail-account ! </button>
          `;
          document.querySelector('.js-displayMessage').innerHTML = messageHTML;
        }
}
//End of Input Manage Function


//Navbar Sroll Effects
function scrollToSectionHome() {
  const section = document.querySelector('.section-header'); 
  section.scrollIntoView({ behavior: 'smooth' });
}