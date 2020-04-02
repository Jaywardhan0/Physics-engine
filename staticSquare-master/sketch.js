const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball2;
var ball3,ball4;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var Option ={
        restitution:1
    }
    ball = Bodies.rectangle(200,200,10,10,Option)
    World.add(world,ball);
    ball2 = Bodies.rectangle(100,200,20,20,Option)
    World.add(world,ball2);
    var ball3_Option ={
        restitution : 1.5
    } 
    ball3 = Bodies.circle(200,300,20,ball3_Option)
    World.add(world,ball3);
    ball4 = Bodies.circle(100,50,10,ball3_Option)
    World.add(world,ball4)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball.position.x,ball.position.y,10,10);
    rect(ball2.position.x,ball2.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,20,20);
    ellipse(ball4.position.x,ball4.position.y,10,10);
}