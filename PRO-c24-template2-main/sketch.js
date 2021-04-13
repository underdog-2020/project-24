const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var hammer;
var block
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block0

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

//files being displayed/sprites being displayed

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    block = new Block(400,400);
    block1 = new Block(500,500);
    block2 = new Block(300,200);
    block3 = new Block(100,600);
    block4 = new Block(700,700);
    block5 = new Block(800,800);
    block6 = new Block(999,500);
    block7 = new Block(1100,333);
    block8 = new Block(1000,343);
    block9 = new Block(600,700);
    block0 = new Block(500,789);}

function draw(){
    background("black");
    Engine.update(engine);

//Displaying the sprites to be displayed

     plane.display();
    hammer.display();
    block.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block0.display();}