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

        const x = d3.scaleBand()
            .domain(data.map((d) => { return d.name }))
            .range([0, 400])
            .paddingInner(0.3)
            .paddingOuter(0.3);

        const y = d3.scaleLinear()
            .domain([0,d3.max(data,(d)=> {return d.height})])
            .range([0,400])

        const rects = svg.selectAll("rect")
            .data(data);
        
            rects
            .enter()
            .append("rect")
            .attr("y",20)
            .attr("x",(d)=> {
                console.log('x',x(d.name))
                return x(d.name)})
            .attr("width", x.bandwidth)
            .attr("height", 
            (d)=> {
                console.log('y',y(d.height))
                return y(d.height)}
                )
            .attr("fill", "red")

        // const rectangles = svg.selectAll("rectangles").data(data)

        // rectangles.enter()
        //     .append("rect")
        //     .attr("x",(d,i)=> {
        //         return(i*50) +100
        //     })
        //     .attr("y",5)
        //     .attr("height",(d)=> {
        //         return d.height
        //     })
        //     .attr("width",30)

    });




            // const dataCircles = svg.selectAll("circle")
        //     .data(data)

        // dataCircles.enter()
        //     .append("circle")
        //     .attr("cx", (d, i) => {
        //         return (i * 100) + 200;
        //     })
        //     .attr("cy", 200)
        //     .attr("r", (d) => {
        //         console.log(d.name)
        //         return d.height /7;
        //     })
        //     .attr("fill", "red")