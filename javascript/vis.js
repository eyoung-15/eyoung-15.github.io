// Add your SVG drawing logic here
const svg = document.getElementById('vis');

// Example: Draw a simple circle in the SVG
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '400');
circle.setAttribute('cy', '250');
circle.setAttribute('r', '50');
circle.setAttribute('fill', 'blue');
svg.appendChild(circle);