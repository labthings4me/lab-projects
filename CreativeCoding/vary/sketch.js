

let gif;

function preload (){
  gif = loadImage ('Lizard.gif');
}

function setup() { //runs once
  createCanvas(windowWidth, windowHeight);
  fill(206,250.5);
  strokeWeight(1);
}

function draw() {
background (206,250,5);

translate(-100, -100)

var num = 8; //variable for the number of squares in the array
var sideLen = windowWidth/num;//variable for the side lenth of each square

  for (var y = 0; y < 2*windowHeight; y = y + sideLen) {//loop to create rows in the y direction
     for (var x = 0; x < 2*windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction0
    image(gif, x, y, windowWidth*.9/num, windowWidth*.9/num);


  }
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
