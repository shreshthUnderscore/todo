import createTodoDOM from "./tododom";

export default function allTasksDOM (div, array, container)
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

    const h1 = document.querySelector("section");
    h1.textContent = "All Todos"


    array.forEach(element => {
        div.appendChild(createTodoDOM(element));
    });
}