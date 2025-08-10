const tabs = [
    {
        title: "Welcome",
        url: "welcome.htm"
    }
];

let currentTabIndex = 0;

function navigate() {
    const urlInput = document.getElementById('url');
    const url = urlInput.value;
    if (url) {
        tabs[currentTabIndex].url = url;
        document.getElementById('web-view').src = url;
    }
}

function goBack() {
    const webView = document.getElementById('web-view');
    webView.contentWindow.history.back();
}

function goForward() {
    const webView = document.getElementById('web-view');
    webView.contentWindow.history.forward();
}

function newTab() {
    const newTabIndex = tabs.length;
    if (newTabIndex > 20){
        alert("You Cannot Create More Than 20 Tabs.")
    } else {
        const newTabIndex = tabs.length;
    tabs.push({ title: `Tab ${newTabIndex + 1}`, url: "welcome.htm" });
    createTab(newTabIndex);
    selectTab(newTabIndex);
    }
}

function createTab(index) {
    const tabsContainer = document.getElementById('tabs');
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = `New Tab`;
    newTab.onclick = () => selectTab(index);
    tabsContainer.appendChild(newTab);
}

function selectTab(index) {
    currentTabIndex = index;
    const webView = document.getElementById('web-view');
    if (tabs[index].url) {
        webView.src = tabs[index].url;
        document.getElementById('url').value = tabs[index].url;
    } else {
        webView.src = "";
    }

    const tabElements = document.getElementsByClassName('tab');
    for (let i = 0; i < tabElements.length; i++) {
        tabElements[i].classList.remove('active');
    }
    tabElements[index].classList.add('active');
}
function newsettingsTab() {
    window.open('SETTINGS/index.html','Settings','width=600,height=480')
}
newTab()