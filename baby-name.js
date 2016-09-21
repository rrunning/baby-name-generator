
var firstName = "First";
var middleName = "Middle";
var lastNameInput = document.getElementById('last-name');


function addNames(){
	var lastName = lastNameInput.value;
	document.getElementById("baby-name").innerHTML = firstName + ' ' + middleName + ' ' + lastName;
};


