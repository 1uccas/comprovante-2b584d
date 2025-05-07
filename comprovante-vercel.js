

function showposition(position){
    console.log("Latitude: " + position.coords.latitude + 
    "\nLongitude: " + position.coords.longitude);
}

function error(){
    console.log("Localização não permitida.");
}

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showposition, error)
}else{
    console.log("Não suportado por este navegador.")
}

/* DONE */

