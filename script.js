
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
    .then( (res) => res.json() )
    .then( (data) => arrayOfTodos = data )
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


const getByUser = () => {
    
    clearTodos()

    const numberInput = document.getElementById("num-input").valueAsNumber

    const filteredArray = arrayOfTodos.filter((arr) => arr.userId == numberInput)

    console.log(filteredArray)
    
    for(let i=0; i<filteredArray.length; i++){

        let todoList = document.getElementById("todo-list")
    
        let todoItem = document.createElement("LI")
    
        let todoTitle =  document.createTextNode(`User: ${filteredArray[i].userId} Title: ${filteredArray[i].title}`)
    
        todoItem.appendChild(todoTitle)
        todoList.appendChild(todoItem)
    
        }
    


}


const clearTodos = () => {

    let todos = document.getElementsByTagName("OL")
   

    for (i=0; i < todos.length; i++) {
        console.log(todos[i].id)
        todos[i].innerHTML = null
      }  

}

const showComplete = () => {

    clearTodos()

    const filteredArray = arrayOfTodos.filter((arr) => arr.completed == true)

    console.log(filteredArray)

    for(let i=0; i<filteredArray.length; i++){

        let todoList = document.getElementById("todo-list")
    
        let todoItem = document.createElement("LI")
    
        let todoTitle =  document.createTextNode(`User: ${filteredArray[i].userId} Title: ${filteredArray[i].title}`)
    
        todoItem.appendChild(todoTitle)
        todoList.appendChild(todoItem)
    
        }

}

const showIncomplete = () => {

    clearTodos()

    const filteredArray = arrayOfTodos.filter((arr) => arr.completed == false)

    console.log(filteredArray)

    for(let i=0; i<filteredArray.length; i++){

        let todoList = document.getElementById("todo-list")
    
        let todoItem = document.createElement("LI")
    
        let todoTitle =  document.createTextNode(`User: ${filteredArray[i].userId} Title: ${filteredArray[i].title}`)
    
        todoItem.appendChild(todoTitle)
        todoList.appendChild(todoItem)
    
        }

}



// DONE - Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
// DONE - Fetch the same data.
// DONE - Store the data in a variable.
// DONE - Add an input for the userID. This input should only take in a number from 1 - 10.
// DONE - Add a button that when clicked will:
// DONE - clear the previous todos from the view
// and populate it with only todos with the userID that matches the number inputted.
// then stores the currently filtered todos in a variable so that ...
// You can create two more buttons that when clicked:

// removes those todos from the view
// and shows only todos that are either:
// completed
// not completed

