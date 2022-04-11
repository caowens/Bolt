const getVehicle = async() =>{
    const response = await fetch("../JSON:test APIs/vehicle.json");
    // For me
    console.log(response.status);
    const data = await response.json();

    
    return data
}

getVehicle()