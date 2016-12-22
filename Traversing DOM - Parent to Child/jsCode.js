function changeText(){ 
	var parent = document.getElementById('main');  // get ahold of the parent element so you can manipulate the child elements 
	
	var child = parent.childNodes[3];   // create a variable to hold the child element, and select the child that you want with [] 
	// note the childNodes property that builds a node list of all the nodes under the parent element 
	// note that there are nodes for while space that you have to take into consideration!!! (0 position will start off with whitespace) 
	
	child.style.color = "blue"; 
	
	//Note if you want to just modify the first child ELEMENT not node then you can just do this...
	//var child = parent.firstElementChild; 
	// can also use lastElementChild as well
}
