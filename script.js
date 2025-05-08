// Flag to track the toggle state
let isUpdated = false;

document.getElementById("changeBioBtn").addEventListener("click", function () {
    const bio = document.getElementById("bio");

    if (!isUpdated) {
        bio.textContent = "I'm passionate about building interactive web apps using JavaScript!";
        bio.style.color = "green";
        bio.style.fontWeight = "bold";
        isUpdated = true;
    } else {
        bio.textContent = "I'm a web development student learning JavaScript and DOM manipulation!";
        bio.style.color = "#333";
        bio.style.fontWeight = "normal";
        isUpdated = false;
    }
});
