function changeStyle(){
	
	var paragraph = document.getElementsByTagName("p");
	
	var changeParaText = paragraph[0].style.fontStyle = "italic";
	var changeParaText = paragraph[1].style.fontStyle = "italic";
	var changeParaText = paragraph[2].style.fontStyle = "italic";
	var changeParaText = paragraph[3].style.fontStyle = "italic";
	
	// instead of writing out each of the 4 lines of code above, you can do the same thing in a for loop below:
	
	/*
	
	for (var i = 0; i < paragraph.length; i++){
		paragraph[i].style.fontStyle = "italic";
	}
	
	*/
}