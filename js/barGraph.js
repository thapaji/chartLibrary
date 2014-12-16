// JavaScript Document

function InclinedBarGraph(id, obj) {
	//console.log(obj);
	this.colors = ["#bbddb3", "#1d8e04","#5136f6", "#e2f5b4","#fc081f", "#E0FFFF", "#9edd08","#fb1ef8","#fdfbb4", "#faf406","#fbd4b7", "#f2700f","#f8bdb4", "#ea2507","#e2bcbd", "#9e2126"];
	this.draw = function(){
		//console.log('inside draw');	
		//console.log(id);
		//console.log(obj.data);
		var c = document.getElementById(id);
		var context = c.getContext("2d");
		var cnt = obj.data.length;
		var barWidth = (Math.floor(c.height)- Math.floor(c.height / 10))/obj.data.length/2; 
		var size = Math.floor(c.width/5*4)/10;
		var sizey = Math.floor(c.height / 10);
		startx = size;
		starty = sizey;
		that.grid();
		var objScale = that.scaleData();
		for(var i =0; i<cnt;i++){
			context.beginPath();
			context.fillStyle = that.colors[i];
			//console.log(obj.colors[i][0]);
			context.shadowColor = 'rgba(128,128,128, 0.5)';
			context.shadowBlur=5;
			context.shadowOffsetX = 2;
			context.shadowOffsetY = 5;
			context.fillRect(startx,starty,objScale[i],barWidth);
			context.closePath();
			
			//console.log(obj.data[i]);
			//console.log('max '+a);
			starty += barWidth*2;
		}
	};
	var that = this;
	this.grid = function(){
		//console.log('create grid');
		var canvas = document.getElementById(id);
		var ctx = canvas.getContext("2d");
		var stepSize = Math.max.apply( Math, obj.data )/10;
		ctx.beginPath();
		var size = Math.floor(canvas.width/5*4)/10;
		var j = 0;
		ctx.font = "15px Arial";
		for(var i=size; i<canvas.width; i+=size){
			ctx.strokeStyle="white";
			ctx.moveTo(i,25);
			ctx.lineTo(i,430);
			ctx.fillText(j,i-5,20);
			j+=stepSize;
		}
		ctx.stroke();	
		ctx.closePath();
	};
	this.scaleData = function(){
		var canvas = document.getElementById(id);
		var objScale=[];
		var maxValCurr =  Math.max.apply( Math, obj.data );
		var maxValScale = Math.floor(canvas.width/5*4);
		for(var i=0;i<obj.data.length;i++){
			objScale[i]=obj.data[i]/maxValCurr*maxValScale;
			console.log(objScale[i]);
		}
		return objScale;
	};
}

function BarGraph(id, obj) {
	//console.log(obj);
	this.colors = ["#bbddb3", "#1d8e04","#5136f6", "#e2f5b4","#fc081f", "#E0FFFF", "#9edd08","#fb1ef8","#fdfbb4", "#faf406","#fbd4b7", "#f2700f","#f8bdb4", "#ea2507","#e2bcbd", "#9e2126"];
	this.draw = function(){
		//console.log('inside draw');	
		//console.log(id);
		//console.log(obj.data);
		var c = document.getElementById(id);
		var context = c.getContext("2d");
		var cnt = obj.data.length;
		var barWidth = (Math.floor(c.width)- Math.floor(c.width / 10))/obj.data.length/2; 
		var size = Math.floor(c.height/5*4)/10;
		var sizey = Math.floor(c.width / 10);
		startx = size;
		starty = sizey;
		that.grid();
		var objScale = that.scaleData();
		for(var i =0; i<cnt;i++){
			context.beginPath();
			context.fillStyle = that.colors[i];
			//console.log(obj.colors[i][0]);
			context.shadowColor = 'rgba(128,128,128, 0.5)';
			context.shadowBlur=5;
			context.shadowOffsetX = 5;
			context.shadowOffsetY = 2;
			context.fillRect(startx,starty,barWidth,objScale[i]);
			context.closePath();
			
			//console.log(obj.data[i]);
			//console.log('max '+a);
			startx += barWidth*2;
		}
	};
	var that = this;
	this.grid = function(){
		//console.log('create grid');
		var canvas = document.getElementById(id);
		var ctx = canvas.getContext("2d");
		var stepSize = Math.max.apply( Math, obj.data )/10;
		ctx.beginPath();
		var size = Math.floor(canvas.height/5*4)/10;
		var j = 0;
		ctx.font = "15px Arial";
		for(var i=size; i<canvas.height; i+=size){
			ctx.strokeStyle="white";
			ctx.moveTo(25,i);
			ctx.lineTo(430,i);
			ctx.fillText(j,20,i-5);
			j+=stepSize;
		}
		ctx.stroke();	
		ctx.closePath();
	};
	this.scaleData = function(){
		var canvas = document.getElementById(id);
		var objScale=[];
		var maxValCurr =  Math.max.apply( Math, obj.data );
		var maxValScale = Math.floor(canvas.width/5*4);
		for(var i=0;i<obj.data.length;i++){
			objScale[i]=obj.data[i]/maxValCurr*maxValScale;
			console.log(objScale[i]);
		}
		return objScale;
	};
}
