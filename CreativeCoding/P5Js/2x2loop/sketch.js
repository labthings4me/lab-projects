let img;

function preload () {
  img = loadimage ('assets/newmoby.png');
}



function setup() 

function draw() {



 var num = 10 ;
  var sideLen = windowWidth/num // x length


  for ( var y= 0; y < windowHe; y = y+ sideLen) {

    for ( var x= 0; x <windowWidth; x = x+ sideLen)//row across x
  {
   image (img, x,y);





  }



}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

  noLoop();
}
