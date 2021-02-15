var back_img1,background1,door,door_img,back_img2,hero,hero_img,coins,coin1,coin2,coin3,coin4,coin5
var gameState =0
function preload(){
  back_img1 = loadImage("scary background.jpg")
  door_img = loadImage("door.png")
  back_img2 = loadImage("room1.jpg")
  hero_img = loadImage("hero.png")
  coins = loadImage("coin.png")
}
 function setup() {
  createCanvas(1200,800);
  background1 = createSprite(500,300,1000,400)
  background1.addImage(back_img1)
  background1.scale = 1.9
 door = createSprite(520,325) 
 door.addImage(door_img)
 door.scale = 0.3
 hero = createSprite(520,325)
 hero.addImage(hero_img)
 hero.scale = 0.2
 hero.visible = false
}

function draw() {
  background(255,255,255);

  drawSprites();
  if (keyDown(UP_ARROW)){
    hero.velocityY = -3
      }
    if (keyDown(DOWN_ARROW)){
      hero.velocityY =3
     }
    if (keyDown(RIGHT_ARROW)){
    hero.velocityX =3
    }
    if (keyDown(LEFT_ARROW)){
    hero.velocityX = -3
    }
  
  if (gameState === 0){
  fill("red")
  textSize(20)
 text("SAVE YOUR 3 FRIENDS BY CROSSING CERTAIN CIRCUMSTANCES",250,150)
  }
 
 if (mousePressedOver(door)){
  gameState =1
 }
 if (gameState === 1){
door.visible = false
background1.addImage(back_img2)
for (var i = 150; i < 750; i=i+100){
   coin1=createSprite(i,150,20,20);
 coin1.addImage(coins);
  coin1.scale = 0.2
}
for (var i = 150; i < 750; i=i+100){
   coin2=createSprite(i,225,20,20);
  coin2.addImage(coins);
  coin2.scale = 0.2
}
for (var i = 150; i < 750; i=i+100){
   coin3=createSprite(i,300,20,20);
  coin3.addImage(coins);
  coin3.scale = 0.2
}
for (var i = 150; i < 750; i=i+100){
   coin4=createSprite(i,375,20,20);
  coin4.addImage(coins);
  coin4.scale = 0.2
}
for (var i = 150; i < 750; i=i+100){
   coin5=createSprite(i,450,20,20);
  coin5.addImage(coins);
  coin5.scale = 0.2
}

hero.visible = true
hero.x=600
hero.y=650

if(hero.isTouching(coin1)){
coin1.destroy()
}
if(hero.isTouching(coin2)){
coin2.destroy()
}
if(hero.isTouching(coin3)){
coin3.destroy()
}  
if(hero.isTouching(coin4)){
coin4.destroy()
}
if(hero.isTouching(coin5)){
coin5.destroy()
}
}
}
