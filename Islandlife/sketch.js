function setup() {
  createCanvas(800, 800);
   
  stroke (255,165,0); 
  strokeWeight (5);
  noFill (),
    frameRate (1)
  noLoop()
}

function draw() {
   

  
  stroke (random(100,100,), random (100,100), random (255,100));
  strokeWeight( 5),
  
   //roof
  triangle(100, 200, 300,200, 200, 75);
  triangle (135,185, 200,100,265,185)
  triangle (165,170, 200,120,235,170)
  
  //house
  quad (100,220, 300,220,300,350,100,350 )
  quad (120,240, 280,240,280,330,120,330 )
    quad (140,260, 260,260,260,310,140,310)
    
          //tree
  quad (360,220, 370,220, 380,350, 340,350)
  line(365, 140, 365, 200);
   line(340, 140, 365, 200);
  line(385, 140, 365, 200);
   line(320, 160, 365, 200);
   line(405, 160, 365, 200);
         
         
}