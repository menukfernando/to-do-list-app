let tasksList = []
    
let inputEl = document.getElementById("input-el")
let addTaskBtn = document.getElementById("add-task-btn")
let deleteTaskBtn = document.getElementById("delete-task-btn")


addTaskBtn.addEventListener("click", function(){
        tasksList.push(inputEl.value)
        inputEl.value = ""
        render()
})





function render() {
    let taskListItems = ""
    for (let i = 0; i < tasksList.length; i++) {
        taskListItems += `
            <li>
                    ${tasksList[i]}
            </li>
        `
    }
    tasks.innerHTML = taskListItems  
}



deleteTaskBtn.addEventListener("click", function(){
    tasksList.pop();
    render();
})

