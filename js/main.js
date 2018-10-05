var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var ane;
var fruit;

var mom;

var mx;
var my;

var bgPic=new Image();
document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	//获得canvas context
	can1=document.getElementById('canvas1');  //fishes ,UI,dust,circle
	ctx1=can1.getContext("2d");

	can2=document.getElementById('canvas2');  //bg ,ane,firuts
	ctx2=can2.getContext("2d");

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src="./src/background.jpg";

	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;
}
function gameloop(){
	requestAnimFrame(gameloop);//相比较setInterval,setTimeout更科学 frame per second(每秒多少帧)；
	// console.log("loop");
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	drawBackground();
	// console.log(deltaTime);
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();

	momFruitsCollision();
}
function onMouseMove(e){
	if (e.offSetX||e.layerX) {
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;

	}
}