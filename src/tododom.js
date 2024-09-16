import { TodoCreation } from "./todoclass";

export default function createTodoDOM(todoObj)
{
    var todoCardDiv = document.createElement("div");
    todoCardDiv.classList.add("card");

    var taskTitle = document.createElement("div");
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = todoObj._title;

    var taskDescription = document.createElement("div");
    taskDescription.classList.add("taskDescription");
    taskDescription.textContent = todoObj.description;
    
    var taskDate = document.createElement("div");
    taskDate.classList.add("taskDate");
    taskDate.textContent = todoObj.dueDate;
    
    var taskPriority = document.createElement("div");
    taskPriority.classList.add("taskPriority");
    taskPriority.textContent = todoObj.priority;
    
    var taskCategory = document.createElement("div");
    taskCategory.classList.add("taskCategory");
    taskCategory.textContent = todoObj.category;

    todoCardDiv.appendChild(taskTitle);
    todoCardDiv.appendChild(taskDescription);
    todoCardDiv.appendChild(taskDate);
    todoCardDiv.appendChild(taskPriority);
    todoCardDiv.appendChild(taskCategory);

    return todoCardDiv;
}