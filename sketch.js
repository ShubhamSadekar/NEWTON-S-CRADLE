
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobObj1 = new Bob (560,350);
   bobObj2 = new Bob (585,350);
   bobObj3 = new Bob (610,350);
   bobObj4 = new Bob (520,350);
   bobObj5 = new Bob (660,350);
   platform1 = new Platform(600,200,250,20)
   rope1 = new Rope (bobObj1.body,{x:560,y:200})
   rope2 = new Rope (bobObj2.body,{x:600,y:200})
   rope3 = new Rope (bobObj3.body,{x:640,y:200})
   rope4 = new Rope (bobObj4.body,{x:520,y:200})
   rope5 = new Rope (bobObj5.body,{x:670,y:200})
   
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("white");
  platform1.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(bobObj4.body,bobObj4.body.position,{x:-200,y:-100});
}
}


