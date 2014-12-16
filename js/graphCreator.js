// JavaScript Document
createPieChart();
createInclinedBarGraph();
createLineGraph();
createMultiLineGraph();
createBarGraph();
//initBarGraph();
//initPlot();
createDoughnut();

function createPieChart() {

	var pieChart = new PieChart( "piechart",
		{
			data: [160,120,100,60,300,400,200],
			labels: ["Nepal", "India", "Japan","China","England","Shatish","Thapaji"],
		}
	);

	pieChart.draw();
}


function createInclinedBarGraph() {

	var inclinedBarGraph = new InclinedBarGraph( "bargraph", 
		{
			data: [160,120,100,300,400,200,400,500,700],
			labels: ["Nepal", "India", "Japan","China","England","Shatish","Thapaji"],
		}
	);

	inclinedBarGraph.draw();
}

function createLineGraph() {

	var lineGraph = new LineGraph( "linegraph", 
		{
			includeLabels: true, 
			data: [250, 300, 180,220,50],
			labels: ["Nepal", "India", "Japan","China","England"],
			colors: [
            	["#FFDAB9", "#FFDAB9"],
            	["#E6E6FA", "#E6E6FA"],
            	["#E0FFFF", "#E0FFFF"],
				["#fc081f", "#79e518"],
				["#5136f6", "#fb1ef8"]
			]
		}
	);

	lineGraph.draw();
}

function createMultiLineGraph() {

	var multiLineGraph = new MultiLineGraph( "multilinegraph",
		{
			data: [[100,200,300,400,500],[500,200,300,100,400]],
			labels: ["Nepal", "India", "Japan","China","England","Shatish","Thapaji"],
		}
	);

	multiLineGraph.draw();
}

function createBarGraph() {

	var barGraph = new BarGraph( "barGraph", 
		{
			data: [160,120,100,300,400,200,400,500,700],
			labels: ["Nepal", "India", "Japan","China","England","Shatish","Thapaji"],
		}
	);

	barGraph.draw();
}


function createDoughnut() {

	var doughnut = new Doughnut( "doughnutGraph",
		{
			data: [160,120,100,60,300,400,200],
			labels: ["Nepal", "India", "Japan","China","England","Shatish","Thapaji"],
		}
	);

	doughnut.draw();
}

