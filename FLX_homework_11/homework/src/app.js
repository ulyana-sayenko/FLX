// Your code goes here
let addButton = document.getElementById('add');
let inputTask = document.getElementById('newTask');
let finishedTasks = document.getElementById('finished-tasks');
let itemCount = 0;
let maxCount=10;

function createNewElement(task) {
  let listItem = document.createElement('li');
  let checkbox = document.createElement('button');
  checkbox.className = 'checkbox';
  checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
  let label = document.createElement('label');
  label.innerText = task;
  let deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.innerHTML = "<i class='material-icons'>delete</i>";
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
}


function addTask() {
  if (inputTask.value && itemCount < maxCount) {
    itemCount++;
    let listItem = createNewElement(inputTask.value);
    finishedTasks.appendChild(listItem);
    taskEvent(listItem, finishedTask);
    inputTask.value = '';
  }
  if (itemCount === maxCount) {
    document.getElementById('notification').textContent = 'Maximum item per list are created';
    inputTask.value = '';
    inputTask.setAttribute('disabled', 'disabled');
  }
}
addButton.onclick = addTask;

function deleteTasks() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

function finishedTask() {
  let listItem = this.parentNode;
  let checkbox = listItem.querySelector('button.checkbox');
  checkbox.className = 'checkbox';
  checkbox.innerHTML = "<i class='material-icons'>check_box</i>";

  finishedTask.appendChild(listItem);
  taskEvent(listItem);

}

function taskEvent(listItem, checkboxEvent) {
  let checkbox = listItem.querySelector('button.checkbox');
  let deleteButton = listItem.querySelector('button.delete');

  checkbox.onclick = checkboxEvent;
  deleteButton.onclick = deleteTasks;
}
