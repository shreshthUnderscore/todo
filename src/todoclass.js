export class TodoCreation
{

    constructor(title, description, dueDate, priority)
    {        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get title()
    {
        return this._title;
    }

    set title(value)
    {
        if(!value)
        {
            return "Title cannot be empty";
        }
        else
        {
            this._title = value;
        }
    }
}


// default export TodoCreation;