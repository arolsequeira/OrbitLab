const canvas = document.getElementById('sim-canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

const gridSize = 25;

ctx.strokeStyle = '#162842';
ctx.lineWidth = 1;
ctx.beginPath();

for (let x=0; x <= canvas.width; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
}

for (let y = 0; y <= canvas.height; y +=gridSize) {
    ctx.moveTo(0,y);
    ctx.lineTo(canvas.width, y);
}
ctx.stroke();

const groundY = canvas.height - 60;

ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(0, groundY);
ctx.lineTo(canvas.width, groundY);
ctx.stroke();
