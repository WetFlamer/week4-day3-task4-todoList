// ADD ELEMENT
const add_button = document.getElementById("add-button");
add_button.addEventListener("click", () => {
  const input = document.getElementById("input");
  //DIV0
  const div0 = document.getElementById("list");
  const div = document.createElement("div");
  div.className = "item-1";
  const p = document.createElement("p");
  p.textContent = input.value;
  p.className = "item-text";
  
  // КНОПКА DELETE
  const button = document.createElement("button");
  button.className = "delete-item";
  button.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  // CHECKBOX
  const check = document.createElement("input")
  check.type = 'checkbox'
  check.addEventListener("click", (e) => {

    if (check.checked) {
      e.target.parentElement.className = "checkB";
    } else {
      e.target.parentElement.className = "item-1";
    }
  });



  // ВЫВОД
  div.append(p, button, check);
  div0.prepend(div);
  input.value = "";
});

