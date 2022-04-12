const getVehicle = async() =>{
    const response = await fetch("../JSON:test APIs/vehicle.json");
    // For debugging server error
    console.log(response.status);
    const data = await response.json();


    return data
}
// console.log(1);
getVehicle()
    .then(data=>{
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