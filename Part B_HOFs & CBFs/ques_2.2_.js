vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)

function vehicleInfo(vehicleCategory, callbackfn){
    callbackfn(vehicleCategory);
}

function displayCar(){
    console.log("This is Car")
}

function displayTruck(){
    console.log("This is Truck")
}

function displayBike(){
    console.log("This is Bike")
}

