document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('stockChart').getContext('2d');
    
    // Sample stock market data
    const stockData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Stock Price',
            data: [120, 130, 125, 140, 150, 160, 170],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    };

    const config = {
        type: 'line',
        data: stockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Price'
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});
