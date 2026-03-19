const btn = document.getElementById("toggle");

function updateToggleLabel() {
    const isDarkMode = document.body.classList.contains("dark");
    btn.textContent = isDarkMode ? "Toggle to Light Mode" : "Toggle to Dark Mode";
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateToggleLabel();
});

updateToggleLabel();