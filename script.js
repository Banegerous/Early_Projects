/* Notes for myown needs
class container (overall div)
input id inputField, type text
button id addToDo
div class to-dos, id toDoContainer (div that holds the stored items)
*/
let addMainContClass = document.getElementsByClassName('.container'); // overall container div id
let addInput = document.getElementById('inputField'); // add item input field
let addToDoBtn = document.getElementById('addToDo'); // add item button
let addToDo = document.getElementById('toDoContainer'); // div container id holding added items
let addToDoClass= document.getElementsByClassName('.to-dos'); // div container class holding added items
let addDir = document.getElementById('directions'); // directions upon submit

addToDoBtn.addEventListener('click', function () {
    var addPara = document.createElement('p');
    addPara.classList.add('para-style'); // grabs the css class we created to make it pretty
    addPara.innerText = addInput.value; // grabs the input value and uses it

    //var addDirP = document.createElement('p');
    //addDirP.textContent = '* single click to mark as done, double click to remove.';
    //addToDo.appendChild(addDirP); // adding in instructions upon input submit

    addToDo.appendChild(addPara); // adds the p tag into the div when created
    addInput.value = ''; // resets the input to a blank after each press of the button and add
    addPara.addEventListener('click', function () {
        addPara.style.textDecoration = 'line-through'; // adding css styles if clicked (to do finished)
    });
    addPara.addEventListener('dblclick', function () {
        addToDo.removeChild(addPara); // total removal of p tag - double click. addPara.remove(); worked too.
    });
});


