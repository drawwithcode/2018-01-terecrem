function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(mouseX,220,220,95);

	//Neck
	line(mouseX, 285, mouseX, 345);
strokeWeight(1)
stroke(0,0,0)


	//Wheel
		fill(mouseX,38,90)
	ellipse(mouseX, 465, 70, 70,60);

	fill(mouseX,180,160)
rect(mouseX-50, 325, 100, 140);

fill(mouseX,149,137)
rect(mouseX-50, 325, 100, 20);

		fill(mouseX,38,90)
	ellipse(mouseX, 240, 90, 90);

	fill(mouseX,38,90)
ellipse(mouseX-60, 260, 10, 10);

fill(mouseX,38,90)
ellipse(mouseX-65, 240, 5, 5);

fill(mouseX,38,90)
ellipse(mouseX+55, 200, 12, 12);

//occhi neri

fill(0,0,0)
ellipse(mouseX+25, 230, 3, 3);

fill(0,0,0)
ellipse(mouseX+18, 230, 3, 3);



}
