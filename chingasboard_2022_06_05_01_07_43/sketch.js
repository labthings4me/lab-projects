

function preload (){
  sloop = loadImage ('sloop.png');
  map = loadImage ('map.png');
   lizard = loadImage ('lizard.png');
   fish = loadImage ('fish.png');
 
  moby = loadImage ('moby.png');
  dinghy = loadImage ('dinghy.png');
  onion = loadImage ('onion.png');
 
  
}
  function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate (0.5);
    fill("white");
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
    
    var pics = [sloop,map,moby,dinghy,onion,fish,lizard ];
    image (pics [int (random (0,7
                             ))], x,y);
    
   
    }     
      
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    
  }
    
  }
  
}
  
  
  

  

