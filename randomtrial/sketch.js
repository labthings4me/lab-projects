/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
var pW = 18
var pH = 24
function setup() {
  createCanvas(pW * 72, pH *72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background (230);
}

function draw() {
  for (var y=0; y<1000; y=y+200)
  for (var x= 0; x<1000; x=x+300)

   //quad (x, y, x+300,y+200, x,y+200,x +300,y +200 )
  //for (var y=0; y<800; y=y+300)

  //for (var x= 0; x<800; x=x+100)

 //triangle(0, 100, 200,100, 100, 10);

 for (var x= 0; x<800; x=x+100)
for (var y=0; y<800; y=y+100)

  quad (x+290,y+120, x+310,y+120, x+320,y+240, x+280,y+240)

  for (var x= 0; x<800; x=x+100)
  for (var y=0; y<800; y=y+100)

 line(x+200, y+100, x+200, y+40)

   for (var x= 0; x<800; x=x+100)
   for (var y=0; y<800; y=y+100)

  line(x+200, y+100, x+280, y+40);

  for (var x= 0; x<800; x=x+100)
  for (var y=0; y<800; y=y+100)

 line(x+200, y+100, x+330, y+ 40);

 for (var x= 0; x<800; x=x+100)
 for (var y=0; y<800; y=y+100)

 line(x+200, y+100, x+260, y+40);

 //line (x+200,100,x+240,40)

 //line (x+200,100, x+350,40)

  //save("mySVG.svg"); // give file name
  //print("saved svg");
  noLoop(); // we just want to export once
}
