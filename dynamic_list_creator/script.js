const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const ul = document.getElementById("list")
addBtn.addEventListener('click',()=>{
    if(input.value === ""){
        alert("Bhai khali hai");
        return;
    }
    console.log(input.value)

    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    li.textContent = input.value;
    delBtn.addEventListener('click',()=>{
        li.remove()
    })
    li.appendChild(delBtn)
    ul.appendChild(li);
    input.value = "";

})