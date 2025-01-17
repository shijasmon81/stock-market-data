// This file fetches stock market data from an API and updates the HTML to display the data.

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const stockSymbol = 'AAPL'; // Example stock symbol
const apiUrl = `https://api.example.com/stock/${stockSymbol}?apikey=${apiKey}`;

async function fetchStockData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayStockData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayStockData(data) {
    const artContainer = document.getElementById('art-container');
    artContainer.innerHTML = `
        <h1>${data.symbol} Stock Data</h1>
        <p>Current Price: $${data.currentPrice}</p>
        <p>Open: $${data.open}</p>
        <p>High: $${data.high}</p>
        <p>Low: $${data.low}</p>
        <p>Volume: ${data.volume}</p>
    `;
}

document.addEventListener('DOMContentLoaded', fetchStockData);