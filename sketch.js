const World= Matter.World; //Earth
const Engine= Matter.Engine; //God
const Bodies=Matter.Bodies; //Object inside the earth

var engine,world;
var object1;
var ball;
var lbon, rbon, tbon


function setup() 
{
  engine=Engine.create();
  world=engine.world; 

  createCanvas(400,400);
  var options=
  {
    isStatic:true
  }
  object1=Bodies.rectangle(0,380,400,20,options);
  World.add(world,object1);

  lbon=Bodies.rectangle(0,10,20,400,options);
  World.add(world,lbon);

  rbon=Bodies.rectangle(380,10,20,400,options);
  World.add(world,rbon);

  tbon=Bodies.rectangle(0,10,400,20,options);
  World.add(world,tbon);
  var options=
  {
    restitution:3.0
  }
  ball=Bodies.circle(200, 100, 20, options)
  World.add(world,ball)
} 


function draw() 
{
  background("pink");
  Engine.update(engine);
  
  rect(object1.position.x,object1.position.y,400,20);
  ellipse(ball.position.x, ball.position.y, 20, 20)
  rect(lbon.position.x,lbon.position.y,20,400);
  rect(rbon.position.x,rbon.position.y,20,400);
  rect(tbon.position.x,tbon.position.y,400,20);
}  