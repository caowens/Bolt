const carddata = document.querySelector("#data");
cars = []

const getVehicle = async() =>{
    const response = await fetch("../JSON:test APIs/vehicle.json");
    // For debugging server error
    console.log(response.status);
    const data = await response.json();


    return data
}
// console.log(1);

updateCars = (data) =>{
  const cardata = data;
  
  replacer = ""

  cardata.forEach(car=>{
      text = `<div class="col">
      <div class="card">
        <img src="${car.Img}" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="car-make"><h5 class="card-title">${car.Make}</h5><h7 class="card-title">${car.Model}</h7></div>
          <p class="card-text"><ul>
          <li>0-60: ${car["0-60"]}s</li>
          <li>Quarter Mile: ${car["Quarter Mile"]}s</li>
          </ul></p>
        </div>
      </div>
    </div>`

    replacer+=text;
  })


  carddata.innerHTML = replacer;
}
getVehicle()
    .then(data=>{
<<<<<<< HEAD
      cars = data;
      updateCars(data);
})



const searchBtn = document.querySelector('#btn-search');

function filterByName() {
  const searchInput = document.querySelector('#search-input').value;
  let filteredArray = [];
  if(searchInput && searchInput.length){
      cars.forEach((car) => {
          if(car.Make.toLowerCase()
              .startsWith(searchInput.toLowerCase()))
              filteredArray.push(car);
      });
  }else {
      return cars;
      console.log("ran")
  }
  console.log({searchInput});
  return filteredArray;
}

searchBtn.addEventListener('click',(e)=>{
  console.log('Search button clicked...');
  let filteredList = filterByName();
  updateCars(filteredList);
});
=======
       const cardata = data;
       const carddata = document.querySelector("#data");
    
       replacer = ""

       cardata.forEach(car=>{
           text = `<div class="col">
           <div class="card">
             <img src="${car.Img}" class="card-img-top" alt="...">
             <div class="card-body">
               <div class="car-make"><h5 class="card-title">${car.Year} ${car.Make} ${car.Model}</h5></div>
               <p class="card-text"><ul>
               <li>0-60: ${car["0-60"]}s</li>
               <li>Quarter Mile: ${car["Quarter Mile"]}s</li>
               </ul></p>
             </div>
           </div>
         </div>`

         replacer+=text;
       })


       carddata.innerHTML = replacer;
    })
>>>>>>> e19224bd0a459ce72e13d32c4ae989e24a25e3a4
