var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,331);
  weight = random(30,32);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);
  hasCollided(); 
  if(hasCollided(bullet,wall)){
     bullet.velocityX = 0;
     var Damage = 0.5 * weigth * speed * speed/(thickness * thickness * thickness);
    if(deformation>180) {
      bullet.shapeColor = color(255,0,0);
    }
    if(Damage>10){
      bullet.shapeColor = "red";
    }
    if(Damage<10){
      bullet.shapeColor = "green";
    }
  }
drawSprites();
}
function hasCollided(Bullet,Wall){
  bulletRightedge = Bullet.x + Bullet.width;
  wallLeftedge = Wall.x;
  if(bulletRightedge>=wallLeftedge){
    return true;
  }
  
    return false;
  
}
