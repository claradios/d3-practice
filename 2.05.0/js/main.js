/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/
const data = [25,20,10,12,15]
const svg = d3.select("#chart-area").append("svg")
    .attr("width",400)
    .attr("height",400)

// const circle= svg.append("circle")
//     .attr("cx",200)
//     .attr("cy",200)
//     .attr("r",100)
//     .attr("fill","blue")

// const rectangle = svg.append("rect")
//     .attr("x",5)
//     .attr("y",5)
//     .attr("width",30)
//     .attr("height",30)
//     .attr("fill","aquamarine")

const dataCircles = svg.selectAll("circle")
    .data(data)

    dataCircles.enter()
        .append("circle")
            .attr("cx",(d,i)=> {
                return (i * 50) + 25;
            })
            .attr("cy",200)
            .attr("r",(d)=> {
                return d;
            })
            .attr("fill","red")
