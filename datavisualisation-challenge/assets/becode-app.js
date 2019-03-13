/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/
// PREMIER GRAPHIQUE DYNAMIC
let bodyC = document.getElementById("bodyContent");
let theFirstChild = bodyC.firstChild;
let newDiv = document.createElement("div");
let newContent = document.createTextNode("");
newDiv.appendChild(newContent);
bodyC.insertBefore(newDiv, theFirstChild);
newDiv.setAttribute("id", "bar-chart");
let svg = dimple.newSvg("div#bar-chart", 800, 400);
function updateChart(){
        let dataPoints=[];
        async function getData() {
            let response = await fetch('https://inside.becode.org/api/v1/data/random.json');
            let data = await response.json();
            return data;
        }
        getData().then(data => {
            for (let i in data){
                    dataPoints.push({"Année":data[i][0], "Taux de criminalité":data[i][1]});
            }
            let chart = new dimple.chart(svg, dataPoints);
                    chart.addCategoryAxis("x", "Année");
                    chart.addMeasureAxis("y", "Taux de criminalité");
                    chart.addSeries(null, dimple.plot.bar);
                    chart.draw();
                    setTimeout(function(){
                        chart.svg.selectAll("*").remove();
                        updateChart();
                    }, 2000);
        })
}
updateChart();
// DEUXIEME GRAPHIQUE
let bodyDiv2 = document.getElementById("mw-content-text");
let newDiv2 = document.createElement("div");
let newContent2 = document.createTextNode("");
newDiv2.appendChild(newContent2);
let table1 = document.getElementById("table1");
bodyDiv2.insertBefore(newDiv2, table1);
newDiv2.setAttribute("id", "line-chart1");
let dataPoints2=[];
let dataTable1=[];
let tdTable1 = table1.querySelectorAll("td");
for (let i=0; i<tdTable1.length;i++){
    dataTable1.push(tdTable1[i].innerHTML);
}
for (let i=0; i<dataTable1.length;i+=12){
    dataPoints2.push({"Pays":dataTable1[i].replace(/:/g, "0"),
                      "Infraction":dataTable1[i+1].replace(/:/g, "0"),
                      "Infraction2":dataTable1[i+2].replace(/:/g, "0"),
                      "Infraction3":dataTable1[i+3].replace(/:/g, "0"),
                      "Infraction4":dataTable1[i+4].replace(/:/g, "0"),
                      "Infraction5":dataTable1[i+5].replace(/:/g, "0"),
                      "Infraction6":dataTable1[i+6].replace(/:/g, "0"),
                      "Infraction7":dataTable1[i+7].replace(/:/g, "0"),
                      "Infraction8":dataTable1[i+8].replace(/:/g, "0"),
                      "Infraction9":dataTable1[i+9].replace(/:/g, "0"),
                      "Infraction10":dataTable1[i+10].replace(/:/g, "0"),
                      "Infraction11":dataTable1[i+11].replace(/:/g, "0")});
}
let svg2 = dimple.newSvg("div#line-chart1", 861, 620);
let chart = new dimple.chart(svg2, dataPoints2);
chart.setBounds(60, 25, 800, 500);
let xC1 = chart.addCategoryAxis("x", "Pays");
xC1.addOrderRule("Pays");
let y1C1 = chart.addMeasureAxis("y", "Infraction");
let s1C1 = chart.addSeries("2002", dimple.plot.line, [xC1, y1C1]);
s1C1.interpolation = "cardinal";
for (let i=2; i<12 ; i++){
    let y$iC1 = chart.addMeasureAxis("y", `Infraction${i}`);
    let s$iC1 = chart.addSeries(2001+i, dimple.plot.line, [xC1, y$iC1]);
    s$iC1.interpolation = "cardinal";
}
chart.addLegend(120, 10, 800, 10, "left");
chart.draw();
// TROISIEME GRAPHIQUE
let newDiv3 = document.createElement("div");
let newContent3 = document.createTextNode("");
newDiv3.appendChild(newContent3);
let table2 = document.getElementById("table2");
bodyDiv2.insertBefore(newDiv3, table2);
newDiv3.setAttribute("id", "line-chart2");
let dataPoints3=[];
let dataTable2=[];
let tdTable2 = table2.querySelectorAll("td");
for (let i=0; i<tdTable2.length;i++){
    dataTable2.push(tdTable2[i].innerHTML);
}
for (let i=0; i<dataTable2.length;i+=3){
    dataPoints3.push({"Pays":dataTable2[i], "Population carcérale":dataTable2[i+1], "Population carcérale2":dataTable2[i+2]});
}
let svg3 = dimple.newSvg("div#line-chart2", 861, 700);
let chart3 = new dimple.chart(svg3, dataPoints3);
chart3.setBounds(60, 25, 800, 500);
let x = chart3.addCategoryAxis("x", "Pays");
x.addOrderRule("Pays");
let y1 = chart3.addMeasureAxis("y", "Population carcérale");
let y2 = chart3.addMeasureAxis("y", "Population carcérale2");
let s2 = chart3.addSeries("2010-2012", dimple.plot.line, [x, y2]);
s2.interpolation = "cardinal";
let s1 = chart3.addSeries("2007-2009", dimple.plot.line, [x, y1]);
s1.interpolation = "cardinal";
chart3.addLegend(60, 10, 800, 20, "right");
chart3.draw();
