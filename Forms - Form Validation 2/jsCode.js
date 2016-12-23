function validateTextbox(){
	var box = document.getElementById("name");
	var box2 = document.getElementById("address");
	var box3 = document.getElementById("phone");
	
	if(box.value == "" || box2.value == ""){
		alert("The field cannot be blank");
		box.focus();   // focus on specific box element that was in error to but a red box around it for the user 
		box.style.border = "solid 3px red"; 
		
		return false;  // stop the form from being submitted when text field is blank 
	}
	
	if(box3.value.length < 5){
		alert("Please enter at least 5 digits for phone number");
		
		return false;
	}
}
