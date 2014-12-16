function PieChart(id, o) {
	this.colors = ["#bbddb3", "#1d8e04","#5136f6", "#e2f5b4","#fc081f", "#E0FFFF", "#9edd08","#fb1ef8","#fdfbb4", "#faf406","#fbd4b7", "#f2700f","#f8bdb4", "#ea2507","#e2bcbd", "#9e2126"];
	var canvas = document.getElementById(id);
	var context = canvas.getContext('2d');
	var centerX = Math.floor(canvas.width / 2) - Math.floor(canvas.width / 7);
	var centerY = Math.floor(canvas.height / 2) + Math.floor(canvas.height / 7);
	var radius = Math.floor(canvas.width / 3);
	var rectWidth = Math.floor(canvas.width / 15);
	var rectHeight = Math.floor(canvas.height / 20);
	var rectStartX = Math.floor(canvas.width) - Math.floor(canvas.width/3.5);
	var rectStartY = Math.floor(canvas.height)/30;
	this.canvas = document.getElementById(id);
	var that = this;
	console.log(o.data);
	this.draw = function(){
		console.log('inside draw');
		var radObj = that.calculateRadian();
		console.log(radObj);
		var start=0;
		var end = 0; 
		var font = rectHeight-5;
		context.font =font+'px Arial';
		for(var i=0;i<radObj.length;i++){
			end+=radObj[i];
			context.beginPath();
			context.moveTo(centerX, centerY);
			context.fillStyle = that.colors[i];
			context.arc(centerX, centerY, radius, start, end, false);
			context.closePath();
			context.fill();
			context.restore();
			context.fillRect(rectStartX,rectStartY,rectWidth,rectHeight);
			context.fillText(o.labels[i],rectStartX+rectWidth+5,rectStartY+rectHeight/1.2);
			rectStartY+=1.2*rectHeight; 
			start = end;
		}
	};
	this.calculateRadian = function(){
		console.log(o.data);
		var sum=0;
		var radObj=[];
		for(var i=0;i<o.data.length;i++){
			sum+=o.data[i];
		}
		console.log(sum);
		for(var i=0;i<o.data.length;i++){
			radObj[i]=o.data[i]/sum*2*Math.PI;
		}
		return radObj;
	};
}

