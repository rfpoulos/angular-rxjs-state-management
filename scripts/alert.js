const alert = document.getElementById("alert-box");
const alert$ = getData("alert");

alert$.subscribe((data) => {
    alert.textContent = data;
});