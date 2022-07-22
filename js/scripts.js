class Todo {

    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {

        //Clone tamplete
        let template = document.querySelector('.task').cloneNode(true);

        //Remove hide class
        template.classList.remove('hide');
        //Manipulate text
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container');

        //Insert list
        list.appendChild(template);

        //add event to tasks
        this.addEvents();

        this.checkTasks('add');

    }

    removeTask(task) {
       
        //find the element
        let parentEl = task.parentElement;

        //remove from list
        parentEl.remove();

        this.checkTasks('remove');
    }

    completeTask(task) {
        
        //add the done class
        task.classList.add('done');
    }

    addEvents() {

        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        //add remove event
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this);
        });

        //add task complete event
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this);
        });

    }

    checkTasks(command) {

        let msg = document.querySelector('#empty-tasks');

        //logic of adding or removing tasks
        if(command === 'add') {
            this.totalTasks += 1;
        } else if(command === 'remove') {
            this.totalTasks -= 1;
        }

        //checks if it has more than one task, and adds or removes a class
        if(this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }

    }
}

let todo = new Todo();

//Events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    let taskText = document.querySelector('#task');

    if(taskText.value != '') {
        todo.addTask(taskText.value);
    }
    
    //clear text field
    taskText.value = '';

});