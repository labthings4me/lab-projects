let img;

function preload (){
img = loadImage ('LGallery.gif');
}




function setup() {
  createCanvas(windowWidth, windowWidth);
fill ('yellow');



}

function draw() {

  var num = 1
var sideLen = windowWidth/num

  translate(60, 60);
  for (var y = 0; y < windowWidth; y = y+sideLen)
  for (var x = 0; x < windowWidth; x = x+sideLen) {


  ;

   image (img, 200, 300
         );
  }
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);



}
