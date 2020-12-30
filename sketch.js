const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground (600,height,1200,20)
box1=new box(700,320,70,70);
box2=new box(700,320,70,70);
box3=new box(700,320,70,70);
box4=new box(700,320,70,70);
box5=new box(700,320,70,70);
box6=new box(850,320,70,70);
box7=new box(850,320,70,70);
ball1=new ball(600,200,50);
rope1=new rope(ball1.body,{x:600,y:150})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  ball1.display();
  rope1.display();
  drawSprites();
}

function mouseDragged()
{
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}