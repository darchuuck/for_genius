const todoList = JSON.parse(localStorage.getItem('todoList'))  ||  [{
    name: 'make lunch',
    dueDate: '2023-12-10'
}, {
    name: 'help to grandpa',
    dueDate: '2012-10-07'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject) => {

        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button">Delete</button>
       
        `;

        todoListHTML += html;
    })
   

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    
    document.querySelectorAll('.delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                deleteTodo(index);
            })
        })

}


const addTodoBtn = document.querySelector('.add-todo-button');
addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
    const nameInputElement = document.querySelector('.name-todo-input');
    const name = nameInputElement.value;

    const dateInputElement = document.querySelector('.dueDate-input');
    const dueDate = dateInputElement.value;

    
    todoList.push({
        name,
        dueDate
    });

    nameInputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
    saveTodoList(); 
    
}

function deleteTodo(index) {
    todoList.splice(index, 1);

    saveTodoList(); 
    renderTodoList();
}


function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList) )
}
