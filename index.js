const random = document.getElementById("h3Text");

const textInnit = document.getElementById("appearsLater");
const textInnit2 = document.getElementById("appearsLater2");
const textInnit3 = document.getElementById("appearsLater3");

document.addEventListener("keypress", (event) => {
    if (event.key) {
        random.textContent = event.keyCode;
        console.log(`${event.key} was pressed.`, event);
    }
});

document.addEventListener("keypress", (event2) => {
    if (event2.key) {
        textInnit.textContent = event2.key;
    }
});

document.addEventListener("keypress", (event3) => {
    if (event3.key) {
        textInnit2.textContent = event3.code;
    }
});

document.addEventListener("keypress", (event4) => {
    if (event4.key) {
        textInnit3.textContent = event4.keyCode;
    }
});

document.addEventListener("keypress", (event5) => {
if (event5.key == "w".toLocaleLowerCase() || event5.key == "w".toLocaleUpperCase()) {
        const thisHaha2 = document.getElementById("audio2");
        thisHaha2.volume = 0.1;
        thisHaha2.play();
    }
});