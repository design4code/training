// import files you want part of your library here.
import {MyClass} from "./my-class.js"
import {TimelineChart} from "./timeline-chart.js"


// export your api here.
export {MyClass}
export {TimelineChart}

const chart = new TimelineChart();
chart.createSVG();