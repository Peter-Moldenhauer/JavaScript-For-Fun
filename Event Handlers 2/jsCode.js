function changeColor(){ 
	
	var text = document.getElementById("para1").style.color = "blue";  
}

function changeBackground(){
	var text = document.getElementById("para2").style.backgroundColor = "red"; 
}

function backToNormal(){
	var text = document.getElementById("para2").style.backgroundColor = ""; 
}

function newPicture(){
	document.getElementById("image").src="banana.jpg"; 
}

function oldPicture(){
	document.getElementById("image").src="apple.jpg"; 
}