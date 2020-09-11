var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var score = 0;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
if(e.key == "Right" || e.key == "ArrowRight"){
	rightPressed = true;
} else if(e.key == "Left" || e.key == "ArrowLeft"){
	leftPressed = true;
} 
}
function keyUpHandler(e){
if(e.key == "Right" || e.key == "ArrowRight"){
	rightPressed = false;
} else if(e.key == "Left" || e.key == "ArrowLeft"){
	leftPressed = false;
} 
}
// Draw Ball
function drawBall(){
	ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#39FF14";
  ctx.fill();
  ctx.closePath();
}
// Draw Paddle
function drawPaddle(){
	ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#39FF14";
  ctx.fill();
  ctx.closePath();
}
function drawScore(){
	ctx.font = "16px 'Inconsolata', monospace";
  ctx.fillStyle = "#39FF14";
  ctx.fillText("Score: " + score, 8, 20);
}

function draw(){
ctx.clearRect(0,0,canvas.width, canvas.height);

drawBall();
drawPaddle();
drawScore();
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
		dx = -dx;
}
if(y + dy < ballRadius){
		dy = -dy;
} else if(y + dy > canvas.height-ballRadius){
	if(x > paddleX && x < paddleX + paddleWidth){
  	dy = -dy;
    score++;
  } else {
	alert("GAME OVER!" + "\nYou scored: " + score + "\nPress Ok to Play again!");
  document.location.reload();
  clearInterval(interval);
  }
}
if(rightPressed) {
    paddleX += 2;
    if (paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
}
else if(leftPressed) {
    paddleX -= 2;
    if (paddleX < 0){
        paddleX = 0;
    }
}

x += dx;
y += dy;
}

var interval = setInterval(draw, 5);





