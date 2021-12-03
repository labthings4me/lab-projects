

function preload (){
  boat = loadImage ('boat.png');
  map = loadImage ('map.png');
  lizard = loadImage ('lizard.png');
  moby = loadImage ('moby.png');
  fish = loadImage ('fish.png');
  
}
  function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate (0.5);
    fill("black");
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
    
    var pics = [boat,map, lizard,moby,fish];
    image (pics [int (random (0,5
                             ))], x,y);
    
   
    }     
      
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    
  }
    
  }
  
}
  
  
  

  

