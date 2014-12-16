// JavaScript Document
function LineGraph(id, obj) {
	console.log(obj);
	this.draw = function(){
		console.log('obj  '+obj.data);
		var cnt = obj.data.length;
		var c = document.getElementById(id);
		var context = c.getContext("2d");
		that.grid();
		var startx = 40;
		var starty = 425;
		for(var i = 0; i<=cnt; i++){
			context.beginPath();
			context.strokeStyle = "rgba(0,0,0,0.9)";
			context.moveTo(startx,starty);
			var endx=startx+70;
			var endy=425-obj.data[i];
			//context.fillRect(5,435,2,2);
			context.fillStyle = 'black';
			context.arc(startx,starty,3,0,2*Math.PI);
			//context.fill;
			context.lineTo(endx,endy);	
			context.stroke();
			context.closePath();
			startx = endx;
			starty = endy;
		}
		/*
		context.strokeStyle = "black";
		context.moveTo(5,435);
		//context.fillRect(5,435,2,2);
		context.arc(5,435,2,0,2*Math.PI);
		context.lineTo(65,400);
		context.moveTo(65,400);
		//context.fillRect(65,400,2,2);
		context.arc(65,400,2,0,2*Math.PI);
		context.lineTo(125,320);
		context.moveTo(125,320);
		//context.fillRect(125,320,5,5);
		context.arc(125,320,2,0,2*Math.PI);
		context.lineTo(185,280);
		context.moveTo(185,280);
		//context.fillRect(185,280,5,5);
		context.arc(185,280,2,0,2*Math.PI);
		context.lineTo(245,160);
		context.moveTo(245,160);
		//context.fillRect(245,160,5,5);
		context.arc(245,160,2,0,2*Math.PI);
		context.lineTo(305,240);
		context.moveTo(305,240);
		//context.fillRect(305,240,5,5);
		context.arc(305,240,2,0,2*Math.PI);
		context.lineTo(465,220);
		//context.fillRect(465,240,5,5);
		context.arc(465,240,2,0,2*Math.PI);
		*/
	};
	var that = this;
	this.grid = function(){
		//console.log('create grid');
		var c = document.getElementById(id);
		var ctx = c.getContext("2d");
		var size = Math.floor(c.height / 10);
		var j = size*9;
		var k = 0;
		ctx.font = "15px Arial";
		for(var i=size; i<c.height; i+=size){
			ctx.beginPath();
			ctx.strokeStyle="rgba(255,255,255,0.5)";
			ctx.moveTo(i,40);
			ctx.lineTo(i,425);
			ctx.moveTo(40,i);
			ctx.lineTo(425,i);
			ctx.fillText(k,i-5,20);
			ctx.fillText(j,8,i+5);
			j-=size;
			k+=size;
			ctx.stroke();
			ctx.closePath();	
		}
	};
}

function MultiLineGraph(id, obj) {
	console.log(obj);
	this.draw = function(){
		console.log('obj  '+obj.data[0].length);
		console.log('obj  '+obj.data[1]);
		var cnt = obj.data;
		var c = document.getElementById(id);
		var context = c.getContext("2d");
		that.grid();
		var startx = 40;
		var starty = 425;
		for(var i = 0; i<=cnt.length; i++){
				context.beginPath();
				context.strokeStyle = "rgba(0,0,0,0.9)";
				context.moveTo(startx,starty);
				var endx=startx+70;
				var endy=425-obj.data[0][i];
				//context.fillRect(5,435,2,2);
				context.fillStyle = 'black';
				context.arc(startx,starty,3,0,2*Math.PI);
				//context.fill;
				context.lineTo(endx,endy);	
				context.stroke();
				context.closePath();
				startx = endx;
				starty = endy;
			
		}
		/*
		context.strokeStyle = "black";
		context.moveTo(5,435);
		//context.fillRect(5,435,2,2);
		context.arc(5,435,2,0,2*Math.PI);
		context.lineTo(65,400);
		context.moveTo(65,400);
		//context.fillRect(65,400,2,2);
		context.arc(65,400,2,0,2*Math.PI);
		context.lineTo(125,320);
		context.moveTo(125,320);
		//context.fillRect(125,320,5,5);
		context.arc(125,320,2,0,2*Math.PI);
		context.lineTo(185,280);
		context.moveTo(185,280);
		//context.fillRect(185,280,5,5);
		context.arc(185,280,2,0,2*Math.PI);
		context.lineTo(245,160);
		context.moveTo(245,160);
		//context.fillRect(245,160,5,5);
		context.arc(245,160,2,0,2*Math.PI);
		context.lineTo(305,240);
		context.moveTo(305,240);
		//context.fillRect(305,240,5,5);
		context.arc(305,240,2,0,2*Math.PI);
		context.lineTo(465,220);
		//context.fillRect(465,240,5,5);
		context.arc(465,240,2,0,2*Math.PI);
		*/
	};
	var that = this;
	this.grid = function(){
		//console.log('create grid');
		var c = document.getElementById(id);
		var ctx = c.getContext("2d");
		var size = Math.floor(c.height / 10);
		var j = size*9;
		var k = 0;
		ctx.font = "15px Arial";
		for(var i=size; i<c.height; i+=size){
			ctx.beginPath();
			ctx.strokeStyle="rgba(255,255,255,0.5)";
			ctx.moveTo(i,40);
			ctx.lineTo(i,425);
			ctx.moveTo(40,i);
			ctx.lineTo(425,i);
			ctx.fillText(k,i-5,20);
			ctx.fillText(j,8,i+5);
			j-=size;
			k+=size;
			ctx.stroke();
			ctx.closePath();	
		}
	};
}
