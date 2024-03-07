function responsiveFonts() {
    if (window.matchMedia('(min-width: 3768px) and (min-height: 1769px) and (max-height: 1769px)').matches) {
        return 18; // Font size 18px for the new media query
    } else if (window.matchMedia('(min-width: 3768px) and (min-height: 1831px)').matches) {
        return 18; // Font size 18px for the specific media query
    } else if (window.matchMedia('(min-width: 2512px) and (min-height: 1335px) and (max-height: 1335px)').matches) {
        return 18; // Font size 18px for the most specific media query
    } else if (window.matchMedia('(min-width: 2560px) and (min-height: 1263px) and (max-height: 1430px)').matches) {
        return 16; // Font size 16px for the new media query
    } else if (window.matchMedia('(min-height: 1080px)').matches) {
        return 14; // Font size 14px for the second media query
    } else if (window.matchMedia('(min-width: 1884px) and (min-height: 1001px) and (max-height: 1001px)').matches) {
        return 14; // Font size 14px for the specific media query
    } else if (window.matchMedia('(min-width: 1884px) and (min-height: 884px) and (max-height: 884px)').matches) {
        return 12; // Font size 12px for the first media query
    } else {
        return 12; // Default font size 12px
    }
}

// Gradient function for "Long Trades"
function getLongTradesGradient(ctx, chartArea) {
    const gradientBg = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);

    // Start with solid color
    gradientBg.addColorStop(0, 'rgba(56, 189, 248, 1)'); // Solid color (fully opaque)

    // Gradually become transparent
    gradientBg.addColorStop(1, 'rgba(56, 189, 248, 0)'); // Fully transparent

    return gradientBg;
};

// Gradient function for "Short Trades"
function getShortTradesGradient(ctx, chartArea) {
    const gradientBg = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);

    // Start with solid color
    gradientBg.addColorStop(0, 'rgba(0, 221, 225, 1)'); // Solid color (fully opaque)

    // Gradually become transparent
    gradientBg.addColorStop(1, 'rgba(0, 221, 225, 0)'); // Fully transparent

    return gradientBg;
};

// Setup data
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
        label: 'Long Trades',
        data: [88, 108, 90, 90, 100],
        backgroundColor: function(context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
                return null;
            }
            return getLongTradesGradient(ctx, chartArea);
        },
        borderWidth: 0,
        datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 5,
            font: {
                size: responsiveFonts() // Set the font size based on window width
            },
            color: 'white'
        }
    }, {
        label: 'Short Trades',
        data: [92, 97, 94, 94, 90], // Different data for second dataset
        backgroundColor: function(context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
                return null;
            }
            return getShortTradesGradient(ctx, chartArea);
        },
        borderWidth: 0,
        datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 5,
            font: {
                size: responsiveFonts() // Set the font size based on window width
            },
            color: 'white'
        }
    }]
};

// Configuration
const config = {
    type: 'bar',
    data: data,
    plugins: [ChartDataLabels],
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    font: {
                        size: responsiveFonts() // Set the font size based on window width
                    }
                },
                display: true
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false
                },
                border: {
                    color: '#94A3B8'
                },
                ticks: {
                    font: {
                        size: responsiveFonts() // Set the font size based on window width
                    }
                }
            },
            y: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    display: false
                }
            }
        }
    }
}

// Initialize chart
const multiBarChart = new Chart(
    document.getElementById('multiBarChart'),
    config
);

// Call the responsiveFonts function after chart initialization
window.addEventListener('resize', function() {
    const fontSize = responsiveFonts();
    // Update font size for legend and x-axis ticks
    multiBarChart.options.plugins.legend.labels.font.size = fontSize;
    multiBarChart.options.scales.x.ticks.font.size = fontSize;
    
    // Update font size for data labels in each dataset
    multiBarChart.data.datasets.forEach(dataset => {
        dataset.datalabels.font.size = fontSize;
    });
    
    multiBarChart.update();
});

// Initial call to responsiveFonts function
responsiveFonts();
