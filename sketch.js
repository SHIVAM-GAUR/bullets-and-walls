var bullet,speed,weight;
var wall, thickness;
var damage;
var bulletRightEdge;
 var bulletLeftEdge;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);7
  bulletSpeed = random(223,321);
 bulletWeight = random(30,52);
  ThicknessofWall = random(22,83);
  bullet.velocityX = speed;

 damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(ThicknessofWall*ThicknessofWall*ThicknessofWall);
 
  
}

function draw() {
  background(255,255,255);  

  function hasCollided(bullet,wall)
  {
    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge  = wall.x;
    if (bulletRightEdge=wallLeftEdge)
    {
      return true
    }
    return false;
  }
  
  if(hasCollided(bullet,wall))
 {
   bullet.velocityX = 0;
   var damage =0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thickness * thickness * thickness);
   if(damage>10)
   {
     wall.shapeColor = color(255,0,0);
   }

   if (damage<10)
   {
     wall.shapeColor = color(0,255,0);
   }
 }
 drawSprites();
  }
  