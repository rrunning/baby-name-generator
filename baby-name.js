/* onclick -> First Name and Middle Name generated
		-> Last name is pulled from input field */
var firstName = "First";
var middleName = "Middle";
var lastNameInput = document.getElementById('last-name');


function addNames(){
	var lastName = lastNameInput.value;
	document.getElementById("baby-name").innerHTML = firstName + ' ' + middleName + ' ' + lastName;
};


