
var firstName = randomName();
var middleName = "middle";
var lastNameInput = document.getElementById('last-name');
var boyNames = ['Samuel', 'Robert', 'Mark', 'Ryan', 'Paul', 'Joseph', 'David', 'Jacob', 'Benjamin', 'Jonathan', 'Matthew', 'Alexander', 'Cesar', 'John', 'Patrick', 'Christopher', 'Richard', 'Stanley', 'James', 'Kyle'];
var girlNames = ['Sarah', 'Kimberly', 'Amanda', 'Emily', 'Megan', 'Hope', 'Mia', 'Caitlyn', 'Alexandra', 'Emma', 'Hayley', 'Christina', 'Nikki', 'Natalie', 'Sandy', 'Heather', 'Mallory', 'Lauren', 'Elizabeth', 'Kylie'];



function addNames(){
	var lastName = lastNameInput;
	document.getElementById("baby-name").innerHTML = firstName + ' ' + middleName + ' ' + lastName;
};

function randomName(){
	if (document.getElementById('boy').checked){
		return Math.floor(Math.random() * boyNames.length);
	} else {
		return Math.floor(Math.random() * girlNames.length);
	};
};


