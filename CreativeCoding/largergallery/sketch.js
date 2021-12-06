let img;

function preload (){
img = loadImage ('newHomeGallery.gif');
}




function setup() {
  createCanvas(windowWidth, windowWidth);
fill ('black');



}

function draw() {

  var num = 1
var sideLen = windowWidth/num

  translate(20, 20);
  for (var y = 0; y < windowWidth; y = y+sideLen)
  for (var x = 0; x < windowWidth; x = x+sideLen) {


  quad (x, y,
    x+sideLen, y,
    x +sideLen, y+sideLen,
    x, y+sideLen);

   image (img, 200, 300
         );
  }



}
