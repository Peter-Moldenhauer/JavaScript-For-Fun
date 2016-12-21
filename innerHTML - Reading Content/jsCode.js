function changeStyle(){
	
	var paragraph = document.getElementsByClassName('para');
	
	var firstParaText = paragraph[0].innerHTML;
	var secondParaText = paragraph[1].innerHTML;
	var addThem = paragraph[2].innerHTML = firstParaText + secondParaText; // third paragraph is the first two added together
	
	var firstParaText = paragraph[0].innerHTML = " ";  // change the first two paragraphs to blank to get rid of them 
	var secondParaText = paragraph[1].innerHTML = " "; 
}