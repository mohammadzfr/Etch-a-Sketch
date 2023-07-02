const slider = document.getElementById("range-slider");
const output = document.getElementById("range-value");
output.innerHTML = slider.value + "x" + slider.value;
slider.oninput = function() {
  output.innerHTML = this.value + "x" + this.value;
  createGrid(this.value);
}

const grid = document.getElementById('grid');
const gridSizeBtn = document.getElementById('size');
const gridToggleBtn = document.getElementById('toggle');
const eraserBtn = document.getElementById('eraser');
const gridClearBtn = document.getElementById('clear');
const colorPicker = document.getElementById('color');
let gridElements;
createGrid();
// gridElements.forEach(element => element.addEventListener('mouseover', changeColor));
// gridSizeBtn.addEventListener('click', function() {
//     createGrid(prompt("Enter size of new grid",16));
// });
eraserBtn.addEventListener('click', function() {
    document.getElementById('color').value = "#ffffff";
});
gridClearBtn.addEventListener('click', function() {
    createGrid(slider.value);
});
gridToggleBtn.addEventListener('click', function() {
    console.log("test");
    document.querySelectorAll('#grid>div').forEach(element => element.borderSize = '0px');
    document.querySelectorAll('.gridElement').border = 'none';
});



function createGrid() {
    let tempElement;
    let size = 0;
    console.log("grid size: " + arguments[0]);
    
    //checking input size of grid
    //if no grid exists make 16x16 grid
    if (arguments[0] == null) {
        size = 16;
    }
    else {
        size = arguments[0];
        reset();
    }

    //making grid
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            tempElement = document.createElement('div');
            tempElement.classList.add('gridElement');
            grid.appendChild(tempElement);
        }
    }

    grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    gridElements = document.querySelectorAll('.gridElement'); 
    gridElements.forEach(element => element.addEventListener('mouseover', changeColor));
    console.log(gridElements);
}

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function changeColor(element) {
    console.log(element.target);
    // element.target.classList.add('colored');
    element.target.style.backgroundColor = colorPicker.value;
}

