var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bod");

color1.addEventListener("input", function() {
	changeBackground();
})
color2.addEventListener("input", function() {
	changeBackground();
})

function changeBackground() {
	body.style.background = "linear-gradient(" 
	+ color1.value + ", " + color2.value + ")";
	
	css.textContent = "Color 1: " + color1.value 
	+ " ||  Color 2: " + color2.value;
}


