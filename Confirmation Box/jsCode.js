function changeStyle(){
	
	var confirmation = confirm("These changes are final");  // confirm box is similar to an alert bot but has an ok AND Cancel options for user 
	
	if(confirmation == true){ // all of the below code runs only if the user clicks on OK in the confirmation box
	
	var paragraph = document.getElementsByClassName('para');
	
	var firstParaText = paragraph[0].innerHTML;
	var secondParaText = paragraph[1].innerHTML;
	var addThem = paragraph[2].innerHTML = firstParaText + secondParaText; // third paragraph is the first two added together
	
	var firstParaText = paragraph[0].innerHTML = " ";  // change the first two paragraphs to blank to get rid of them 
	var secondParaText = paragraph[1].innerHTML = " "; 
	
	document.getElementById("test").style.visibility = "hidden"; // hide the button so user cant click on it again 
	}
}