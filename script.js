const birthDate = new Date('2000-10-14');
const container = document.getElementById('container');
const weeksInYear = 52;
const years = 67;
const totalWeeks = weeksInYear * years;

// Calculate the number of weeks lived
const currentDate = new Date();
const timeDiff = currentDate - birthDate;
const weeksLived = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

// Function to adjust the size of the squares dynamically
function adjustSquareSize() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const squareSize = Math.min(containerWidth / weeksInYear, containerHeight / years) - 1;
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });
}

// Create the squares
for (let i = 0; i < totalWeeks; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if (i < weeksLived) {
        square.classList.add('filled');
    }
    container.appendChild(square);
}

// Adjust square size on load and resize
window.addEventListener('load', adjustSquareSize);
window.addEventListener('resize', adjustSquareSize);
