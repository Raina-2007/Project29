const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//variables 
var block1 , block2 , block3 , block4 , block5 , block6 , block7;
var block8 , block9 , block10 , block11 , block12;
var block13 , block14 , block15 , block16;
var block17 , block18 , block19 , block20 , block21;
var block22 , block23 , block24 , block25;
var ground , base1 , base2;
var polygon, polygon_img , slingShot;

function preload(){
	polygon_img = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 720);
	engine = Engine.create();
	world = engine.world;

	//ground
	ground = new Ground(500,710,1000,20);
	//bases
	base1 = new Ground(650,350,300,20);
	base2 = new Ground(500,550,200,20);

	//1st blocks
	//last
	block1 = new Block(560,325,30,40);
	block2 = new Block(590,325,30,40);
	block3 = new Block(620,325,30,40);
	block4 = new Block(650,325,30,40);
	block5 = new Block(680,325,30,40);
	block6 = new Block(710,325,30,40);
	block7 = new Block(740,325,30,40);
	//level1
    block8 = new Block(590,285,30,40);
	block9 = new Block(620,285,30,40);
	block10 = new Block(650,285,30,40);
	block11 = new Block(680,285,30,40);
	block12 = new Block(710,285,30,40);
	//level2
    block13 = new Block(620,245,30,40);
	block14 = new Block(650,245,30,40);
	block15 = new Block(680,245,30,40);
	//top
	block16 = new Block(650,205,30,40);
	//2nd blocks
	//last
	block17 = new Block(440,525,30,40);
	block18 = new Block(470,525,30,40);
	block19 = new Block(500,525,30,40);
	block20 = new Block(530,525,30,40);
	block21 = new Block(560,525,30,40);
	//middle
    block22 = new Block(470,485,30,40);
	block23 = new Block(500,485,30,40);
	block24 = new Block(530,485,30,40);
	//top
	block25 = new Block(500,445,30,40);

	var polygon_options={
		isStatic:false,
		restitution:1.0,
		friction:1.0,
		density:1.5
    }
	polygon = Bodies.circle(250,300,20,polygon_options);
	World.add(world,polygon);

	slingShot = new Slingshot(this.polygon,{x:250,y:200});
	
	Engine.run(engine);
}

function draw() {

	background(rgb(49, 32, 2));
	fill("red")
	textSize(25);
	text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50 ,50);

	fill(rgb(200,10,10));
	ground.display();
	base1.display();
	base2.display();

	fill(rgb(14, 168, 235));
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	fill(rgb(235, 14, 129));
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	fill(rgb(14, 235, 179));
	block13.display();
	block14.display();
	block15.display();
	fill(rgb(226, 235, 14));
	block16.display();

	fill(rgb(166, 240, 78));
	block17.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	fill(rgb(235, 165, 66));
	block22.display();
	block23.display();
	block24.display();
	fill(rgb(168, 66, 235));
	block25.display();

	ellipseMode(RADIUS);
	ellipse(polygon.position.x,polygon.position.y,20,20);
	imageMode(CENTER)
	image(polygon_img,polygon.position.x,polygon.position.y,60,60);
	slingShot.display();

}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}