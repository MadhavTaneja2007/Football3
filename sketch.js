var bg;
var form;
var gameState = 0;
var player,game;
var database, playerCount;

function preload()
{
bg = loadImage("Images/WEMBLEY.jpg")
}

function setup() 
{
  createCanvas(displayWidth - 25,displayHeight - 25);
  game  = new Game();
  game.start();
  database = firebase.database();
}

function draw() 
{
  background(bg);
  
  
    
  /*if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
  
  drawSprites(); */

}

