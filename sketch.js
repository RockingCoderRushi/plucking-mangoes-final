
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Mangotree;
var land;
var rock;
var boyimage,boy
var mango1,mango2,mango3,mango4,mango5;
var string;

function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

	Engine.run(engine);

	Mangotree = new Tree(350,230)

	mango1 = new Mango(450,370,20)
	mango2 = new Mango(580,350,20)
	mango3 = new Mango(520,440,20)
	mango4= new Mango(700,440,20)
	mango5 = new Mango(650,270,20)
	

	land = new Ground(400,675,800,30)

	rock = new Stone(120,580,5)

	string = new Rope(rock.body,{x:120,y:550});

	boy = createSprite(170,615)
	boy.addImage(boyimage)
	boy.scale = 0.1
	
	
	
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Mangotree.display();
  land.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display()
  string.display()

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);

  drawSprites();
}
function mouseDragged() {
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    string.release()
    
}
function keyPressed() {
	console.log("hi")
	if(keyCode === 32){
		Matter.Body.setPosition(rock.body,{x:235,y:420})
		
		console.log("lol")
	}
}

function detectCollision(Stone,Mango){
MangoBodyPosition = Mango.body.position
StoneBodyPosition = Stone.body.position

var distance = dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y);
if(distance<=Stone.r + Mango.r)
{
	Matter.Body.setStatic(Mango.body,false)
}
}



