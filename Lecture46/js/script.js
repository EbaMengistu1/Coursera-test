// Function are Firsts-Class Data Types
// Function ARE objects
function multiply(x, y) {
	return x * y;
}
multiply.version = "V.1.0.0";
console.log(multiply.version);

// Funtion factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing function as arguments
function doOperation(x, operation) {
	return operation(x);
}
var result = doOperation(5, multiplyBy3);
console.log(result);
result = doOperation(100, doubleAll);
console.log(result);
 





















