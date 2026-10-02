const canvas = document.getElementById('sim-canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

console.log("canvas width:", canvas.width, "height:", canvas.height);

ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 100, 100);