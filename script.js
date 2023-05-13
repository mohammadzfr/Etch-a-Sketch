const grid = document.getElementById('grid');
const gridSizeBtn = document.getElementById('size');
let gridElements = document.querySelectorAll('.gridElement'); 
createGrid();
gridElements.forEach(element => element.addEventListener('mouseover', changeColor));
gridSizeBtn.addEventListener('click', function() {
    createGrid(prompt("Enter size of new grid",16));
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
        // grid.forEach(element => {
        //     element.style.borderColor = "green"
        // });
        grid.innerHTML = '';
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
    console.log(gridElements);
}

function changeColor(element) {
    console.log(element.target);
    element.target.classList.add('colored');
}

