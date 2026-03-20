const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function enableInlineEdit(textRef) {
    textRef.addEventListener("dblclick", () => {
        const previousText = textRef.textContent;
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = previousText;
        editInput.classList.add("edit-input");

        textRef.replaceWith(editInput);
        editInput.focus();
        editInput.select();
        let isCancelled = false;

        const saveEdit = () => {
            if (isCancelled) {
                textRef.textContent = previousText;
                editInput.replaceWith(textRef);
                return;
            }

            const updatedText = editInput.value.trim() || previousText;
            textRef.textContent = updatedText;
            editInput.replaceWith(textRef);
        };

        editInput.addEventListener("blur", saveEdit, { once: true });
        editInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                editInput.blur();
            }

            if (event.key === "Escape") {
                isCancelled = true;
                editInput.blur();
            }
        });
    });
}

addBtn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Mat kar lala...!!!")
        return;
    }

    const li = document.createElement("li");
    const textRef = document.createElement("span");
    const delBtn = document.createElement("button");

    textRef.textContent = input.value.trim();
    enableInlineEdit(textRef);

    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    delBtn.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(textRef);
    li.appendChild(delBtn)
    list.appendChild(li);

    input.value = "";

})