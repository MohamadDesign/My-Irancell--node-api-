import initChart from "./chart.js";

initChart(
    ['7.1', '7.10', '7.18', '7.25', '7.28', '8.20', '8.28', '9.10', '9.18'],
    [500, 2300, 1300, 2000, 2500, 2300, 3100, 2900, 2000],
    document.querySelector('#myChart').getContext('2d')
)