let isLoggedIn = false;
var showapps = 0;
console.log('booting up...');
console.clear();
console.log('Loding LogOn Ui...');
document.getElementById("login-screen").style.display = "block";
document.getElementById("boot").style.display = "none";
document.getElementById("apps").style.display = "block";
// Function to log in

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login simulation
    if (username === "user" && password === "pass") {
        isLoggedIn = true;
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("desktop").style.display = "flex";
        loadInitialApps();
    } else {
        alert("Invalid credentials");
    }
}

// Load initial applications on the desktop
function loadInitialApps() {
    const appsArea = document.getElementById("apps");
    appsArea.innerHTML += `<div class="app-window" id="browser">
                                <div class="header" onmousedown="startDrag(event, 'browser')">
                                    Jacobcallisono Browser V0.2.1 <button onclick="closeApp('browser')">X</button>
                                </div>
                                <div class="content">
                                <iframe src="browser/index.html" width=600 height=420></iframe>
                                </div>
                            </div>
                            <div class="app-window" id="cmd">
                                <div class="header" onmousedown="startDrag(event, 'cmd')">
                                    Command Prompt <button onclick="closeApp('cmd')">X</button>
                                </div>
                                <div class="content">
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <iframe src="cmd/index.html" width=600 height=400>
                                </iframe>
                                </div>
                            </div>
                            <div class="app-window" id="file-manager">
                                <div class="header" onmousedown="startDrag(event, 'file-manager')">
                                    File Manager <button onclick="closeApp('file-manager')">X</button>
                                </div>
                                <div class="content">
                                <iframe src=".." width=600 height=400></iframe>
                                </div>
                            </div>
                            <div class="app-window" id="virtualdesk">
                                <div class="header" onmousedown="startDrag(event, 'virtualdesk')">
                                    Virtual Desktop <button onclick="closeApp('virtualdesk')">X</button>
                                </div>
                                <div class="content">
                                <iframe src="index.html" width=600 height=400></iframe>
                                </div>
                            </div>
                            <div class="app-window" id="error">
                                <div class="header" onmousedown="startDrag(event, 'error')">
                                    Error <button onclick="closeApp('error')">OK</button>
                                </div>
                                <div class="content">
                                <img src="assets/error.png" width=64 height=64>
                                <a>Jacobcallisono OS App Does not exist or is missing.</a>
                                </div>
                            </div>
                            `;
}

// Open an application window
function openApp(appId, top, left) {
    const app = document.getElementById(appId);
    app.style.display = "block";
        app.style.top = top * window.innerHeight + 'px';
        app.style.left = left * window.innerWidth + 'px';
        document.getElementById("Launcherapps").style.display = "none"
}

// Close an application window
function closeApp(appId) {
    const app = document.getElementById(appId);
    if (app) {
        app.style.display = "none";
    }
}

// Toggle apps menu
function toggleApps() {
    document.getElementById("apps").style.display = "block"
    document.getElementById("Launcherapps").style.display = "inline-block"
}

function showdesktop() {
    if (document.getElementById("apps").style.display = "none") {
        document.getElementById("apps").style.display = "block"
    } else {
        document.getElementById("apps").style.display = "none"
    }
}

// Drag Functionality
function startDrag(e, appId) {
    const appWindow = document.getElementById(appId);
    let offsetX = e.clientX - appWindow.getBoundingClientRect().left;
    let offsetY = e.clientY - appWindow.getBoundingClientRect().top;

    function dragMove(e) {
        appWindow.style.left = (e.clientX - offsetX) + 'px';
        appWindow.style.top = (e.clientY - offsetY) + 'px';
    }

    function stopDrag() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', stopDrag);
    }

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', stopDrag);
}
function closelauncher() {
    document.getElementById("Launcherapps").style.display = "none"
}
function logout() {
    let isLoggedIn = false;
var showapps = 0;
console.log('booting up...');
console.clear();
console.log('Loding LogOn Ui...');
document.getElementById("login-screen").style.display = "block";
document.getElementById("boot").style.display = "none";
document.getElementById("apps").style.display = "block";
document.getElementById("desktop").style.display = "none";
closelauncher()
document.getElementById("username").value = ""
document.getElementById("password").value = ""
}
function run() {
    let apptorun = prompt('App To Run?');
    openApp(apptorun ,0.2 ,0.2);
}