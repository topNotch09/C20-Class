var car,wall;
var speed,weight;
var damage;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(55,90)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed
  if(car.isTouching(wall)){
    car.veloxityX = 0
    d()
  }
}

function(d){
  damage = 0.5 * speed * speed * weight/22500
  if(damage<100){
    car.shapeColor = "green"
  }
  elif(damage>180){
    car.shapeColor = "yellow"
  }
  else
    car.shapeColor = "red"
  }
}