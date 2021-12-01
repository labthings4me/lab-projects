function setup() {
  createCanvas(windowWidth, windowWidth);
  fill(207, 238, 250);
  strokeWeight(1);
}

function draw() {
  
 
 var num = 20 ;
  var sideLen = windowWidth/num // x length
  
  
  for ( var y= 0; y < windowWidth; y = y+ sideLen) {
    
    for ( var x= 0; x <windowWidth; x = x+ sideLen)//row across x
  {
   quad (x, y, 
        x + sideLen, y, 
        x + sideLen, y + sideLen, 
        x , y + sideLen);
    
    
    
    
    
    
  }
  
  
  
}
  
  
  noLoop();
}
