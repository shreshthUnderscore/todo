export default function checkToday(todoObj)
{
    var date = new Date();
    const todaysDate = date.toLocaleDateString('en-ca')
    
    if(todoObj.dueDate() == todaysDate)
    {
        return true;
    }
    else
    {
        return false;
    }
}