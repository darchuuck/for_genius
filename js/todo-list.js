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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];

        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                deleteTodo(${i})
            ">Delete</button>
       
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    
    

}

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
