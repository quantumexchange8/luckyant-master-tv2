//Line Chart
const LineCtx = document.getElementById('lineChart');

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


// Create an array of date strings in the format "YYYY-MM-DD"
const dateStrings = [
  '2024-01-01', '2024-01-08', '2024-01-15', '2024-01-22', '2024-01-29',
  '2024-02-05', '2024-02-12', '2024-02-19', '2024-02-26',
  '2024-03-04', '2024-03-11', '2024-03-18', '2024-03-25',
];

// Initialize empty arrays to store the formatted date labels and original date strings
const formattedLabels = [];
const originalDates = [];

// Iterate over each date string and format it
dateStrings.forEach(dateString => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) + ", '" + date.getFullYear().toString().slice(-2);
  formattedLabels.push(formattedDate);
  originalDates.push(dateString); // Store the original date string
});

// Use the formatted date labels in the chart data
const areaChart = new Chart(LineCtx, {
  type: 'line',
  data: {
    labels: formattedLabels,
    datasets: [{
      label: '# of Votes',
      data: [0, 120, 200, 250, 320, 420, 400, 380, 350, 420, 320, 400, 480],
      borderWidth: 2,
      fill: true,
      pointRadius: 0
    }]
  },
  options: {
    layout: {
      padding: 20
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        border: {
          color: '#94A3B8'
        },
        grid: {
          display: false
        },
        ticks: {
          autoSkip: false,
                    maxRotation: 30,
                    minRotation: 30,
          font: {
            size: responsiveFonts() // Set the font size based on window width
          }
        }
      },
      y: {
        beginAtZero: true,
        border: {
          dash: [1, 4]
        },
        grid: {
          color: '#94A3B8',
        },
        min: 0, // Set the minimum value of the y-axis
        max: 500, // Set the maximum value of the y-axis
        ticks: {
          callback: function (value, index, values) {
            return value + '%'; // Add '%' to the tick labels
          },
          stepSize: 100, // Set the step size of the y-axis
          font: {
            size: responsiveFonts() // Set the font size based on window width
          }
        }
      }
    }
  }
});

// Log the font size value outside the object literal
// console.log('Font size for y-axis ticks:', responsiveFonts());

window.addEventListener('resize', function() {
    const fontSize = responsiveFonts();
    areaChart.options.scales.x.ticks.font.size = fontSize;
    // console.log(areaChart.options.scales.x.ticks.font.size)

    areaChart.update();
});

// Call the responsiveFonts function after chart initialization
// window.addEventListener('resize', function() {
//   const fontSize = responsiveFonts();
//   console.log('sheila told me font size: ' + fontSize)

//   const lineChart = LineCtx;
//   // Check if lineChart is defined before updating its options
//   if (typeof lineChart !== 'undefined') {
//     console.log(LineCtx.options)

//       // Update font size for x-axis ticks
//       lineChart.options.scales.x.ticks.font.size = fontSize;
//       console.log(fontSize)

//       lineChart.update();
//   }
// });

// Initial call to responsiveFonts function
responsiveFonts();








//Small Bar Chart
function createSmallBarChart(canvasId, data, gradientFunction) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [
              'bar', 'bar', 'bar', 'bar', 'bar', 'bar',
              'bar', 'bar', 'bar', 'bar', 'bar', 'bar',
          ],
          datasets: [{
              label: '',
              data: data,
              backgroundColor: function(context){
                  const chart = context.chart;
                  const chartArea = chart.chartArea;

                  if (!chartArea) {
                      return null;
                  }
                  return gradientFunction(ctx, chartArea);
              },
              borderWidth: 1
          }]
      },
      options: {
        maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              },
          },
          scales: {
              x: {
                  display: false
              },
              y: {
                  beginAtZero: true,
                  display: false
              }
          }
      }
  });
}

function getGradient(barCtx, chartArea) {
  const gradientBg = barCtx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);

  gradientBg.addColorStop(0, '#38BDF8'); // First color
  gradientBg.addColorStop(0.5, '#31FBFB'); // Second color with reduced transparency
  gradientBg.addColorStop(1, 'rgba(49, 251, 251, 0)'); // Transparent color stop

  return gradientBg;
}

// Example usage:
createSmallBarChart('barChart1', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], getGradient);
createSmallBarChart('barChart2', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], getGradient);
createSmallBarChart('barChart3', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], getGradient);
createSmallBarChart('barChart4', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], getGradient);
createSmallBarChart('barChart5', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], getGradient);
createSmallBarChart('barChart6', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], getGradient);










//Pie Chart
const pieCtx = document.getElementById('pieChart');

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

// Create the pie chart and store it in a variable
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
      datasets: [{
        label: 'value',
        data: [
            { label: 'XAUUSD', value: 30 },
            { label: 'XAGUSD', value: 20 },
            { label: 'GBPUSD', value: 20 },
            { label: 'BTCUSD', value: 20 },
            { label: 'USDCAD', value: 10 }
        ],
        backgroundColor:[
              '#4DD1FF',
              '#31FBFB',
              '#065DFF',
              '#003EB3',
              '#3C23BC' 
        ],
        borderColor: [
              '#000000',
              '#000000',
              '#000000',
              '#000000',
              '#000000'
          ],
        borderWidth: 2
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: 20 //zoom in and out
      },
      responsive: true,
      plugins: {
          datalabels: {
            color: 'white',
            anchor: 'end',
            align: 'end',
            font: {
              size: responsiveFonts() // Set the font size based on window width
            },
            formatter: (value, pieCtx) => {
                    const data = pieCtx.dataset.data;
                    const totalSum = data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
                    const percentage = value.value / totalSum * 100;
                    return `${value.label} ${percentage.toFixed(2)}%`;
                }
          }
      }
    },
    plugins: [ChartDataLabels]
}); 










//Radar Chart
const radarCtx = document.getElementById('radarChart');

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


// Create the radar chart and store it in a variable
const radarChart = new Chart(radarCtx, {
  type: 'radar',
  data: {
      labels: ["Balance: $1,000,000", "Equity: $1373383.28", "Withdrawal: $584485.28", "Deposit: $738383.43", "Profit: $1382383.43"],
      datasets: [{
          label: 'Amounts',
          data: [75, 95, 95, 65, 80],
          borderWidth: 1,
          pointStyle: 'circle', // Set point style to circle
          pointRadius: 3 // Set point radius
      }]
  },
  options: {
    maintainAspectRatio: false,
      scales: {
          y: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 100
          },
          r: {
              angleLines: {
                  color: '#475569'
              },
              grid: {
                  color: '#475569'
              },
              display: true,
              suggestedMin: 40,
              suggestedMax: 100,
              pointLabels: {
                  font: {
                      size: responsiveFonts() // Set the font size based on window width
                  },
                  color: 'white',
              },
              ticks: {
                  display: false
              }
          }
      },
      plugins: {
          legend: {
              display: false
          }
      },
      layout: {
          //padding: 10 // Adjust padding if needed
      },
      elements: {
          line: {
              borderWidth: 2 // Adjust line width if needed
          }
      },
      // scale: {
      //     pointLabels: {
      //         fontSize: 20 // Adjust font size of the labels
      //     }
      // }
  }
});

// Call the responsiveFonts function after chart initialization
window.addEventListener('resize', function() {
  const fontSize = responsiveFonts();
  // Update font size for pie chart labels
  pieChart.options.plugins.datalabels.font.size = fontSize;
  pieChart.update();
  // Update font size for radar chart labels
  radarChart.options.scales.r.pointLabels.font.size = fontSize;
  radarChart.update();
});

