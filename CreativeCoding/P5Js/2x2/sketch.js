functfunction setup() {
  createCanvas(720, 720);
  fill(207, 238, 250);
  strokeWeight(5);
}

function draw() {
  background(220);
  translate(60, 60);
  quad(0, 0, 300, 0, 300, 300, 0, 300);
  quad(0 + 300, 0, 600, 0, 600, 300, 300, 300); // increase x 300px
   quad(0 + 300, 300, 600, 300, 600, 600, 300, 600); // increase y 300px
    quad(0, 300, 300, 300, 300, 600, 0, 600); //increase y 300px
  noLoop();
}
