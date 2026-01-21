let currentSize = 18;

/* ===== APPLY SAVED DARK MODE (FIXED) ===== */
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }
});

/* ===== TOGGLE DARK MODE ===== */
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
}

/* ===== FONT SIZE ===== */
function increaseFont() {
    currentSize += 2;
    updateFont();
}

function decreaseFont() {
    currentSize -= 2;
    updateFont();
}

function updateFont() {
    document.querySelectorAll("p").forEach(p => {
        p.style.fontSize = currentSize + "px";
    });
}
