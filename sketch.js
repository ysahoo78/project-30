const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, pentagon, box, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14;
var ground, chain;
function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width/2, 350, 200, 10 , {isStatic:true} );
   World.add(world, ground);
   
   box = new Box(width/2 - 60,325,30,40);
   box2 = new Box(width/2 - 30,325,30,40);
   box3 = new Box(width/2,325,30,40);
   box4 = new Box(width/2 + 30,325,30,40);
   box5 = new Box(width/2 + 60,325,30,40);
   box6 = new Box(width/2 - 45,285,30,40);
   box7 = new Box(width/2 - 15,285,30,40);
   box8 = new Box(width/2 + 15,285,30,40);
   box9 = new Box(width/2 + 45,285,30,40);
   box10 = new Box(width/2 - 30,235,30,40);
   box11 = new Box(width/2,235,30,40);
   box12 = new Box(width/2 + 30,235,30,40);
   box13 = new Box(width/2 - 15,175,30,40);
   box14 = new Box(width/2 + 15,175,30,40);

  pentagon = new Pentagon(50, 100, 50);

  chain = new Chain(pentagon.body, {x: 50, y: 100});
   
   
   
  
}



function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 250, 10)



  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  pentagon.display();
  chain.display();
  
  
  
  
}

function mouseDragged() {
  Matter.Body.setPosition(pentagon.body, {x: mouseX, y: mouseY})

}

function mouseReleased() {
chain.fly();   
}

function keyPressed() {
  if(keyCode === 32){
    chain.attach(pentagon.body);
  }
}