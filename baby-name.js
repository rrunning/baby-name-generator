var boyNames = ['Samuel', 'Robert', 'Mark', 'Ryan', 'Paul', 'Joseph', 'David', 'Jacob', 'Benjamin', 'Jonathan', 'Matthew', 'Alexander', 'Cesar', 'John', 'Patrick', 'Christopher', 'Richard', 'Stanley', 'James', 'Kyle'];
var girlNames = ['Sarah', 'Kimberly', 'Amanda', 'Emily', 'Megan', 'Hope', 'Mia', 'Caitlyn', 'Alexandra', 'Emma', 'Hayley', 'Christina', 'Nikki', 'Natalie', 'Sandy', 'Heather', 'Mallory', 'Lauren', 'Elizabeth', 'Kylie'];

function addNames(){
	var arrayGoodness = getNameArray();
	if (!arrayGoodness){
		alert('Please select whether you want to see boy names or girl names.')
		return;
	}
	var lastNameInput = document.getElementById('last-name').value;
	if(lastNameInput == ""){
		alert('Please enter a last name.');
		return;
	}
	var lastName = lastNameInput;
	var firstName = random(arrayGoodness);
	var middleName = random(arrayGoodness);
	document.getElementById("baby-name").innerHTML = firstName + ' ' + middleName + ' ' + lastName;
	
	
}

function random(ray){
	return ray[Math.floor(Math.random() * ray.length)]
}

function getNameArray(){
	if (document.getElementById('boy').checked){
		return boyNames;
	} else if (document.getElementById('girl').checked){
		return girlNames;
	} else {
		return;
	}

}

function changeColor(){
	if(document.getElementById('boy').checked){
		document.body.style.backgroundColor = "#80bfff";
	} else if(document.getElementById('girl').checked){
		document.body.style.backgroundColor = "#ffb3d9"; 
	} else {
		return;
	}
}





