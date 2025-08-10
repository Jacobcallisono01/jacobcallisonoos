// Function to show the selected settings category
function showCategory(category) {
    const categories = document.getElementsByClassName('settings-category');
    
    // Hide all categories
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }

    // Show the selected category
    document.getElementById(category).style.display = 'block';

    // Load saved settings if they exist
    loadSettings(category);
}

// Function to save settings to localStorage
function saveSettings(category) {
    let settings = {};

    if (category === 'general') {
        settings = {
            homepage: document.getElementById('homepage').value,
            searchEngine: document.getElementById('search-engine').value
        };
    } else if (category === 'privacy') {
        settings = {
            blockCookies: document.getElementById('block-cookies').checked,
            clearHistory: document.getElementById('clear-history').checked
        };
    } else if (category === 'appearance') {
        settings = {
            theme: document.getElementById('theme').value
        };
    }

    localStorage.setItem(category, JSON.stringify(settings));
    alert('Settings saved successfully!');
}

// Function to load settings from localStorage
function loadSettings(category) {
    const settings = JSON.parse(localStorage.getItem(category));

    if (settings) {
        if (category === 'general') {
            document.getElementById('homepage').value = settings.homepage || '';
            document.getElementById('search-engine').value = settings.searchEngine || 'google';
        } else if (category === 'privacy') {
            document.getElementById('block-cookies').checked = settings.blockCookies || false;
            document.getElementById('clear-history').checked = settings.clearHistory || false;
        } else if (category === 'appearance') {
            document.getElementById('theme').value = settings.theme || 'light';
        }
    }
}

// Show general settings by default
showCategory('general');