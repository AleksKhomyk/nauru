// function ourFirstFunction (firstName) {
// 	var firstName = "Alyona";
// 	alert(firstName);

// }

// ourFirstFunction("Alyona");
// var firstNumber = +prompt("введите число" , "")
// var secondNumber = +prompt("введите ещё число" , "")
// function ourSecondFunction(number1,number2) {
// 	alert(number1+number2);
// }
// ourSecondFunction(firstNumber,secondNumber);
// ourSecondFunction(9,10);

// var age = +prompt("age" , "");

// function checkAge (yourAge) {
// 	if (yourAge>18) {
// 		return "hi"
// 	} else {
// 		return confirm("ты уверен?");

// 	}
// }

// alert(checkAge(age));


var firstNumber = +prompt("введите число" , "")
var secondNumber = +prompt("введите ещё число" , "")
function bigger(number1,number2){
	if(number1>number2) {
		return number1 ;
	}else {
		return number2;
	} 
}

alert(bigger(firstNumber,secondNumber));