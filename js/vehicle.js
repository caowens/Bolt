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
               <h5 class="card-title">${car.Make}</h5>
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             </div>
           </div>
         </div>`

         replacer+=text;
       })


       carddata.innerHTML = replacer;
    })