var leftDiameter = 20;
var rightDiameter = 20;
var indBool = 0;

function setup(){
  createCanvas(700, 500);
  background(0);
  console.log("Ready to listen to Input -->");
}

function draw(){
  background(0);

  ellipse(400,200,rightDiameter);
  ellipse(200,200,leftDiameter);

  reduceTargets();
}

function reduceTargets() {
  if (rightDiameter>0){
    rightDiameter = rightDiameter-.5;
  }
  else {
    console.log('void');
  }

  if (leftDiameter>0){
    leftDiameter = leftDiameter-.5;
  }
  else {
    console.log('void');
  }
}

function keyTyped() {
  if (key === 'a'){
    leftDiameter = leftDiameter+10;
  }
  else if (key === 'b') {
    rightDiameter = rightDiameter+10;
  }
}
