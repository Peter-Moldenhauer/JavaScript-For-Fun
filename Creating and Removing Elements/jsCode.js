function newParagraph(){ 
	
	// This code create a heading for the new paragraph 
	var elementH = document.createElement("h2");  // child element (h2 heading) that will go into the parent main (div) element 
	
	var main = document.getElementById("main");   // paraent (div) element that will contain the new child (p) element
	
	main.appendChild(elementH);   // append (add) the child element to the parent element
	
	// create a text node to add new paragraph text - Note: do not add [ENTER] to put text on new lines here 
	var textH = document.createTextNode("Heading for the new paragraph"); 
	
	elementH.appendChild(textH); // append (add) the child text node to the new parent (h2) node 
	
	
	
	
	// The code below creates a new paragraph 
	var element = document.createElement("p");   // child element that goes into the parent main element 
	
	//var main = document.getElementById("main");   // dont need this because we already created it above for the h2 header to be added 
	
	main.appendChild(element);   // append (add) the child element to the parent element 
	
	// create a text node to add new paragraph text - Note: do not add [ENTER] to put text on new lines here 
	var text = document.createTextNode("Third paragraph that is new!!! This third paragraph can only be seen when the user clicks on the button");
		
	element.appendChild(text); // append (add) the child text node to the new parent (p) node 
}


function removeElements(){
	var elementH = document.getElementsByTagName("h2")[1];  // first remove the h2 element and then remove the p element, note position [2] (third heading)
	
	var parent = elementH.parentNode;  // the parent node of elementH is the div node 
	
	parent.removeChild(elementH); // remove the h2 element 
	
	
	var elementP = document.getElementsByTagName("p")[2];  // now begin to remove the p element 
	
	//var parent = elementP.parentNode;  // dont need this line because we already created the object in the secion above for the h2 element  
	
	parent.removeChild(elementP); // remove the third p element 
}