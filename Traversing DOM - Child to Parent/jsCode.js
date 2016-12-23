function changeText(){ 
	var child = document.getElementById('p1');  // variable to the child - 1st p node 
	
	var parent = child.parentNode;  // variable to the parent of the child - div element 
	// var parent = child.parentElement; // can also use this but the parent node and parent element are the same thing 
	
	parent.style.color = "blue"; // all of the child paragraphs will turn blue because each child inherits from the parent 
}
