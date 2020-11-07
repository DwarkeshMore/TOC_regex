 nameArray = [];
 emailArray = [];
 phoneArray = [];
 passArray = [];


 function registerclick() {
 	document.getElementById("register").style.display = "block";
 	document.getElementById("carosal").style.display = "none";
 	document.getElementById("table").style.display = "none";
 }

 function tableClick() {
 	document.getElementById("table").style.display = "block";
 	document.getElementById("carosal").style.display = "none";
 	document.getElementById("register").style.display = "none";
 	buildTable();
 }

 function registration() {
 	var name = document.forms["RegForm"]["Name"];
 	var email = document.forms["RegForm"]["EMail"];
 	var phone = document.forms["RegForm"]["Telephone"];
 	var agree = document.forms["RegForm"]["agree"];
	var pass = document.forms["RegForm"]["pass"];
	var age = document.forms["RegForm"]["Age"];
	var invite = document.forms["RegForm"]["Invite"];
	var password = document.forms["RegForm"]["Password"];
	var cpassword = document.forms["RegForm"]["ConfirmPassword"];

	const name_regex = /^([a-zA-Z]{2,20}[ ][a-zA-Z]{2,20}){1,3}$/;
 	if (!name_regex.test(name.value)) {
 		window.alert("Please enter your FULL Name.");
 		name.focus();
 		return false;
 	}

	 var emailtest = /^[a-z A-z][a-zA-Z0-9]{0,20}([\. \_ \-][a-zA-Z0-9]{1,20}){0,5}[@][a-zA-Z][a-zA-Z0-9]{1,20}([\.][a-zA-Z0-9]{2,10}){1,5}$/;
 	if (!emailtest.test(email.value)) {
 		window.alert("Please enter a valid e-mail address.");
 		email.focus();
 		return false;
 	}
	 const regex_phone = /^[6-9][0-9]{9}$/;
 	if (!regex_phone.test(phone.value)) {
		window.alert("Please enter a valid 10 digit mobile number.");
		phone.focus();
		return false;
	}
	 
	const age_regex2 = /^(1[6-9]|[2-9][0-9])$/;
	if (!age_regex2.test(age.value)) {
	   window.alert("Please enter a valid Age above 16");
	   age.focus();
	   return false;
   }

   	 
	const invite_regex = /^[#][0-9]{6}$/;
	if (invite.value != "" && !invite_regex.test(invite.value)) {
	   window.alert("Please enter a valid 6 digit Invite code starting with #");
	//    Window.alert(invite.value);
	   invite.focus();
	   return false;
   }

   const password_regex_strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
   
   if (!password_regex_strong.test(password.value)) {
	window.alert("Your password is of MEDIUM strength.\n Password should contain atleast 8 characters with atleast one uppercase, lowercase, number and symbol");
	password.focus();
	return false;
}


 	if (!agree.checked) {
 		window.alert("Please agree to the Terms and Conditions");
 		phone.focus();
 		return false;
 	}

 	nameArray.push(name.value);
 	emailArray.push(email.value);
 	phoneArray.push(phone.value);
 	passArray.push(pass.value);
 	

 	return registrationAccepted();
 }

 function registrationAccepted() {
	 window.alert('Thank You! You have been registered!');
	 return 1;
 }

 function buildTable() {

 	for (var i = 0; i < nameArray.length; i++) {
 		var table = document.getElementById("tables");
 		var row = table.insertRow(-1);
 		var cell1 = row.insertCell(0);
 		var cell2 = row.insertCell(1);
 		var cell3 = row.insertCell(2);
 		var cell4 = row.insertCell(3);
 		var cell5 = row.insertCell(4);
 		var cell6 = row.insertCell(5);


 		cell1.innerHTML = i + 1;
 		cell2.innerHTML = nameArray[i];
 		cell3.innerHTML = emailArray[i];
 		cell4.innerHTML = phoneArray[i];
 		cell5.innerHTML = passArray[i];

 	}
 }
