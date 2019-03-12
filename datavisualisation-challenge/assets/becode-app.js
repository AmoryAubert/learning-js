/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/
// PREMIER GRAPHIQUE DYNAMIC
let theFirstChild = document.getElementById("bodyContent").firstChild;
let newDiv = document.createElement("div");
let newContent = document.createTextNode("");
newDiv.appendChild(newContent);
document.getElementById("bodyContent").insertBefore(newDiv, theFirstChild);
newDiv.setAttribute("id", "bar-chart")
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
            let svg = dimple.newSvg("div#bar-chart", 800, 400);
                    let chart = new dimple.chart(svg, dataPoints);
                    chart.addCategoryAxis("x", "Année");
                    chart.addMeasureAxis("y", "Taux de criminalité");
                    chart.addSeries(null, dimple.plot.bar);
                    chart.draw();
        })
// DEUXIEME GRAPHIQUE
// TROISIEME GRAPHIQUE
let table2 = document.getElementById("table2");
