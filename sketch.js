

var distance,tri;

var sX = screen.width/2;
var sY = screen.height/2;
var mPosObj;
var touchPoint1,TPFake1;
var button;

var a2,b2,c2;

var p1X,p1Y,p2X,p2Y,p3X,p3Y;



function setup() {


createCanvas(screen.width,screen.height);

 p1X = sX;
 p1Y = sY;
 p2X = sX/2;
 p2Y = sY;
 p3X = sX;
 p3Y = sY/2 

 button = createButton('RESET TRIANGLE (INCASE OF GLITCH)');
 button.position(sX+100,sY/6);
 button.size(100,100)
 button.mousePressed(reset);

mPosObj = createSprite(mouseX,mouseY,20,20);
mPosObj.shapeColor = color(0,0,0,0)


touchPoint1 = createSprite();

touchPoint2 = createSprite();

touchPoint3 = createSprite();

TPFake1 = createSprite(touchPoint1.x,touchPoint1.y,100,100);
TPFake1.shapeColor = color(0,0,0,0);

TPFake2 = createSprite(touchPoint2.x,touchPoint2.y,100,100);
TPFake2.shapeColor = color(0,0,0,0);

TPFake3 = createSprite(touchPoint3.x,touchPoint3.y,100,100);
TPFake3.shapeColor = color(0,0,0,0);



}
function isTouching(O1,O2)
{
  if (O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y <O2.height/2 + O1.height/2)
{
  return true
}
else 
{
  return false
}
}


function eventCheck()
{

 if(mouseIsPressed && isTouching(TPFake1,mPosObj))
 {
   
    p1X = mouseX;
    p1Y = mouseY;
 }
 else if(mouseIsPressed && isTouching(TPFake2,mPosObj))
 {
   
    
    p2X = mouseX;
    p2Y = mouseY;
 }
 else if(mouseIsPressed && isTouching(TPFake3,mPosObj))
 {
    
    p3X = mouseX;
    p3Y = mouseY;
 }
}
function makeTri()
{
  fill(200,0,0)
  beginShape(TRIANGLES);
  vertex(p1X,p1Y);
  vertex(p2X,p2Y);
  vertex(p3X,p3Y);
  endShape();
}

function math()
{
  //Finding Length of sides
  var cord1 = int(sqrt(sq((p2X-p1X))+sq((p2Y-p1Y))))
  var cord2 = int(sqrt(sq((p3X-p2X))+sq((p3Y-p2Y))))
  var cord3 = int(sqrt(sq((p3X-p1X))+sq((p3Y-p1Y))))
  
  //finding where to show the label
  var cord1AvgX = int((p1X+p2X)/2)   
  var cord1AvgY = int((p1Y+p2Y)/2) 
  
  var cord2AvgX = int((p3X+p2X)/2)   
  var cord2AvgY = int((p3Y+p2Y)/2)
  
  var cord3AvgX = int((p3X+p1X)/2)   
  var cord3AvgY = int((p3Y+p1Y)/2) 
  
  //showing the length in text output
  text(cord1,cord1AvgX,cord1AvgY+30);

  text(cord2,cord2AvgX-10,cord2AvgY-20);

  text(cord3,cord3AvgX+10,cord3AvgY);
 
  //Finding area using heron's formula 
  //1((a+b+c)/2) = s
  //2 sqrt((s*(s-a)*(s-b)*(s-c)))
  
  var s = int((cord1+cord2+cord3)/2)
  var area = int(sqrt(s*(s-cord1)*(s-cord2)*(s-cord3)))
  
  var areaAvgX = ((p1X+p2X+p3X)/3)
  var areaAvgY = ((p1Y+p2Y+p3Y)/3)

  text(area,areaAvgX,areaAvgY); 
  textSize(20)
  text("(Heron's Formula)",areaAvgX-50,areaAvgY+20); 

}

function reset()
{
  p1X = sX;
  p1Y = sY;
  p2X = sX/2;
  p2Y = sY;
  p3X = sX;
  p3Y = sY/2 
}

function draw() 
{
  
  background(250,150,150); 
  
  
  TPFake1.x = p1X;
  TPFake1.y = p1Y

  TPFake2.x = p2X;
  TPFake2.y = p2Y

  TPFake3.x = p3X;
  TPFake3.y = p3Y

  mPosObj.x = mouseX+5;
  mPosObj.y = mouseY+8;
  
 

  stroke(20,20,240)
  
  strokeWeight(10)
  fill(0,250,0,50)
  touchPoint1.draw = function() { circle(p1X,p1Y,30) }
  touchPoint2.draw = function() { circle(p2X,p2Y,30) }
  touchPoint3.draw = function() { circle(p3X,p3Y,30) }
 
  stroke(0)
  
  strokeWeight(0)

  eventCheck();
  makeTri();

  textSize(25)
  fill(0,0,0);
  math();

  
  
 
  textSize(20);
  fill(0, 102, 153);
  text("("+p1X+" , "+p1Y+")",p1X+20,p1Y);

  text("("+p2X+" , "+p2Y+")",p2X-120,p2Y);

  text("("+p3X+" , "+p3Y+")",p3X-50,p3Y-20);

  drawSprites();
  
}




