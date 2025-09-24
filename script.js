// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle when deleting
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});