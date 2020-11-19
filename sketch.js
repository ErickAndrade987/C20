var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(1200,800);
 fixedrectangle = createSprite(600, 400, 50, 50);
 movingrectangle = createSprite(10,10,50,50);
 fixedrectangle.shapeColor = "green";
 movingrectangle.shapeColor = "green";
 movingrectangle.velocityY = -5;
 fixedrectangle.velocityY = 5;
 movingrectangle.velocityX = -5;
 fixedrectangle.velocityX = 5;
}

function draw() {
  background(0); 
  movingrectangle.x = World.mouseX
  movingrectangle.y = World.mouseY 
  if(movingrectangle.x - fixedrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 &&
    fixedrectangle.x - movingrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2){
  movingrectangle.velocityX = movingrectangle.velocityX * (-1);
  fixedrectangle.velocityX = fixedrectangle.velocityX * (-1);
  }
  if(movingrectangle.y - fixedrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2 &&
    fixedrectangle.y - movingrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2 )
  {
    movingrectangle.velocityY = movingrectangle.velocityY * (-1);
    fixedrectangle.velocityY = fixedrectangle.velocityY * (-1);
  }
  drawSprites();
}



// var fixedrectangle,movingrectangle;

// function setup() {
//   createCanvas(1200,800);
//  fixedrectangle = createSprite(600, 400, 50, 50);
//  movingrectangle = createSprite(10,10,50,50);
//  fixedrectangle.shapeColor = "green";
//  movingrectangle.shapeColor = "green";
// }

// function draw() {
//   background(0); 
//   movingrectangle.x = World.mouseX
//   movingrectangle.y = World.mouseY 
//   if(movingrectangle.x - fixedrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 &&
//     fixedrectangle.x - movingrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 && 
//     movingrectangle.y - fixedrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2 &&
//     fixedrectangle.y - movingrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2 ){
//   movingrectangle.shapeColor = "red";
//   fixedrectangle.shapeColor = "red";
//   }
//   else
//   {
//     movingrectangle.shapeColor = "green";
//     fixedrectangle.shapeColor = "green";
//   }
//   drawSprites();
// }