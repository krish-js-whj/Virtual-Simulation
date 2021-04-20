const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, stone, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(300, height-50, 100,100)
    stone = new Stone(500, height-50, 30,70)
    iron = new Iron(100,height-50,100,50)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display()
    stone.display()
    iron.display()
    textSize(20)
    text("Refresh to guess again ;]", 450, height/2)
}