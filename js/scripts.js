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

var bmi = function(weight, height){
	return (weight / (height^2));
}

var height = prompt("How tall are you? (in)");
var weight = prompt("How much do you weigh?");

var kg = weight * 2.2;
var cm = height * 2.54;

alert(bmi(kg, cm));


// Temperature Converty C -> F//


var celsius = prompt("What is the temperature Celsius?")

var conversion = function(inputTemperatureC) {
	return (inputTemperatureC * (9/5) + 32);
}

alert(conversion(celsius) + " degrees fahrenheit");


// Temperature Converty F -> C//

var fahrenheit = prompt("What is the temperature Fahrennheit?");

var fahrenConvert = function(inputTemperatureF) {
  return ((inputTemperatureF - 32) / (9/5));
}

alert(fahrenConvert(fahrenheit) + " degrees celsius");

alert(conversion(celsius) + " degrees fahrenheit");
