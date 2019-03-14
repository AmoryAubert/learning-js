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
for (let i=1; i<12;i++){
    dataPoints2.push(
                     {"Pays":dataTable1[0*12], "Année":(2001+i), "Infraction" : dataTable1[i].replace(/:/g, "0")},
                     {"Pays":dataTable1[1*12], "Année":(2001+i), "Infraction" : dataTable1[i+(1*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[2*12], "Année":(2001+i), "Infraction" : dataTable1[i+(2*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[3*12], "Année":(2001+i), "Infraction" : dataTable1[i+(3*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[4*12], "Année":(2001+i), "Infraction" : dataTable1[i+(4*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[5*12], "Année":(2001+i), "Infraction" : dataTable1[i+(5*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[6*12], "Année":(2001+i), "Infraction" : dataTable1[i+(6*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[7*12], "Année":(2001+i), "Infraction" : dataTable1[i+(7*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[8*12], "Année":(2001+i), "Infraction" : dataTable1[i+(8*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[9*12], "Année":(2001+i), "Infraction" : dataTable1[i+(9*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[10*12], "Année":(2001+i), "Infraction" : dataTable1[i+(10*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[11*12], "Année":(2001+i), "Infraction" : dataTable1[i+(11*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[12*12], "Année":(2001+i), "Infraction" : dataTable1[i+(12*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[13*12], "Année":(2001+i), "Infraction" : dataTable1[i+(13*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[14*12], "Année":(2001+i), "Infraction" : dataTable1[i+(14*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[15*12], "Année":(2001+i), "Infraction" : dataTable1[i+(15*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[16*12], "Année":(2001+i), "Infraction" : dataTable1[i+(16*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[17*12], "Année":(2001+i), "Infraction" : dataTable1[i+(17*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[18*12], "Année":(2001+i), "Infraction" : dataTable1[i+(18*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[19*12], "Année":(2001+i), "Infraction" : dataTable1[i+(19*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[20*12], "Année":(2001+i), "Infraction" : dataTable1[i+(20*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[21*12], "Année":(2001+i), "Infraction" : dataTable1[i+(21*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[22*12], "Année":(2001+i), "Infraction" : dataTable1[i+(22*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[23*12], "Année":(2001+i), "Infraction" : dataTable1[i+(23*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[24*12], "Année":(2001+i), "Infraction" : dataTable1[i+(24*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[25*12], "Année":(2001+i), "Infraction" : dataTable1[i+(25*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[26*12], "Année":(2001+i), "Infraction" : dataTable1[i+(26*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[27*12], "Année":(2001+i), "Infraction" : dataTable1[i+(27*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[28*12], "Année":(2001+i), "Infraction" : dataTable1[i+(28*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[29*12], "Année":(2001+i), "Infraction" : dataTable1[i+(29*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[30*12], "Année":(2001+i), "Infraction" : dataTable1[i+(30*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[31*12], "Année":(2001+i), "Infraction" : dataTable1[i+(31*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[32*12], "Année":(2001+i), "Infraction" : dataTable1[i+(32*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[33*12], "Année":(2001+i), "Infraction" : dataTable1[i+(33*12)].replace(/:/g, "0")},
                     {"Pays":dataTable1[34*12], "Année":(2001+i), "Infraction" : dataTable1[i+(34*12)].replace(/:/g, "0")}
                   );
}
let svg2 = dimple.newSvg("div#line-chart1", 6061, 570);
let chart2 = new dimple.chart(svg2, dataPoints2);
chart2.setBounds(60, 25, 6000, 500);
let xC1 = chart2.addCategoryAxis("x", ["Pays", "Année"]);
xC1.addOrderRule("Pays");
let y1C1 = chart2.addMeasureAxis("y", "Infraction");
let s1C1 = chart2.addSeries("Année", dimple.plot.bar);
let legend = chart2.addLegend(60, 10, 800, 20, "left");
legend._getEntries = function () {
    var orderedValues = ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012"];
    var entries = [];
    orderedValues.forEach(function (v) {
        entries.push(
        {
                key: v,
                fill: chart2.getColor(v).fill,
                stroke: chart2.getColor(v).stroke,
                opacity: chart2.getColor(v).opacity,
                series: s1C1,
                aggField: [v]
            }
        );
    }, this);
  
    return entries;
};
chart2.draw();
newDiv2.style.overflowX = "scroll";
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
