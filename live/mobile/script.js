// script.js

let currentApp = null;

// Show app based on the app ID passed
const showApp = (appId) => {
    if (currentApp) {
        document.getElementById(currentApp).style.display = 'none';
    }
    currentApp = appId;
    document.getElementById(appId).style.display = 'block';
};

// Launch Browser
document.getElementById("launch-browser").addEventListener("click", () => {
    showApp("browser");
});

// Open Settings
document.getElementById("open-settings").addEventListener("click", () => {
    showApp("settings");
});

// Back Button Functionality
document.getElementById("back-btn").addEventListener("click", () => {
    if (currentApp) {
        history.back()
    }
});

document.getElementById("close-app").addEventListener("click", () => {
    if (currentApp) {
        document.getElementById(currentApp).style.display = 'none';
    }
});

// Home Button Functionality
document.getElementById("home-btn").addEventListener("click", () => {
    showApp("home");
});

// App Switcher Functionality
document.getElementById("switch-btn").addEventListener("click", () => {
    if (currentApp) {
        document.getElementById(currentApp).style.display = 'none';
    }
    const apps = ["home", "browser", "settings", "store", "files", "appman"];
    const randomApp = apps[Math.floor(Math.random() * apps.length)];
    showApp(randomApp);
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("change", (event) => {
    if (event.target.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

// Go Button in Browser
document.getElementById("go-btn").addEventListener("click", () => {
    const url = document.getElementById("url-input").value;
    document.getElementById("browser-frame").src = url.startsWith('http') ? url : `${url}`;
});

// Initialize Home App on Load
showApp("home");