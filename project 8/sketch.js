var wall1 
var wall1op 
var wall3
var wall4
var wall5
var wall6 
var wall7
var wall8 
var wall9
var wall10
var wall11
var wall12 
var ball 
var laserBall1
var laserBall2 
var laserBall3 
var laserBall4 
var ballImg;
var laserImg;

  var score ;
  function preload(){
    ballImg=loadImage("leftrun-removebg-preview.png");
    laserImg=loadImage("Anchor-removebg-preview.png");

  }
  function setup(){
      wall1 = createSprite(50,200,5,100);
      wall1op = createSprite(350,200,5,100);
      wall3 = createSprite(75,150,50,5);
      wall4 = createSprite(75,250,50,5);
      wall5 = createSprite(325,250,50,5);
      wall6 = createSprite(325,150,50,5);
      wall7 = createSprite(100,125,5,50);
      wall8 = createSprite(100,275,5,50);
      wall9 = createSprite(300,125,5,50);
      wall10 = createSprite(300,275,5,50);
      wall11 = createSprite(200,300,200,5);//Down WAll
      wall12 = createSprite(200,100,200,5);//Up WAll
      ball = createSprite(75,200,20,20);
      ball.addImage(ballImg);
      ball.scale=0.2;
      laserBall1 = createSprite(150,200,5,25);
      laserBall1.addImage(laserImg);
      laserBall1.scale=0.2
      laserBall1.setCollider("rectangle",0,0,135,135)
      laserBall2 = createSprite(200,200,5,25);
      laserBall2.addImage(laserImg);
      laserBall2.scale=0.2
      laserBall2.setCollider("rectangle",0,0,135,135)
      laserBall3 = createSprite(250,200,5,25);
      laserBall3.addImage(laserImg);
      laserBall3.scale=0.2
      laserBall3.setCollider("rectangle",0,0,135,135)
      laserBall4 = createSprite(270,200,5,25);
      laserBall4.addImage(laserImg);
      laserBall4.scale=0.2
      laserBall4.setCollider("rectangle",0,0,135,135)
        laserBall1.velocityY=8;
        laserBall2.velocityY=6;
        laserBall3.velocityY=9;
        laserBall4.velocityY=10;
       
      
      score=0;
      

  }
  
  


function draw() {
  background("white");

  
  fill("lightblue");
  rect(50,150,50,100);
  fill("lightblue");
   rect(300,150,50,100);
  
   text("Deaths",200,100);
   text(score,250,100);
   laserBall1.bounceOff(wall11);
   laserBall2.bounceOff(wall11);
   laserBall3.bounceOff(wall11);
   laserBall4.bounceOff(wall11);
   
   
  laserBall1.bounceOff(wall12);
   laserBall2.bounceOff(wall12);
   laserBall3.bounceOff(wall12);
   laserBall4.bounceOff(wall12);
  
  
  
 
  
  if(keyDown(LEFT_ARROW)){
    ball.x=ball.x-5;
  }
  
 if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x+5;
  }
 
  
  if(laserBall1.isTouching(ball)||laserBall2.isTouching(ball)||laserBall3.isTouching(ball)||laserBall4.isTouching(ball)||ball.isTouching(wall1)||ball.isTouching(wall1op)){
    ball.x=75;
    ball.y=200;
    score=score+1;
    
  }
  if(ball.isTouching(wall1op)){
    text("YOU WON",190,35);
    ball.x=75;
    ball.y=200;
  }
  
  
  
  
  
  
  
  
  drawSprites();
}
