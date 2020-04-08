/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

d3.json("data/buildings.json")
    .then((data) => {

        data.forEach((d) => {
            d.height = +d.height;
        });

        const svg = d3.select("#chart-area").append("svg")
            .attr("width", 800)
            .attr("height", 800)

        const dataCircles = svg.selectAll("circle")
            .data(data)

        dataCircles.enter()
            .append("circle")
            .attr("cx", (d, i) => {
                return (i * 100) + 200;
            })
            .attr("cy", 200)
            .attr("r", (d) => {
                console.log(d.name)
                return d.height /7;
            })
            .attr("fill", "red")
    });