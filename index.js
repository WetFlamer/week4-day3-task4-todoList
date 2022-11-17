const add_button = document.getElementById("add-button");

add_button.addEventListener("click", () => {
  // INPUT
  const input = document.getElementsByTagName("input")[0];
  //DIV0
  const div0 = document.getElementById("list");
  const div = document.createElement("div");
  div.className = "item-1";
  const p = document.createElement("p");
  p.textContent = input.value;
  p.className = "item-text";
  const button = document.createElement("button");
  button.className = "delete-item";
  button.setAttribute('id', 0)

  //BUTTON

  // ВЫВОД
  div.append(p, button);
  div0.prepend(div);
  input.value = "";
});

