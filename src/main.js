import "./style.css";
import TodoCreation from "./todoclass.js";
import createTodoDOM from "./tododom.js";

const addTaskBtn = document.querySelector('#add-task');
const dialogEle = document.querySelector("#dialog");
const formEle = document.querySelector('#add-task-form');
const submitBtn = document.querySelector('#submit-button');
const mainDiv = document.querySelector("#main")

addTaskBtn.addEventListener('click', () => 
{
        dialogEle.showModal();
});

submitBtn.addEventListener("click", ()=>
{
        const taskTitle = document.querySelector("#task-title");
        const taskDescription = document.querySelector("#task-description");
        const taskDate = document.querySelector("#task-date");
        const taskPriority = document.querySelector("#task-priority");
        const taskCategory = document.querySelector("#task-category");

        var todoObj = new TodoCreation(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value, taskCategory.value);

        mainDiv.appendChild(createTodoDOM(todoObj));

        dialogEle.close();


})