// Sample search data
const data = [
    "Apple iPhone 13",
    "Samsung Galaxy S21",
    "Google Pixel 6",
    "OnePlus Nord 2",
    "Sony WH-1000XM4 headphones",
    "Apple MacBook Air M1",
    "Dell XPS 13",
    "HP Spectre x360",
    "Apple iPad Air",
    "Amazon Kindle Paperwhite",
    "Skibidi Toilet",
    "Among Us",
    "9+10",
    "Dell Chromebook 11 3180",
    "Dell Chromebook 3100"
];

// Function to filter results based on user input
function filterResults() {
    const searchBox = document.getElementById('search-box');
    const query = searchBox.value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter data based on the search query
    const filteredData = data.filter(item => item.toLowerCase().includes(query));

    // Display results
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.textContent = item;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<div class="result-item">No results found.</div>';
    }
}