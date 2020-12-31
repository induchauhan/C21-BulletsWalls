var bullet,wall, speed,thickness,weight,b1,w1;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 100, 40);
  bullet.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
 
  bullet.velocityX=speed;
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var d=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(d>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(d<10)
    {
      wall.shapeColor=color(0,255,0);
  
    }
  }
  drawSprites();
}
function hascollided(o1,o2)
{
  b1=o1.x+o1.width/2;
  w1=o2.x-o2.width/2;
  if(b1>=w1)
  {
    return true;
  }
  return false;
}