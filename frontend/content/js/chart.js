const initChart = (labels, data, initElement) => {
    const config = {
        type: 'line',
        data: {
            labels: [...labels],
            datasets: [{
                backgroundColor: '#feeeb7',
                borderColor: '#fdc816',
                data: [...data],
                tension: 0.45,
                borderWidth: 4,
                fill: true,
                pointRadius: 0,
            }]
        },
        options: {
            plugins: {
                legend: false
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    }
    return new Chart(initElement, config)
}

export default initChart