<script setup>

import { onMounted } from 'vue';

// Function to calculate responsive font size
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

// Function to create radar chart
function createRadarChart() {
  const radarCtx = document.getElementById('radarChart');
  
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
        }
    }
  });
}

// Call createRadarChart function when the component is mounted
onMounted(() => {
  createRadarChart();
  
  // Add event listener for window resize
  window.addEventListener('resize', () => {
    // Recreate radar chart on window resize to update font size
    createRadarChart();
  });
});

</script>

<template>
    <div id="box9-2-1" class="content-middle-top-1">
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
                <h3>Finance Summary</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame">
            <div class="chart-container">
                <div class="radar-chart">
                    <canvas id="radarChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>