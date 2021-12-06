let img;

function preload (){
img = loadImage ('HomeGallery.gif');
}




function setup() {
  createCanvas(windowWidth, windowWidth);
strokeWeight (30);
stroke ('blue')
 

}

function draw() {
  
  var num = 1
var sideLen = windowWidth/num
  
  translate(60, 60);
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
