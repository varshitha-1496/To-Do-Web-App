let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = 'task' + (task.completed ? ' completed' : '');
    taskDiv.innerHTML = `
      <div><strong>${task.name}</strong></div>
      <div class="time">${new Date(task.time).toLocaleString()}</div>
      <div class="task-buttons">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Done'}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    list.appendChild(taskDiv);
  });
}

function addTask() {
  const name = document.getElementById("taskInput").value.trim();
  const time = document.getElementById("taskTime").value;
  if (name && time) {
    tasks.push({ name, time, completed: false });
    document.getElementById("taskInput").value = '';
    document.getElementById("taskTime").value = '';
    renderTasks();
  } else {
    alert("Please enter both task and time.");
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index].name);
  if (newTask !== null) {
    tasks[index].name = newTask;
    renderTasks();
  }
}
