var troll = {             // custom object created 
	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function(){
		document.write("YUM YUM!");
	}
};

troll.stomachFull = false;   // change value of object property

if(troll.stomachFull == true){   
	troll.eat();
}else{
	document.write("Not eating");
}
 
troll.hair2 = "red";        // add a new property to object 

delete troll.hair2;         // delete an object property with the delete keyword 

troll.hair2;                // add a new property to object WITHOUT assigning a value to it 