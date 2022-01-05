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
        textInnit2.textContent = event2.code;
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == event.key) {
        textInnit3.textContent = event.keyCode;
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == 3) {
        const thisHaha = document.getElementById("audio");
        thisHaha.volume = 0.1;
        thisHaha.play();
    } else if (event.key == "w") {
        const thisHaha2 = document.getElementById("audio2");
        thisHaha2.volume = 0.1;
        thisHaha2.play();
    }
});