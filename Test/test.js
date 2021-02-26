const assert = require("assert");
const { fstat } = require("fs");
const TaskManager = require("../js/taskManager.js");

describe('TaskManager', () => {
    describe('new class initialization', () => {
        it('creates an empty array', () => {
            // Setup
            const newTask = new TaskManager();
            const emptyArray = [];
            // Verify
            assert.deepEqual(newTask.tasks, emptyArray);
        });
    });
});

describe('Task', () => {
    describe('.addTask', () => {
        it('adds a new task to the page', () => {
            // Setup                        
            const newTask = new TaskManager(1);
            const task = {
                id: newTask.currentId,
                name: 'RichieS',
                description: 'Timetogetsomeworkdone',
                assignedTo: 'SeethalT',
                dueDate: '2021 - 02 - 20',
                status: 'Pending',
            };
            // Exercise
            newTask.addTask(task.name, task.description, task.assignedTo, task.dueDate, task.status);
            // Verify
            assert.deepEqual(newTask.tasks[0], task);
        });
        it('increments current ID by 1', () => {
            // Setup
            // Setup                        
            const newTask = new TaskManager(4);
            const task = {
                id: newTask.currentId,
                name: 'RichieS',
                description: 'Timetogetsomeworkdone',
                assignedTo: 'SeethalT',
                dueDate: '2021 - 02 - 20',
                status: 'Pending',
            };

            newTask.addTask(task.name, task.description, task.assignedTo, task.dueDate, task.status);
            assert.equal(newTask.currentId, 5);
        });
    });
    describe('.deleteTask', () => {
        it('removes a task from the page', () => {
            // Setup
            const newTask = new TaskManager(0);
            const taskOne = {
                id: newTask.currentId,
                name: 'taskOne',
                description: 'taskOneDescription',
                assignedTo: 'taskOneAssignee',
                dueDate: '2021-02-20',
                status: 'Pending',
            };
            const taskTwo = {
                id: newTask.currentId + 1,
                name: 'taskTwo',
                description: 'taskTwoDescription',
                assignedTo: 'taskTwoAssignee',
                dueDate: '2021-02-20',
                status: 'Pending',
            };
            // Exercise
            newTask.addTask(taskOne.name, taskOne.description, taskOne.assignedTo, taskOne.dueDate, taskOne.status);
            newTask.addTask(taskTwo.name, taskTwo.description, taskTwo.assignedTo, taskTwo.dueDate, taskTwo.status);
            newTask.delete(taskOne.id);
            // Verify
            assert.deepEqual(newTask.tasks, [taskTwo]);
        });
    });
    describe('.getTaskById', () => {
        it('matches task ID#', () => {
            // Setup
            const newTasks = new TaskManager();
            const task = {
                id: newTasks.currentId,
                name: 'taskOne',
                description: 'taskOneDescription',
                assignedTo: 'taskOneAssignee',
                dueDate: '2021-02-20',
                status: 'Pending',
            };
            // Exercise
            newTasks.addTask(task.name, task.description, task.assignedTo, task.dueDate, task.status);
            const result = newTasks.getTaskById(task.id);
            // Verify
            assert.deepStrictEqual(result, task);
        });
    });
});