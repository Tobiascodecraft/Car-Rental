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
  img.src = '/images/model-toyota-img.png';
}

function changeCarImageBMW () {
  const img = document.querySelector('.js-display-car-model');
  img.src = '/images/model-BMW-img.png';
}

function changeCarImageMercedes () {
  const img = document.querySelector('.js-display-car-model');
  img.src = '/images/model-Mercedes-img.png';
}

function changeCarImageVWPassat () {
  const img = document.querySelector('.js-display-car-model');
  img.src = '/images/model-VW-Passat.png';
}



//End of Book ride section


//Sroll Function (Search Button)

function scrollToSection() {
  const section = document.getElementById('section2'); 
  section.scrollIntoView({ behavior: 'smooth' });
}


//Clear Personal Information Section






function clearInputs() {
  const inputFields = document.querySelectorAll('input[type="text"]');

  inputFields.forEach(input => {
    input.value = '';
  });

  if (inputFields.length > 0) {
    inputFields[0].focus();
  }

}

function removeMessage () {
 document.querySelector('.message-btn').remove();
}

function displayMessage () {
  messageHTML = `
  <button class="message-btn" id="message-btn">Succsessfull order! Check your mail-account !
  <span onclick="removeMessage ()"> <i class="fa-solid fa-x"></i></span></button>
  `;

 document.querySelector('.js-displayMessage').innerHTML = messageHTML;
}

//Navbar Sroll Effects


function scrollToSectionHome() {
  const section = document.querySelector('.section-header'); 
  section.scrollIntoView({ behavior: 'smooth' });
}