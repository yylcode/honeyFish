var aneObj=function(){
	this.x=[];
	this.len=[];

}
aneObj.prototype.num=50;//为对象添加属性
aneObj.prototype.init=function () {
	// body...
	for (var i = 0; i < this.num; i++) {
		this.x[i]=i*17+Math.random()*20;  //Math.random()随机0-1之间的数
		this.len[i]=200+Math.random()*50;

	}

	// console.log("1");
}
aneObj.prototype.draw=function () {
	// body...
	ctx2.save();
	ctx2.globalApha=0.6;
	ctx2.lineWidth=16;
		 ctx2.lineCap="round";
		 ctx2.strokeStyle="#3b154e";
	for (var i = 0; i < this.num; i++) {
		 ctx2.beginPath();
		 ctx2.moveTo(this.x[i],canHeight);
		 ctx2.lineTo(this.x[i],canHeight-this.len[i]);
		 
		 ctx2.stroke();
	}
	ctx2.restore();
}
