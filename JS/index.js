// Variables for the input fields within the forms
const description = document.querySelector('#description');
const name2 = document.querySelector('#name');
const assignedPerson = document.querySelector('#assigned-person');
const dateItself = document.querySelector('#date-input');
const statusCheck = document.querySelector('#status');
const submitButton = document.querySelector('#submit-button');
const goToTasks = document.querySelector('#task-card');
const newTask = new TaskManager();
newTask.load();
newTask.render();

// Submitting will validate check all inputs
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Validate name of person creating new task has more than 5 characters
    if (name2.value.length > 5) {
        name2.classList.add('is-valid');
        name2.classList.remove('is-invalid');
    } else {
        name2.classList.add('is-invalid');
        name2.classList.remove('is-valid');
        return false;
    };
    // Validate description length is more than 5 characters
    if (description.value.length > 5) {
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
    } else {
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
        return false;
    };
    // Validate name of person assigned to task has more than 5 characters
    if (assignedPerson.value.length > 5) {
        assignedPerson.classList.add('is-valid');
        assignedPerson.classList.remove
    } else {
        assignedPerson.classList.add('is-invalid');
        assignedPerson.classList.remove('is-valid');
        return false;
    };
    // Validate a correct date is entered
    if (dateItself.value != '') {
        dateItself.classList.add('is-valid');
        dateItself.classList.remove('is-invalid');
    } else {
        dateItself.classList.add('is-invalid');
        dateItself.classList.remove('is-valid');
        return false;
    };
    // Validate a task status has been selected
    if (statusCheck.value != '') {
        statusCheck.classList.add('is-valid');
        statusCheck.classList.remove('is-invalid');
    } else {
        statusCheck.classList.add('is-invalid');
        statusCheck.classList.remove('is-valid');
        return false;
    };
    newTask.addTask(name2.value, description.value, assignedPerson.value, dateItself.value, statusCheck.value);
    removeFields();
    newTask.render();

    // Reset all input fields and clear it of previous input
    function removeFields() {
        name2.value = '';
        name2.classList.remove('is-valid');
        description.value = '';
        description.classList.remove('is-valid');
        assignedPerson.value = '';
        assignedPerson.classList.remove('is-valid');
        dateItself.value = '';
        dateItself.classList.remove('is-valid');
        statusCheck.value = '';
        statusCheck.classList.remove('is-valid');
    }
    newTask.save();
});
goToTasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        event.preventDefault();
        const parentLi = event.target.parentElement.parentElement.parentElement.parentElement;
        let taskId = Number(parentLi.dataset.taskId);
        let task = newTask.getTaskById(taskId);
        let doneButton = document.querySelector('#done-invisible');
        if (task.status === 'In Progress' || task.status === 'Pending') {
            task.status = 'Completed';
            newTask.save();
            newTask.render();
        };

    };
    if (event.target.classList.contains('delete-button')) {
        event.preventDefault();
        const parentLi = event.target.parentElement.parentElement.parentElement.parentElement;
        let taskId = Number(parentLi.dataset.taskId);
        newTask.delete(taskId);
        newTask.save();
        newTask.render();
    };


});