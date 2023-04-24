const grid = document.getElementById('grid');
let gridElements;

createGrid();
function createGrid() {
    console.log(arguments.value);
    let size = 0;
    if (arguments.value == null) {
        size = 16;
    }
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            gridElements = document.createElement('div');
            gridElements.classList.add('gridElement');
            grid.appendChild(gridElements);
        }
    }
}