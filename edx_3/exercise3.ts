
var pets: string[] = ["fido", "spot", "seeker"];
var myPets: string;

pets.forEach( function (concat){
	myPets = myPets + concat + ", ";
});

document.body.innerHTML = "My pets are " + " " + pets;
