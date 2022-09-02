let toDoItemsHistory = [];

// Displays the to-do list items on the screen
function displayItem(){
    let listItem = document.getElementById('to-do-item').value;
    if (!contains(listItem) && listItem !== ""){ // we don't want to add an empty list item or an item that already exists in the list
        toDoItemsHistory.push(listItem)
        document.getElementById('list-items').innerHTML += "<h3> <input type='checkbox' id='item'> " + listItem;
    };
}

// Clears the to do list 
function clear(){
    document.getElementById('list-items').innerHTML = '';
    toDoItemsHistory.forEach(listItem =>
    {
        listItem = "";
    })
}

// Checks to see if given element is in the item list array.
function contains(elem){
    for (let i = 0; i < toDoItemsHistory.length; i++){
        if (elem === toDoItemsHistory[i]){
            return true
        }
    }
    return false;
}