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

  rect(50, 100, 100, 50);
  rect(250, 100, 100, 50);

  ellipse(300,300,rightDiameter);
  ellipse(100,300,leftDiameter);

  reduceTargets();
}

function reduceTargets() {
  if (mouseIsPressed){
    console.log('void')
  }
  else if (rightDiameter>0){
    rightDiameter = rightDiameter-.5;
  }
  else {
    console.log('void');
  }

  if (mouseIsPressed){
    console.log('void')
  }
  else if (leftDiameter>0){
    leftDiameter = leftDiameter-.5;
  }
  else {
    console.log('void');
  }
}

function mouseClicked() {
  if(mouseX>50&&mouseX<150&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_1");
    leftDiameter = leftDiameter+10;
  }

  if(mouseX>250&&mouseX<350&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_2");
    rightDiameter = rightDiameter+10;
  }
}
