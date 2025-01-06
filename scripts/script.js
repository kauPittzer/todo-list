const button = document.querySelector(".button-add-task")
const input = document.querySelector(".class-input-task")
const completeList = document.querySelector(".list-tasks")

let taskList = []


function addNewTask() {
    taskList.push({
        task: input.value,
        checked: false
    })
    input.value = ''
    showList()
}

function showList() {

    let newList = ''

    taskList.forEach((i, index) => {

        newList = newList +
            `<li class="task ${i.checked && "done"}">
            <img src="./img/check.png" alt="alt-check-na-tarefa" onclick="checkTask(${index})">
            <p>${i.task}</p>
            <img src="./img/deleteChain.png" alt="alt-deletar-tarefa" onclick="delTask(${index})">
        </li>`
    })

    completeList.innerHTML = newList
}

button.addEventListener('click', addNewTask)

function delTask(index) {

    taskList.splice(index, 1)
    showList()
}

function checkTask(index){

    taskList[index].checked = !taskList[index].checked
    showList()
}