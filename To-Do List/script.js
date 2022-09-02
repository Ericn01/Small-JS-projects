let toDoItems = [];
function displayItem(){
    let listItem = document.getElementById('to-do-item').value;
    if (!contains(listItem)){
        toDoItems.push(listItem)
        for (let i = 0; i < toDoItems.length; i++){
            document.getElementById('list').innerHTML += '<ul> ' + toDoItems[i] + '</ul>'; 
        }
    };
}
// Checks to see if given element is in the array.
function contains(elem){
    for (let i = 0; i < toDoItems.length; i++){
        if (elem === toDoItems[i]){return true};
    }
    return false;
}