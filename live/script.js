// Start of boot
var noticount = 2
let listusers = {}
let isLoggedIn = false;
document.getElementById("boot").style.display = "none";
var user = localStorage.getItem('user');
var pswrd = localStorage.getItem('pass');
document.getElementById("boot").style.display = "block";
var showapps = 0;
// End of boot
console.log('booting up...');
console.clear();
console.log('Loding LogOn Ui...');
// Start of LogOn Ui load
document.getElementById("login-screen").style.display = "block";
document.getElementById("boot").style.display = "none";
document.getElementById("apps").style.display = "block";
function resetusers() {
  listusers = {};
}
console.log(self.navigator.deviceMemory);
// End of LogOn Ui load


function adduser() {
    var newuser = prompt("User to add?");
    var newpass = prompt("New user's password?");
    Object.defineProperty(listusers, newuser, {
        value: newpass,
        writable: false,
    });
    document.getElementById('users').innerText = Object.getOwnPropertyNames(listusers);
    document.getElementById('passwords').innerText = Object.values(listusers);
    document.getElementById('usersjson').innerText = Object.values(listusers).values;
    console.info("(i) Added user '" + newuser + "' with password '" + newpass + "' Successfully!")
    infosnd.play();
}
// Function to log in

function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    if (listusers.hasOwnProperty(username) && listusers[username] === password) {
        isLoggedIn = true
        infosnd.play()
        
        document.getElementById("login-screen").style.display = "none"
        loadInitialApps()
    } else if (username === user && password === pswrd ) {
      isLoggedIn = true
        infosnd.play()
        
        document.getElementById("login-screen").style.display = "none"
        loadInitialApps()
    } else {
        document.getElementById("invalidc").style.display = "block"
        critsnd.play()
    }
}
// Load initial applications on the desktop
function loadInitialApps() {
    document.getElementById("desktop").style.display = "flex";
    document.getElementById("options").style.display = "none";
    document.getElementById("taskbar").style.display = "flex";
}

// Open an application window
function openApp(appId, top, left) {
    const app = document.getElementById(appId);
    app.style.display = "block";
    document.getElementById(appId + "btn").style.display = "block";
    app.style.top = top * window.innerHeight + 'px';
    app.style.left = left * window.innerWidth + 'px';
    document.getElementById("Launcherapps").style.display = "none"
}

// Close an application window
function closeApp(appId) {
    const app = document.getElementById(appId);
    if (app) {
        app.style.display = "none";
        document.getElementById(appId + "btn").style.display = "none";
    }
}

// Toggle apps menu
function toggleApps() {
    document.getElementById("apps").style.display = "block"
    document.getElementById("Launcherapps").style.display = "inline-block"
}

function openquick() {
    document.getElementById("quicksettings").style.display = "inline-block"
}

function closequick() {
    document.getElementById("quicksettings").style.display = "none"
}

function opennoti() {
    document.getElementById("notifications").style.display = "inline-block"
}

function closenoti() {
    document.getElementById("notifications").style.display = "none"
}

function clearnotis() {
    if (noticount > 0) {
        document.getElementById("notis").innerHTML = ""
        document.getElementById("nonoti").style.display = "block"
        document.getElementById("notibtn").innerText = 0
        document.getElementById("notifications").style.display = "none"
        noticount = 0   
    }
}

function newnoti(notiid, prog, level, title, text) {
   document.getElementById("notis").innerHTML = document.getElementById("notis").innerHTML + `<div class="noti" id="` + notiid + `noti"><a>` + prog + ` - ` + level + `</a>
                    <hr>
                    <a style="font-size: large;">` + title + `</a>
                    <br>` + text + `</div>`
   if (noticount === 0) {    
        document.getElementById("nonoti").style.display = "none"
    }
    noticount = noticount - -1
    document.getElementById("notibtn").innerText = noticount
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
    document.getElementById(appId).style.zIndex = document.getElementById(appId).style.zIndex - -1;
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
document.getElementById("options").style.display = "block";
closelauncher()
document.getElementById("username").value = ""
document.getElementById("password").value = ""
}
function run() {
    let apptorun = document.getElementById("runvalue").value;
    openApp(apptorun, 0, 0);
    document.getElementById("runbox").style.display = "none";
    document.getElementById("runvalue").value = ""
}
function bypasslogin() {
    isLoggedIn = true;
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("launcher").style.display = "flex";
        loadInitialApps();
    errorsnd.play()
}
function miniApp(appId) {
    document.getElementById(appId).style.display = "none";
}
function restApp(appId) {
    document.getElementById(appId).style.display = "block";
}
function removescreen() {
    document.getElementsByClassName("screen").style.display = "none";
}
function removelogin() {
    document.getElementById("login-screen").style.display = "none";
}
function maxiApp(appId) {
    const app = document.getElementById(appId)
    document.getElementById(appId).style.width = "100%";
    document.getElementById(appId).style.height = "100%";
    app.style.top = 0
    app.style.left = 0
}

function launchernormal() {
    document.getElementById("Launcherapps").style.width = "480px"
    document.getElementById("Launcherapps").style.height = "512px"
    document.getElementById("Launcherapps").style.bottom = "40px"
}

function launcherfull() {
    document.getElementById("Launcherapps").style.width = "100%"
    document.getElementById("Launcherapps").style.height = "100%"
    document.getElementById("Launcherapps").style.bottom = "0"
}

document.getElementById("para1").innerHTML = formatAMPM();


function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes;
}

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      window.event.returnValue = false;
    });
}

function changeIcon(domImg,srcImage)
{
        var img = new Image();
        img.onload = function()
        {
            // Load completed
            domImg.src = this.src;
        };
        img.src = srcImage;
}

document.getElementById('usernameinfo').innerText = localStorage.getItem('user');
document.getElementById('users').innerText = Object.keys(listusers);
document.getElementById('passwords').innerText = Object.values(listusers);

function checknetwork() {
    if (navigator.onLine === true) {
        var networkgs = navigator.connection.effectiveType
        if (networkgs === "7g") {
            var netspd = "7g Connected, After 6g, Up to ???/s"
        } else if (networkgs === "6g") {
            var netspd = "6g Connected, Maximum Cellular Service, Up to 1Tb/s"
        } else if (networkgs === "5g") {
            var netspd = "5g Connected, Maximum Avalible Cellular Service, Up to 20Gb/s, "
        } else if (networkgs === "4g") {
            var netspd = "4g Connected, Semi-Maximum Avalible Cellular Service, Up to 100Mb/s , Max. 1Gb/s"
        } else if (networkgs === "3g") {
            var netspd = "3g Connected, Middle Cellular Service, Up to 7 Mb/s"
        } else if (networkgs === "2g") {
            var netspd = "2g Connected, Minimum Cellular Service, Up to 50Kb/s"
        } else if (networkgs === "1g") {
            var netspd = "1g Connected, Bare Minimum Cellular Service, Up to 2.4Kb/s"
        } else if (networkgs === "0g") {
            var netspd = "0g Connected, No Cellular Service"
        }
        changeIcon(document.getElementById("network"), "assets/network/" + networkgs + ".png");
        document.getElementById('networkg').innerText = netspd;
    } else {
        var networkgs = "-g"
        changeIcon(document.getElementById("network"), "assets/network/" + networkgs + ".png");
        document.getElementById('networkg').innerText = "Not Connected";
    }
}

function checkbluetooth() {
    navigator.bluetooth.getAvailability().then((available) => {
        if (available) {
            changeIcon(document.getElementById("bt"), "assets/bluetooth/true.png");
            document.getElementById('btav').innerText = "Bluetooth Avalible!\n" + navigator.bluetooth.getDevices();
        } else {
            changeIcon(document.getElementById("bt"), "assets/bluetooth/false.png");
            document.getElementById('btav').innerText = "Bluetooth Unavalible, Bluetooth Adapter is Missing Or Damaged, Or Device Is too Old for Bluetooth.";
        }
      });
      
}

// Make the DIV element draggable:

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function getusb() {
    navigator.usb.getDevices().then((devices) => {
        console.log(`Total devices: ${devices.length}`);
        devices.forEach((device) => {
          console.log(
            `Product name: ${device.productName}, serial number ${device.serialNumber}`,
          );
        });
      });
      
}
function filepick() {
    const pickerOpts = {
        types: [
          {
            description: "Text file",
            accept: {
              "text/*": [".jcnotxt", ".jtxt", ".txt"],
            },
          },
          {
            description: "Read Me file",
            accept: {
              "text/*": [".README"],
            },
          },
          {
            description: "HTML file",
            accept: {
              "text/*": [".htm", ".html"],
            },
          },{
            description: "CSS Styling file",
            accept: {
              "text/*": [".css"],
            },
          },
          {
            description: "Javascript file",
            accept: {
              "text/*": [".js", ".jsx"],
            },
          },
          {
            description: "XML File",
            accept: {
              "text/*": [".xml", ".xhtm", ".xhtml"],
            },
          },
          {
            description: "Java file",
            accept: {
              "text/*": [".java"],
            },
          },
          {
            description: "C/C++ file",
            accept: {
              "text/*": [".c", ".cc", ".cpp"],
            },
          },
          {
            description: "JSON (JavaScript Object Notation) file",
            accept: {
              "text/*": [".json"],
            },
          },
          {
            description: "Command Prompt file",
            accept: {
              "text/*": [".bat", ".cmd"],
            },
          },
        ],
        excludeAcceptAllOption: false,
        multiple: false,
      };
      async function getTheFile() {
        // Open file picker and destructure the result the first handle
        const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
      
        // get file contents
        const fileData = await fileHandle.getFile();
      }
      getTheFile()
}
function batteryupdate() {
const output = document.getElementById("battery");
async function outputbatterylevel() {
  if (!navigator.getBattery) {
    output.innerHTML = "<a>Battery manager is unsupported</a>";
  } else {
    const manager = await navigator.getBattery();
    const level = manager.level;
    const charging = manager.charging;
    const chargetime = manager.chargingTime;
    const dischargetime = manager.dischargingTime;

    if (charging === true) {
      output.innerHTML = `<img src="assets/battery/`+ Math.floor((Math.round(level*100))/7) + `.png" /> <img src="assets/battery/charging/`+ charging + `.png" />`+ Math.round(level*100) + `% ` + chargetime + ` Seconds until full`;
    } else {
      output.innerHTML = `<img src="assets/battery/`+ Math.floor((Math.round(level*100))/7) + `.png" /> <img src="assets/battery/charging/`+ charging + `.png" />`+ Math.round(level*100) + `% ` + dischargetime + ` Seconds left`;
    }
    
  };
}
outputbatterylevel()
}
    function getGPUInfo() {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', { powerPreference: "high-performance" }) || canvas.getContext('experimental-webgl', { powerPreference: "high-performance" });
  if (!gl) {
    return "No GPU detected";
  }
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (!debugInfo) {
    return "Unknown GPU";
  }
  const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  return renderer;
}
function updatememusage() {
  if (window.performance && window.performance.memory) {
  const memory = window.performance.memory;
  document.getElementById("heapsize").innerText = Math.floor(memory.totalJSHeapSize / 1048576) + "MB"
  document.getElementById("usedheap").innerText = Math.floor(memory.usedJSHeapSize / 1048576) + "MB"
  document.getElementById("heaplimit").innerText = Math.floor(memory.jsHeapSizeLimit / 1048576) + "MB"
  document.getElementById("freeheapmem").innerText = Math.floor((memory.jsHeapSizeLimit / 1048576) - (memory.totalJSHeapSize / 1048576)) + "MB"
  document.getElementById("freeheap").innerText = Math.floor((memory.totalJSHeapSize / 1024) - (memory.usedJSHeapSize / 1024)) + "kB"
}
 
}

const gpuInfo = getGPUInfo();
console.log(gpuInfo);
document.getElementById("gpuinfo").innerText = gpuInfo;
let counter = 0;

let intervalId = setInterval(function() {
    batteryupdate();
    document.getElementById("para1").innerText = formatAMPM();
    updatememusage();
    counter++;
    if (counter === 2147483647) {
        clearInterval(intervalId); // Stop the interval
    }
}, 1000); // Runs every 1000 milliseconds (1 second)