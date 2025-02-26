const { default: TakeAttendance } = require("./TakeAttendance");

document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});

module.exports = TakeAttendance;