

function preload (){
  boat = loadImage ('boat.png');
  map = loadImage ('map.png');
  lizard = loadImage ('lizard.png');
  palm = loadImage ('palm.png');
  moby = loadImage ('moby.png');
  crest = loadImage ('crest.png')
  flower = loadImage ('flower.png')
  fish = loadImage ('fish.png')
  
}
  function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate (0.5);
    fill(207, 238, 250);
    noStroke ();
  }
  

function draw() {
  
 
 var num = 4 ;
  
  var sideLen = windowWidth/num; // x length
  
  
  for ( var y= 0; y < windowHeight; y = y+sideLen) {
     
    for ( var x= 0; x < windowWidth; x = x + sideLen) {//row across x
  
   quad (x, y, 
        x + sideLen, y, 
        x + sideLen, y + sideLen, 
        x , y + sideLen);
    
    var pics = [boat,map, lizard, palm, moby,crest,flower];
    image (pics [int (random (0,8))], x,y);
    
   
    }     
      
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    
  }
    
  }
  
}
  
  
  

  

