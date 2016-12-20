// String object

var hello = "Hello how are you doing";

hello = hello.toUpperCase();  // this string method converts all of the letters in the string to uppercase, remember the = operator!

hello = hello.length;    // string length property, starts off by counting the first character as 0, like an array  //

hello = hello.charAt(4);  // string charAt() method gives the character that is at the specified index 

hello = hello.replace('doing', 'today');    // replace the word doing with the word today 

hello = hello.bold();  // make all of the text bold 

hello = hello.italics();  // make text italics 

document.write(hello);
 