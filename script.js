// Select the element with the id "toggle"
let toggle = document.getElementById("toggle");

// Select the <body> element
let body = document.querySelector("body");

// Add a click event handler to the "toggle" element
toggle.onclick = function () {
    // Toggle the "active" class on the "toggle" element
    toggle.classList.toggle("active");

    // Toggle the "active" class on the <body> element
    body.classList.toggle("active");
};
