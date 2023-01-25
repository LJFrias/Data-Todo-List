
let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    // .then( () => logTodos())
    // .then( () => populateTodos())
    // .then( () => populateTodos2())
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {

    for(let i=0; i<arrayOfTodos.length; i++){

    // Find OL by ID and put it in a variable
    let todoList = document.getElementById("todo-list")

    // Creat LI element
    let todoItem = document.createElement("LI")

    // Create text element for the title
    let todoTitle =  document.createTextNode(arrayOfTodos[i].title)

    // Put LI in the OL
    todoItem.appendChild(todoTitle)
    todoList.appendChild(todoItem)

    }
}

// const populateTodos2 = () => {

//     for(let i=0; i<arrayOfTodos.length; i++) {

//     let todoSection = document.getElementById("container")

//     let todoPara = document.createElement("P")

//     let tdTitle = document.createTextNode(arrayOfTodos[i].title)

//     let tdComplete = document.createTextNode(arrayOfTodos[i].completed)

//     let tdLine = document.createTextNode(`Title: ${arrayOfTodos[i].title} status is ${arrayOfTodos[i].completed}`)

//     todoPara.appendChild(tdLine)
//     todoSection.appendChild(todoPara)



//   }

// }