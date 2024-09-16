import "./style.css";
import TODO from "./todoclass.js";
import createTodoDOM from "./tododom.js";
import allTasksDOM from "./allTasksDOM.js";
// import checkToday from "./checkToday.js";

const addTaskBtn = document.querySelectorAll('#add-task');
const allTaskBtn = document.querySelector('#all-task');
const dialogEle = document.querySelector("#dialog");
const formEle = document.querySelector('#add-task-form');
const submitBtn = document.querySelector('#submit-button');
const mainDiv = document.querySelector("#main")
const taskContainer = document.querySelector(".task-container");


var todoArray = [];
var date = new Date();
const todaysDate = date.toLocaleDateString('en-ca')

addTaskBtn.forEach((btn) => 
{
        btn.addEventListener('click', () => 
        {
                dialogEle.showModal();
        });
})

submitBtn.addEventListener("click", ()=>
{
        const taskTitle = document.querySelector("#task-title");
        const taskDescription = document.querySelector("#task-description");
        const taskDate = document.querySelector("#task-date");
        const taskPriority = document.querySelector("#task-priority");
        const taskCategory = document.querySelector("#task-category");

        var todoObj = new TODO(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value, taskCategory.value);

        if(todoObj.dueDate == todaysDate)
        {
                mainDiv.appendChild(createTodoDOM(todoObj));
        }
        
        todoArray.push(todoObj);

        dialogEle.close();
})

allTaskBtn.addEventListener('click', () => 
{
        allTasksDOM(mainDiv, todoArray, )
});