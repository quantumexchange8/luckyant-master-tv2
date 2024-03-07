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

// Function to create pie chart
function createPieChart() {
  const pieCtx = document.getElementById('pieChart');
  
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
}

// Call createPieChart function when the component is mounted
onMounted(() => {
  createPieChart();
  
  // Add event listener for window resize
  window.addEventListener('resize', () => {
    // Recreate pie chart on window resize to update font size
    createPieChart();
  });
});

</script>

<template>
    <div id="box9-2-2" class="content-middle-top-2">
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
                <h3>Asset Allocation</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame">
            <div class="chart-container">
                <div class="pie-chart">
                    <canvas id="pieChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>