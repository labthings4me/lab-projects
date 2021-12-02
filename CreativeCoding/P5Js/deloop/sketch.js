let img;

function preload () {
  img = loadImage ('assets/newmoby.png');
}


function setup() {
  createCanvas(windowWidth, windowWidth);
  fill(207, 238, 250);
  strokeWeight(0);
}

function draw() {
  background ('yellow');

  translate (60,60);


 var num = 2 ;
  var sideLen = windowWidth/num // x length


  for ( var y= 0; y < windowWidth; y = y+ sideLen) {

    for ( var x= 0; x <windowWidth; x = x+ sideLen)//row across x
    image (img, x,y);







  }



}


  noLoop();
}
