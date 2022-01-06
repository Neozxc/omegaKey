const random = document.getElementById("h3Text");

const textInnit = document.getElementById("appearsLater");
const textInnit2 = document.getElementById("appearsLater2");
const textInnit3 = document.getElementById("appearsLater3");

// Middle text
document.addEventListener("keypress", (event) => {
    if (event.key) {
        random.textContent = event.keyCode;
        console.log(`${event.key} was pressed.`, event);
    }
});

// event.key
document.addEventListener("keypress", (event2) => {
    if (event2.key) {
        textInnit.textContent = event2.key;
    }
});

// event.code
document.addEventListener("keypress", (event3) => {
    if (event3.key) {
        textInnit2.textContent = event3.code;
    }
});

// event.which
document.addEventListener("keypress", (event4) => {
    if (event4.key) {
        textInnit3.textContent = event4.keyCode;
    }
});

// sound when presses w
document.addEventListener("keypress", (event5) => {
if (event5.key.toUpperCase() || event5.key.toLowerCase()) {
        const thisHaha2 = document.getElementById("audio2");
        thisHaha2.volume = 0.1;
        thisHaha2.play();
    }
});