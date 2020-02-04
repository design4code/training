export class TimelineChart {
    constructor() {
        this.chartWidth = 500;
        this.chartHeight = 300;
        this.padding = 8;
        this.dataset = [
            {"name": "Jack", "startDate": 1, "endDate": 50},
            {"name": "Jill", "startDate": 13, "endDate": 129},
            {"name": "Ben" , "startDate": 23, "endDate": 325},
            {"name": "Wallace", "startDate": 3, "endDate": 230},
            {"name": "Sue", "startDate": 17, "endDate": 129}
        ];
    }

    createSVG() {
        const base = d3.select("body");
        const chart  = base.append("canvas")
            .attr("id", "canvas")
            .attr("width", this.chartWidth)
            .attr("height",this.chartHeight);

        const context = chart.node().getContext("2d");
        var data = [1,2,13,20,23];

        const scale = d3.scale.linear()
            .range([10, 390])
            .domain([1,23]);

        data.forEach(function(d, i) {
            context.beginPath();
            context.rect(scale(d.startDate), 150, 10, 10);
            context.fillStyle="red";
            context.fill();
            context.closePath();
        });

        // canvas.selectAll("rect")
        //     .data(this.dataset)
        //     .enter()
        //     .append("rect")
        //     .attr("x", (d) => d.startDate )
        //     .attr("y", (d, i) => i * (this.chartHeight / this.dataset.length) )
        //     .attr("width", (d) => Math.abs(d.startDate - d.endDate) )
        //     .attr("height", this.chartHeight / this.dataset.length - this.padding)

        chart.selectAll("text")
            .data(this.dataset)
            .enter()
            .append("text")
            .text( d => Math.abs(d.startDate - d.endDate) )
            .attr("x", d => d.startDate + 20)
            .attr("y", (d, i) => i * (this.chartHeight / this.dataset.length)+(this.chartHeight / this.dataset.length ) / 2 )
            .attr("text-anchor", "middle")
            .attr("fill", "white");
    }

    dispose() {
    }
}

