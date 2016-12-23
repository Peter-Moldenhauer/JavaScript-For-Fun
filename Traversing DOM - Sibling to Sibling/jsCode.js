function changeText(){ 
	var para2 = document.getElementById('p2');
	var sibling = para2.nextElementSibling;  // this goes to the right to pick up the third paragraph 
	sibling.style.color = "blue"; 
	
	var sibling2 = para2.previousElementSibling;  // this goes to the left to pick up the first paragraph 
	sibling2.style.color = "red"; 
}
