var fixedrect, movingrect 


function setup() {
  createCanvas(600, 600);
  
  fixedrect = createSprite(200, 200, 90, 90);
  movingrect = createSprite(300, 200, 90, 90);
  square1 = createSprite(100, 100, 20, 20);
  square2 = createSprite(400, 400, 20, 20);

  fixedrect.shapeColor = "lightblue";
  movingrect.shapeColor = "pink";
  square1.shapeColor = "lightgreen";
  square2.shapeColor = "purple";

  fixedrect.velocityX = -5;
  fixedrect.velocityY = 5;
  movingrect.velocityX = 5;
  movingrect.velocityY = -5; 
}

function draw() {
  background(255,255,255);  

  //square1.x = World.mouseX;
 // square1.y = World.mouseY;

/*if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 && movingrect.y - fixedrect.y < movingrect.width/2 + fixedrect.width/2 ){

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.velocityX = fixedrect.velocityX * (-1);
  fixedrect.velocityY = fixedrect.velocityX * (-1);
  movingrect.velocityX = movingrect.velocityX * (-1);
  movingrect.velocityY = movingrect.velocityX * (-1);

}
else{

  fixedrect.shapeColor = "lightblue";
  movingrect.shapeColor = "pink";

}*/



if (isTouching(square1, square2)){

  square1.shapeColor = "green";
  square2.shapeColor = "green";

}
else{

  square1.shapeColor = "lightgreen";
  square2.shapeColor = "purple";

}


bounceOff(fixedrect, movingrect);

  drawSprites();
}

function isTouching(object1, object2){

if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 && object2.y -object1.y < object1.height/2 + object2.height/2 && object1.y - object2.y < object1.width/2 + object2.width/2 ){

return true;



}
else{

return false;

}

}

function bounceOff(object1, object2){

  if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 && object2.y -object1.y < object1.height/2 + object2.height/2 && object1.y - object2.y < object1.width/2 + object2.width/2 ){
    object2.velocityX = object2.velocityX * (-1);
    object2.velocityY = object2.velocityX * (-1);
    object1.velocityX = object1.velocityX * (-1);
    object1.velocityY = object1.velocityX * (-1);
   

  }

 

}

