function drop(e) {
  e.preventDefault();
  let taskId = e.dataTransfer.getData("text");
  if (e.target.id.includes("task")) return;
  e.target.appendChild(document.getElementById(taskId));
  updateQuantities();
}
function allowdrop(e) {
  e.preventDefault();
}
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}
function updateQuantities() {
  const todoColumn = document.getElementById("todo");
  const inProgressColumn = document.getElementById("in-progress");
  const inQaColumn = document.getElementById("in-qa");
  const doneColumn = document.getElementById("done");

  const todoHeader = document.getElementById("todo-header");
  const inProgressHeader = document.getElementById("in-progress-header");
  const inQaHeader = document.getElementById("in-qa-header");
  const doneHeader = document.getElementById("done-header");
  updateHeader(todoHeader, todoColumn);
  updateHeader(inProgressHeader, inProgressColumn);
  updateHeader(inQaHeader, inQaColumn);
  updateHeader(doneHeader, doneColumn);
}
function updateHeader(header, column) {
  header.innerText = `${header.innerText.split(" ")[0]} (${
    column.children.length
  })`;
}

updateQuantities();
