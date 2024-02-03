function changeAudi() {
    const img = document.querySelector('.js-car');
    img.src = './images/model-Audi-A1.png';


    let table = document.querySelector('.js-table');
    let newtable = `
    <table id="customers">
    <tr>
      <th colspan="2"><span id="table-model-price">$45</span> / rent per day</th>
    </tr>
    <tr>
      <td>Model</td>
      <td>Audi</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>A1</td>
    </tr>
    <tr>
      <td>Year</td>
      <td>2012</td>
    </tr>
    <tr>
      <td>Doors</td>
      <td>4</td>
    </tr>
    <tr>
      <td>AC</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Transmission</td>
      <td>Manual</td>
    </tr>
    <tr>
      <td>Fuel</td>
      <td>Gasoline</td>
    </tr>
  </table>
  <button id="reserve-now">Reserve now</button>
    `;
 
    table.innerHTML = newtable;
}



function changeGolf() {
    const img = document.querySelector('.js-car');
    img.src = './images/model-VW-Golf.png';

   let table = document.querySelector('.js-table');
   let newtable = `
   <table id="customers">
   <tr>
     <th colspan="2"><span id="table-model-price">$37</span> / rent per day</th>
   </tr>
   <tr>
     <td>Model</td>
     <td>Golf 6</td>
   </tr>
   <tr>
     <td>Mark</td>
     <td>Volkswagen</td>
   </tr>
   <tr>
     <td>Year</td>
     <td>2008</td>
   </tr>
   <tr>
     <td>Doors</td>
     <td>4</td>
   </tr>
   <tr>
     <td>AC</td>
     <td>Yes</td>
   </tr>
   <tr>
     <td>Transmission</td>
     <td>Manual</td>
   </tr>
   <tr>
     <td>Fuel</td>
     <td>Diesel</td>
   </tr>
 </table>
 <button id="reserve-now">Reserve now</button>
   `;

   table.innerHTML = newtable;
}



function changeToyota() {
  const img = document.querySelector('.js-car');
  img.src = './images/model-toyota-img.png';

 let table = document.querySelector('.js-table');
 let newtable = `
 <table id="customers">
 <tr>
   <th colspan="2"><span id="table-model-price">$30</span> / rent per day</th>
 </tr>
 <tr>
   <td>Model</td>
   <td>Camry</td>
 </tr>
 <tr>
   <td>Mark</td>
   <td>Toyota</td>
 </tr>
 <tr>
   <td>Year</td>
   <td>2006</td>
 </tr>
 <tr>
   <td>Doors</td>
   <td>4</td>
 </tr>
 <tr>
   <td>AC</td>
   <td>Yes</td>
 </tr>
 <tr>
   <td>Transmission</td>
   <td>Automatic</td>
 </tr>
 <tr>
   <td>Fuel</td>
   <td>Hybrid</td>
 </tr>
</table>
<button id="reserve-now">Reserve now</button>
 `;

 table.innerHTML = newtable;
}




function changeBMW() {
  const img = document.querySelector('.js-car');
  img.src = './images/model-BMW-img.png';

  let table = document.querySelector('.js-table');
  let newtable = `
  <table id="customers">
  <tr>
    <th colspan="2"><span id="table-model-price">$42</span> / rent per day</th>
  </tr>
  <tr>
    <td>Model</td>
    <td>320</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>BMW</td>
  </tr>
  <tr>
    <td>Year</td>
    <td>2012</td>
  </tr>
  <tr>
    <td>Doors</td>
    <td>4</td>
  </tr>
  <tr>
    <td>AC</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Transmission</td>
    <td>Manual</td>
  </tr>
  <tr>
    <td>Fuel</td>
    <td>Diesel</td>
  </tr>
 </table>
 <button id="reserve-now">Reserve now</button>
  `;
 
  table.innerHTML = newtable;
}


function changeMercedes() {
  const img = document.querySelector('.js-car');
  img.src = './images/model-Mercedes-img.png';

 let table = document.querySelector('.js-table');
 let newtable = `
 <table id="customers">
 <tr>
   <th colspan="2"><span id="table-model-price">$56</span> / rent per day</th>
 </tr>
 <tr>
   <td>Model</td>
   <td>Benz GLK</td>
 </tr>
 <tr>
   <td>Mark</td>
   <td>Mercedes</td>
 </tr>
 <tr>
   <td>Year</td>
   <td>2006</td>
 </tr>
 <tr>
   <td>Doors</td>
   <td>4/5</td>
 </tr>
 <tr>
   <td>AC</td>
   <td>Yes</td>
 </tr>
 <tr>
   <td>Transmission</td>
   <td>Manual</td>
 </tr>
 <tr>
   <td>Fuel</td>
   <td>Diesel</td>
 </tr>
</table>
<button id="reserve-now">Reserve now</button>
 `;

 table.innerHTML = newtable;
}



function changeVWpassat() {
  const img = document.querySelector('.js-car');
  img.src = './images/model-VW-Passat.png';

 let table = document.querySelector('.js-table');
 let newtable = `
 <table id="customers">
 <tr>
   <th colspan="2"><span id="table-model-price">$25</span> / rent per day</th>
 </tr>
 <tr>
   <td>Model</td>
   <td>Passat CC</td>
 </tr>
 <tr>
   <td>Mark</td>
   <td>Volkswagen</td>
 </tr>
 <tr>
   <td>Year</td>
   <td>2008</td>
 </tr>
 <tr>
   <td>Doors</td>
   <td>4/5</td>
 </tr>
 <tr>
   <td>AC</td>
   <td>Yes</td>
 </tr>
 <tr>
   <td>Transmission</td>
   <td>Automatic</td>
 </tr>
 <tr>
   <td>Fuel</td>
   <td>Gasoline</td>
 </tr>
</table>
<button id="reserve-now">Reserve now</button>
 `;

 table.innerHTML = newtable;
}



