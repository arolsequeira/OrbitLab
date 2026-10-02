const canvas = document.getElementById('sim-canvas');
const ctx = canvas.getContext('2d');

const angleInput = document.getElementById('angle');
const valAngle = document.getElementById('val-angle');

const velocityInput = document.getElementById('velocity');
const valVelocity = document.getElementById('val-velocity');

const gravityInput = document.getElementById('gravity');
const valGravity = document.getElementById('val-gravity');

const heightInput = document.getElementById('height');
const valHeight = document.getElementById('val-height');

function setCanvasSize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
setCanvasSize();

window.addEventListener('resize', () => {
    setCanvasSize();
    drawScene();
});


const gridSize = 25;
const barrelLength = 30;

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#162842';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x=0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for(let y= 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
    
    const groundY = canvas.height -60;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(canvas.width, groundY);
    ctx.stroke();

    const launchX = 80; 
    const launchY = groundY;

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(launchX, launchY, 6, 0, Math.PI * 2);
    ctx.fill();

    const angleDeg = parseFloat(angleInput.value);
    const angleRad = (angleDeg * Math.PI) / 180;

    const barrelEndX = launchX + barrelLength * Math.cos(angleRad);
    const barrelEndY = launchY - barrelLength * Math.sin(angleRad);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(launchX, launchY);
    ctx.lineTo(barrelEndX, barrelEndY);
    ctx.stroke();
}

function updateUI() {
    valVelocity.textContent = `${velocityInput.value}m/s`;
    valAngle.textContent = `${angleInput.value}°`;
    valGravity.textContent = `${gravityInput.value}m/s²`;
    valHeight.textContent = `${heightInput.value} m`;
    drawScene();

}

velocityInput.addEventListener('input', updateUI);
angleInput.addEventListener('input', updateUI);
gravityInput.addEventListener('input',updateUI);
heightInput.addEventListener('input',updateUI);

drawScene();
