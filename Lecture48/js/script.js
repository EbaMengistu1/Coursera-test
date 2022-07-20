// Function constructors
function Circle (radius) {
	this.radius = radius;
}
	Circle.prototype.getArea = 
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	};

var myCircle = new Circle(10); // new object();
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);



























// function test() {
// 	console.log(this);
// 	this.myName = "Yaakov";
// }
// test();
// console.log(window.myName);