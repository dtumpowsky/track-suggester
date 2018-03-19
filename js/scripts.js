var add = function(number1, number2){
	return number1 + number2;
}

var subtract = function(number1, number2){
	return number1 - number2;
}

var multiply = function(number1, number2){
	return number1 * number2;
}

var divide = function(number1, number2){
	return number1 / number2;
}

var number1 = parseInt(prompt("Enter number"));
var number2 = parseInt(prompt("Enter another number"));

alert(add(number1, number2));


//BMI Calculator

var bmi = function(height, weight){
	return (weight / (height^2));
}

var height = prompt("How tall are you? (in)");
var weight = prompt("How much do you weigh?");

var kg = weight * 2.2;
var cm = height * 2.54;

alert(bmi(cm, kg));
