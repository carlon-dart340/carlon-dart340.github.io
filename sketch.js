let xpos = 0;
let ypos = 0;
let strokeweight=3;
function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(100);

 
  stroke(0, 160, 0);
  strokeWeight(strokeweight);
  line(250, 150, 150, 100);

  
  fill(255, 100, 0);
  stroke(0, 100);
  strokeWeight(strokeweight);

  ellipse(250, 250, 400, 200);
  ellipse(250, 250, 300, 200);
  ellipse(250, 250, 200, 200);
  ellipse(250, 250, 100, 200);
  strokeweight= strokeweight + 1
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(100);

 
  stroke(0, 160, 0);
  strokeWeight(strokeweight);
  line(250, 150, 150, 100);

  
  fill(255, 100, 0);
  stroke(0, 100);
  strokeWeight(strokeweight);

  ellipse(250, 250, 400, 200);
  ellipse(250, 250, 300, 200);
  ellipse(250, 250, 200, 200);
  ellipse(250, 250, 100, 200);
  strokeweight= strokeweight + .10
}
