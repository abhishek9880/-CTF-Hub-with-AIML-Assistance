const inputs = document.querySelectorAll(".input");

function addFocusClass() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function removeFocusClass() {
    let parent = this.parentNode.parentNode;
    if (this.value.trim() === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addFocusClass);
    input.addEventListener("blur", removeFocusClass);
});
