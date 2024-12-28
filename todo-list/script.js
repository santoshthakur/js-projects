function addTask() {
  const newTaskInput = document.getElementById('taskInfo');
  const newTask = newTaskInput.value.trim();

  if (newTask === "") {
    alert('Please Enter a Task');
    return;
  }

  const taskListDiv = document.getElementById('taskList');
  const listItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = newTask;
  listItem.appendChild(taskSpan);

  const removeButton = document.createElement('button');
  removeButton.classList.add('removebtn');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function () {
    removeTask(newTask, listItem);
  };
  listItem.appendChild(removeButton);

  taskListDiv.appendChild(listItem);
  saveTaskToLocalStorage(newTask);
  newTaskInput.value = '';
}

function enterAddTask(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function saveTaskToLocalStorage(task) {
  let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

function loadTasksFromLocalStorage() {
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskListDiv = document.getElementById('taskList');

  taskList.forEach(task => {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;
    listItem.appendChild(taskSpan);

    const removeButton = document.createElement('button');
    removeButton.classList.add('removebtn');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
      removeTask(task, listItem);
    };
    listItem.appendChild(removeButton);

    taskListDiv.appendChild(listItem);
  });
}

function removeTask(task, listItem) {
  let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList = taskList.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  listItem.remove();
}

// Initialize the task list on page load
window.onload = loadTasksFromLocalStorage;