export default class TodoCreation
{

    constructor(title, description, dueDate, priority, category)
    {        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.category = category;
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

