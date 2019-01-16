const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    setData("alert", input.value);
})