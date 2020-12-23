const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone,ground, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var launchingForce=100;

function preload(){
  boy = loadImage("boy.png");
  tree = loadImage("tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;

	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
  mango7 = new Mango(900,230,40);
  
	ground = new Ground(width/2,600,width,20);
	launcher= new Launcher(stone.body,{x:235,y:420})
	
	Engine.run(engine);
}

function draw() {
  background(230);
 // Engine.update(engine)
  textSize(25);
  text("Press Space to Try Again ¯\_(ツ)_/¯",50 ,50);
  image(boy ,200,340,200,300);
  image(tree,800,10,600,600);
  
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  stone.display();

  ground.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.radius+lstone.radius)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }