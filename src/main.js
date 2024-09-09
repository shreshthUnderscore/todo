import "./style.css";
import TodoCreation from "./todoclass.js";

const addTaskBtn = document.querySelector('#add-task');
const dialogEle = document.querySelector("#dialog");

addTaskBtn.addEventListener('click', () => 
{
        dialogEle.showModal();
});

