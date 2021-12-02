let img;

function preload () {
  img = loadImage ('assets/newmoby.png');
}


function setup() {
  createCanvas(720, 720);
  fill(207, 238, 250);
  strokeWeight(0);
}

function draw() {
  background ('yellow');

  translate (60,60);




  for ( var y= 0; y < 600; y = y+ 300) {

    for ( var x= 0; x <600; x = x+ 300)//row across x
    image (img, x,y);







  }



}


  noLoop();
}
