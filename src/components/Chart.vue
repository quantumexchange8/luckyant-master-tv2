<script setup>
import { onMounted } from 'vue';

// Function to calculate responsive font size
function responsiveFonts() {
  // Your responsive font size logic here
}

// Function to create chart configuration
function createChartConfig(ctx, data, fontSize, dateStrings) {
  return {
      type: 'line',
      data: {
          labels: dateStrings,
          datasets: data.datasets
      },
      options: {
        maintainAspectRatio: false,
          // Your chart options here
          plugins: {
              legend: {
                  display: false // Remove the legend
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
                      autoSkip: false,
                      maxRotation: 30,
                      minRotation: 30,
                      font: {
                          size: fontSize
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
                          size: fontSize
                      }
                  }
              }
          }
      }
  };
}

// Function to update font sizes in the chart
function updateFontSizes(chart, fontSize) {
  chart.options.scales.x.ticks.font.size = fontSize;
  chart.options.scales.y.ticks.font.size = fontSize;
  chart.update();
}

// Function to initialize chart
function initChart(chartId, config) {
  return new Chart(chartId, config);
}

// Call the responsiveFonts function after chart initialization
onMounted(() => {
  const fontSize = responsiveFonts();
  const chartContext = document.getElementById('lineChart');

  const dateStrings = [
    '2024-01-01', '2024-01-08', '2024-01-15', '2024-01-22', '2024-01-29',
    '2024-02-05', '2024-02-12', '2024-02-19', '2024-02-26',
    '2024-03-04', '2024-03-11', '2024-03-18', '2024-03-25',
  ];

  const lineChartData = {
    labels: dateStrings,
    datasets: [{
        label: 'Line Chart Data',
        data: [0, 120, 200, 250, 320, 420, 400, 380, 350, 420, 320, 400, 480],
        borderWidth: 2,
        fill: true,
        pointRadius: 0
    }]
  };

  const lineChart = initChart(
      chartContext,
      createChartConfig(chartContext, lineChartData, fontSize, dateStrings)
  );
  updateFontSizes(lineChart, fontSize);
});

// Call the responsiveFonts function after window resize
window.addEventListener('resize', function() {
  const fontSize = responsiveFonts();
  const lineChart = Chart.getChart('lineChart');
  updateFontSizes(lineChart, fontSize);
});

// Initial call to responsiveFonts function
responsiveFonts();
</script>

<template>
    <div id="box9-1-1" class="content-middle-top">
        <div class="dashboard-title">
                <div class="bullet-points">
                    <div class="white-border">
                        <div class="blue-bracket">[ 
                            <div class="small-square"></div>
                            ]
                        </div>
                    </div>
                </div>
                <div class="title-name">
                    <h3>Chart</h3>
                </div>
        </div>
        <div class="clickable-label-chart">
            <div class="clickable-label-chart-part-1">
                <!-- First Label -->
                <div class="label-shape clickable-shape"></div>
            <div class="wrapper">
                <div id="wrapper1" class="clickable-label-chart-rectangle-with-triangle-1">
                    <!-- <div class="content-wrapper"> -->
                    <div class="clickable-label-chart-rectangle-with-trapezoid-1"></div>
                    <div class="clickable-label-chart-name">
                    <p>Growth</p>
                    </div>
                    <!-- </div> -->
                </div> 
            </div>
            
        
            <!-- Second Label -->
            <div class="label-shape clickable-shape"></div>
            <div class="wrapper">
                <div id="wrapper2" class="clickable-label-chart-rectangle-with-trapezoid-2">
                    <div class="clickable-label-chart-name">
                        <p>Balance</p>
                    </div>
                </div>
            </div>
            
            <!-- Third Label -->
            <div class="label-shape clickable-shape"></div>
            <div class="wrapper">
                <div id="wrapper3" class="clickable-label-chart-rectangle-with-trapezoid-3">
                    <div class="clickable-label-chart-name">
                        <p>Equity</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="clickable-label-chart-part-2">
            <!-- Forth Label -->
            <div class="label-shape clickable-shape"></div>
                <div class="wrapper">
                    <div id="wrapper4" class="clickable-label-chart-rectangle-with-triangle-4">
                        <div class="clickable-label-chart-rectangle-with-trapezoid-4"></div>
                        <div class="clickable-label-chart-name">
                        <p>Drawdown</p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        <div class="line-chart">
            <canvas id="lineChart" style="height: 300px; width: 760px;"></canvas>
        </div>
</div>
</template>