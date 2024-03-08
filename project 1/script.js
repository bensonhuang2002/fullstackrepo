const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");


  addTodoButton.addEventListener("click", (event) => {
    var tasky = taskName.value;
    if (tasky != '') {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(tasky));
      todoListUl.appendChild(li);
      taskName.value = '';
    }
  })

};

const question3 = () => {
  const nameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    message.textContent = `You are ${nameInput.value} or ${emailInput.value}!`;
  };

  nameInput.addEventListener('input', updateMessage);
  emailInput.addEventListener('input', updateMessage);
};

document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
  });