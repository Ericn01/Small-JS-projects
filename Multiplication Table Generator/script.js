/*
* The goal of this project is to create a multiplication table based off the user's desired dimensions. 
* The size of the table will be determined by the input value given by the user. 
* Table is square, therefore the number of rows will be equivalent to the number of columns. 
* A seperate goal is to have a good looking table, therefore some css styling will be required.
*/

// colors selected for different parts of the table. The indices of each array represents the color palette they're part of.
let headColors = ['#ce1141', '#4f4aad', '#2922a5', '#f9df6e', '#ea4682', '#bc5090', '#0B94B3']; // heavier tones.
let bodyColors = ['#e7a801', '#d7f9f8', '#d33457', '#1982c4', '#eac4d5', '#68aa97', '#708E39']; // lighter tones selected.
let squareColors = ['#ffa600', '#d6e6ff', '#efb4ac', '#caffbf', '#e5c185', '#529985', '#8EBB3B']; // body color, but slightly stronger.

// Creates the multiplication table and appends it to the document.
function generateTable(){
    let parentElement = document.getElementById('tables');
    let table = document.createElement('table');    
    let numRows = parseInt(document.getElementById('size-input').value);
    let tableBody = document.createElement('tbody');
    let highlightSquares = document.getElementById('highlight-squares').checked;
    let randomColors = document.getElementById('random-colors').checked;
    let colors = colorPicker(); // returns an array containing 3 randomly selected colors for th, td, and td that are square values

    if (numRows <= 35){
    // Generating square body for the table
    for (let rowIndex = 1; rowIndex <= numRows; rowIndex++){
        let currentRow = document.createElement('tr');
        for (let colIndex = 1; colIndex <= numRows; colIndex++){
            if (rowIndex === 1 || colIndex === 1){
                let headCell = document.createElement('th')
                if ((rowIndex === 1 && colIndex !== 1) || rowIndex === 1 && colIndex === 1){headCell.innerText = colIndex;}
                else if (rowIndex !== 1 && colIndex === 1){headCell.innerText = rowIndex;}
                let headingColor = 'lightgreen';
                if (randomColors){
                    headingColor = colors[0]; 
                }
                currentRow.style.backgroundColor = headingColor;
                currentRow.appendChild(headCell);
            } 
            else{
                let cell = document.createElement('td');
                let cellColor = 'lightgoldenrodyellow';
                if (randomColors){
                    cellColor = colors[1];
                }
                cell.innerText = rowIndex * colIndex;
                cell.style.backgroundColor = cellColor;
                // The users wants square values to be highlighted
                if (highlightSquares){
                    if (isSquare(rowIndex, colIndex)){
                        let squareColor = '#F5EEB0';
                        if (randomColors){
                            squareColor = colors[2];
                        }
                        cell.style.backgroundColor = squareColor;
                        cell.style.fontWeight = 'bold';
                    }
                }
                currentRow.appendChild(cell);
            }
        }
        tableBody.appendChild(currentRow);
    }
    table.appendChild(tableBody);
    parentElement.appendChild(table);
    }
    else{
        document.getElementById('tables').innerHTML = '<h3> The multiplication table size cannot be greater than 35 rows <h3>';
    }
    document.getElementById('generate-table-btn').disabled = true; // stops the user from generating another table until it is cleared
    document.getElementById('table-msg').innerText = 'Table of size ' + numRows + 'x' + numRows + ' has been created';
}

// Clears the generated table off the screen
function clearTables(){
    document.getElementById('tables').innerHTML = '';
    document.getElementById('generate-table-btn').disabled = false;
    document.getElementById('table-msg').innerText = '';
}
// Checks to see if the given value is a square. In this case, checking if the rowIndex is equal to the colIndex is sufficient
function isSquare(rIndex, cIndex){
    return rIndex === cIndex;
}
// returns an array containing the background color attributes for the table, selected at random
function colorPicker(){
    let paletteNum = randomNum(headColors.length);
    let headCellColor = headColors[paletteNum];
    let bodyCellColor = bodyColors[paletteNum];
    let squareCellColor = squareColors[paletteNum];
    return [headCellColor, bodyCellColor, squareCellColor];
}
// returns a random value within the range of color palettes
function randomNum(numPalletes){
    return Math.ceil(Math.random() * numPalletes) - 1;
}

// We only want one table to appear at any time 