

function preload (){
  boat = loadImage ('boat.png');
  map = loadImage ('map.png');
  lizard = loadImage ('lizard.png');
  palm = loadImage ('palm.png');
  moby = loadImage ('moby.png');
  
  
}
  function setup() {
    createCanvas(windowWidth, windowWidth);
    frameRate (0.5);
    fill(207, 238, 250);
    noStroke ();
  }
  

function draw() {
  
 
 var num = 4 ;
  
  var sideLen = windowWidth/num; // x length
  
  
  for ( var y= 0; y < windowWidth; y = y+sideLen) {
     
    for ( var x= 0; x < windowWidth; x = x + sideLen) {//row across x
  
   quad (x, y, 
        x + sideLen, y, 
        x + sideLen, y + sideLen, 
        x , y + sideLen);
    
    var pics = [boat,map, lizard, palm, moby];
    image (pics [int (random (0,5))], x,y);
    
    
    
    
  }
    
  }
  
}
  
  
  

  

