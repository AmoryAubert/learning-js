/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/
//https://inside.becode.org/api/v1/data/random.json
/*
var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    chart = new CanvasJS.Chart("chartContainer",{
        title:{
            text:"Live Chart with dataPoints from External JSON"
        },
        data: [{
        type: "line",
        dataPoints : dataPoints,
        }]
    });
    chart.render();
    updateChart();
});
*/
let theFirstChild = document.getElementById("bodyContent").firstChild;
let newDiv = document.createElement("div");
let newContent = document.createTextNode("");
newDiv.appendChild(newContent);
document.getElementById("bodyContent").insertBefore(newDiv, theFirstChild);
newDiv.setAttribute("id", "bar-chart")
let h2 = document.createElement("h2");
newContent = document.createTextNode("Create A Bar Chart With D3 JavaScript");
h2.appendChild(newContent);
document.getElementById("bodyContent").insertBefore(h2, newDiv);
//  the data that powers the bar chart, a simple array of numeric values
let chartdata = [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140];
 
//  the size of the overall svg element
let height = 200,
    width = 720,
 
//  the width of each bar and the offset between each bar
    barWidth = 40,
    barOffset = 20;
  
//d3.select('#bar-chart').append('svg')
//  .attr('width', width)
//  .attr('height', height)
//  .style('background', '#dff0d8')
//  .selectAll('rect').data(chartdata)
//  .enter().append('rect')
//    .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
//    .attr('width', barWidth)
//    .attr('height', function (data) {
//        return data;
//    })
//    .attr('x', function (data, i) {
//        return i * (barWidth + barOffset);
//    })
//    .attr('y', function (data) {
//        return height - data;
//    });
async function getData() {
      let response = await fetch('https://inside.becode.org/api/v1/data/random.json');
      let data = await response.json();
      return data;
}
getData().then(data => {
    console.log(data);
    console.dir(data);
})
