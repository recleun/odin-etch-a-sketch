const container = document.querySelector('.container');

let gridSize = 16;

function generateGrid() {
  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement('div');
      grid.className = 'grid';
      grid.onmousedown = () => {
        grid.setAttribute('active', 'true');
        grid.style.backgroundColor = 'black';
      }
      grid.onmouseenter = () => {
        if (!grid.getAttribute('active')) {
          grid.style.backgroundColor = 'darkgray';
        }
      };
      grid.onmouseleave = () => {
        if (grid.getAttribute('active')) {
          grid.style.backgroundColor = 'black';
        } else {
          grid.style.backgroundColor = 'white';
        }
      };
      gridRow.appendChild(grid);
    }
    container.appendChild(gridRow);
  }
}

function removeGrid() {
  const rows = document.querySelectorAll('.grid-row');
  rows.forEach(row => row.remove());
}

const gridInput = document.querySelector('.grid-changer input');
const applyButton = document.querySelector('.grid-changer button');

applyButton.addEventListener('click', () => {
  const inputValue = parseInt(gridInput.value) | null;
  if (inputValue >= 2 && inputValue <= 100) {
    gridSize = inputValue;
    removeGrid();
    generateGrid();
  } else {
    alert('Invalid grid size. Please use a number between 2 and 100!');
  }
  gridInput.value = '';
  gridInput.focus();
});

generateGrid();
