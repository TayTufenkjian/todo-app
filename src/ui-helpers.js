// Helper functions for creating/updating HTML elements

function createInput(type, id, name, required = false) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = name;
  input.required = required;
  return input;
}

function createFormField(type, id, name, labelText, required = false) {
  const div = document.createElement("div");
  div.classList.add("form-field");

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;

  const input = createInput(type, id, name, required);

  div.append(label, input);
  return div;
}

function createPriorityField(fieldID) {
  const priorityField = document.createElement("div");
  priorityField.classList.add("form-field");

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority";
  priorityLabel.for = fieldID;

  const prioritySelect = document.createElement("select");
  prioritySelect.id = fieldID;

  const priorityLevels = ["low", "medium", "high"];
  priorityLevels.forEach((level) => {
    const priorityOption = document.createElement("option");
    priorityOption.value = level;
    priorityOption.textContent = level;
    prioritySelect.append(priorityOption);
  });

  priorityField.append(priorityLabel, prioritySelect);
  return priorityField;
}

function createButton(text, functionOnClick, btnClass = false) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.type = "button";
  if (btnClass) btn.classList.add(btnClass);
  btn.addEventListener("click", () => {
    functionOnClick();
  });
  return btn;
}

function createButtonInDiv(text, functionOnClick, btnClass = false) {
  const div = document.createElement("div");
  const btn = createButton(text, functionOnClick, btnClass);
  div.append(btn);
  return div;
}

function clearPageContent() {
  document.querySelector("main").innerHTML = "";
}

function createPageHeader(text) {
  const header = document.createElement("h1");
  header.textContent = text;
  return header;
}

// Standard active nav menu item behavior
function listenForActiveNavItem() {
  document.getElementById("show-todos").classList.add("active");
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((navItem) =>
    navItem.addEventListener("click", (event) => {
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      event.target.classList.add("active");
    })
  );
}

// Update the active nav menu item when something else happens
function updateActiveNavItem(navItemID) {
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById(navItemID).classList.add("active");
}

export {
  createInput,
  createFormField,
  createPriorityField,
  createButton,
  createButtonInDiv,
  clearPageContent,
  createPageHeader,
  updateActiveNavItem,
  listenForActiveNavItem,
};
