//This file will contain the code for generating SVG drawings and visualization.


// Add your SVG drawing logic here
const barChart = document.getElementById('barChart');

const data = [350, 40, 70, 500, 300];
const barWidth = 80;
const gap = 20;

const maxVal = Math.max(...data);
const chartHeight = 350;

//drawing bars
data.forEach((val, i) => {
    const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const barHeight = (val / maxVal) * chartHeight;

    bar.setAttribute("x", i * (barWidth + gap) + 50);
    bar.setAttribute("y", chartHeight - barHeight + 30);
    bar.setAttribute("width", barWidth);
    bar.setAttribute("height", barHeight);
    bar.setAttribute("fill", "#8bd3fc");

    barChart.appendChild(bar);

});



// Example: Draw a simple circle in the SVG
// const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// circle.setAttribute('cx', '400');
// circle.setAttribute('cy', '250');
// circle.setAttribute('r', '50');
// circle.setAttribute('fill', 'blue');
// svg.appendChild(circle);