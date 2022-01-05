const random = document.getElementById("h3Text");

const textInnit = document.getElementById("appearsLater");
const textInnit2 = document.getElementById("appearsLater2");
const textInnit3 = document.getElementById("appearsLater3");

document.addEventListener("keypress", (event) => {
    if (event.key == event.key) {
        random.textContent = event.keyCode;
        console.log(`${event.key} was pressed.`, event);
    }
});

document.addEventListener("keypress", (event2) => {
    if (event2.key == event2.key) {
        textInnit.textContent = event2.key;
    }
});

document.addEventListener("keypress", (event2) => {
    if (event2.key == event2.key) {
        textInnit2.textContent = event2.keyCode;
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == event.key) {
        textInnit3.textContent = event.code;
    }
});