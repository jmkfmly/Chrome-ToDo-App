const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODO_LS = 'ToDoList';
let toDos = [];

function LoadToDoList(){
    const loadedToDo = localStorage.getItem(TODO_LS);
    if(loadedToDo !== null){
        const parsedToDo = JSON.parse(loadedToDo);
        console.log(parsedToDo);
        parsedToDo.forEach(function(element){
            paintToDo(element.text);
        });
    }
}
function deleteToDo(li){
    const filteredToDos = toDos.filter(function(toDo){
        return toDo.id !== li.id
    });
    console.log(filteredToDos);
    toDos = filteredToDos;
    saveToDo();
}
function handleClick(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    deleteToDo(li);
}
function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    
    li.id = toDos.length + 1
    delBtn.innerText = 'Ⅹ';
    delBtn.addEventListener('click', handleClick);
    span.innerText = text;
    
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    
    const toDo ={
        text: text,
        id : li.id
    }
    toDos.push(toDo);
    saveToDo();
}
function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value='';
}
function init(){
    LoadToDoList();
    toDoForm.addEventListener('submit',handleSubmit);
}

init();