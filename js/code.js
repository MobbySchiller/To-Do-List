class ToDoList {
    constructor({
        input,
        addBtn,
        output,
        taskCounter
    }) {
        this.input = input;
        this.addBtn = addBtn;
        this.output = output;
        this.taskCounter = taskCounter;
        this.numberOfTasks = 0;
        this.getTask();
    }


    getTask() {
        this.addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(this.input.value != '') {
            this.addTask(this.input.value);
            this.input.value = '';
            };
        })
    }

    addTask(task) {
        const liElement = document.createElement('li');
        liElement.setAttribute('class', 'task-area__list-element')
        liElement.innerHTML = `${task} <button class="task-area__remove-button border border--concave">usuń</button>`;
        this.output.appendChild(liElement);
        liElement.querySelector('button').addEventListener('click', (event) => this.removeTask(event))
        this.numberOfTasks++
        this.countTasks();
    }

    removeTask(event) {
        event.target.parentNode.remove();
        this.numberOfTasks--;
        this.countTasks();
    }

    countTasks() {
        this.taskCounter.textContent = this.numberOfTasks;
    }
}

const toDoList = new ToDoList({
    input: document.querySelector('.task-form__input'),
    addBtn: document.querySelector('.task-form__add-button'),
    output: document.querySelector('.task-area__list'),
    taskCounter: document.querySelector('.bottom-bar__task-counter')
})