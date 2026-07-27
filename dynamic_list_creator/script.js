const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const ul = document.getElementById("list");

addBtn.addEventListener('click', () => {
    if (input.value === "") {
        alert("Bhai khali hai");
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = input.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    // Double-click to edit
    text.addEventListener("dblclick", () => {
        text.contentEditable = "true";
        text.focus();
    });

    // Save on Enter
    text.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            text.contentEditable = "false";
        }
    });

    // Save when clicked outside
    text.addEventListener("blur", () => {
        text.contentEditable = "false";
    });

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(text);
    li.appendChild(delBtn);

    ul.appendChild(li);
    input.value = "";
});