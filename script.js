document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".rows");
    const column1 = document.querySelector(".column1");
    const column2 = document.querySelector(".column2");


    for (let i = 0; i < 56; i++) {
        const couchIcon = document.createElement("i");
        couchIcon.classList.add("fa-solid", "fa-couch");
        column1.appendChild(couchIcon);
        i < 28 ? column1.appendChild(couchIcon) : column2.appendChild(couchIcon);
    };

    for (let i = 0; i < 7; i++) {
        const span = document.createElement("span");
        span.textContent = String.fromCharCode(97 + i); // ASCII code for 'a' is 97
        container.appendChild(span);
    };
});