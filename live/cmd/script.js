document.addEventListener("DOMContentLoaded", () => {
    const commandInput = document.getElementById("commandInput");
    const outputDiv = document.getElementById("output");

    // Basic command set
    const commands = {
        help: "Available commands: help, storage, memory, clear, echo [text], readfile, date, files, settings, ossettings, ver ",
        echo: (text) => text,
        clear: () => { outputDiv.innerHTML = ""; return ""; },
        date: () => new Date().toLocaleString(),
        memory: () => getMemoryUsage(),
        storage: () => getStorageInfo(),
        files: () => { window.open('chrome://file-manager', 'popup', 'width=640,height=480,left=500,top=55'); return "files loading...";},
        settings: () => {window.open('chrome://settings', 'popup', 'width=640,height=480,left=500,top=55'); return "settings loading...";},
        ossettings: () => {window.open('chrome://os-settings', 'popup', 'width=640,height=480,left=500,top=55'); return "os settings loading...";},
        ver: () => {return "Jacobcallisono OS Version 0.4.1 Build 29";},
        readfile: () => {return "ReadFile Is Under Construction."}
    };

    commandInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = commandInput.value.trim();
            commandInput.value = ""; // Clear input

            if (command) {
                outputDiv.innerHTML += `<div>> ${command}</div>`;
                processCommand(command);
            }
        }
    });

    function processCommand(command) {
        const [cmd, ...args] = command.split(" ");
        const response = commands[cmd] 
            ? (typeof commands[cmd] === "function" ? commands[cmd](args.join(" ")) : commands[cmd]) 
            : `Command not found: ${cmd}`;

        outputDiv.innerHTML += `<div>${response}</div>`;
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    async function getStorageInfo() {
        try {
            const handle = await window.showOpenFilePicker();
            const file = await handle[0].getFile();
            return `File selected: ${file.name}, size: ${file.size} bytes`;
        } catch (error) {
            return "Storage access denied or error occurred.";
        }
    }

    function getMemoryUsage() {
        if (navigator.deviceMemory) {
            return `Device Memory: ${navigator.deviceMemory} GB`;
        } else {
            return "Memory usage information not available.";
        }
    }
});