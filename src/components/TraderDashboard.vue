<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Import Axios

function createSmallBarChart(canvasId, data, gradientFunction) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error('Canvas element not found:', canvasId);
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Canvas context not available:', canvasId);
        return;
    }

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array(12).fill('bar'),
            datasets: [{
                label: '',
                data: data,
                backgroundColor: function(context){
                    const chartArea = context.chart.chartArea;
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
                tooltip: {
                    enabled: false
                },
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

onMounted(async () => {
    await fetchData();
    // Iterate over the fetched data to create bar charts for each frame
    fetchedData.value.forEach((user, index) => {
        const canvasId = 'barChart' + (index + 1); // Generate unique canvas ID
        createSmallBarChart(canvasId, Array(12).fill(20), getGradient);
    });
});

// onMounted(() => {
//     createSmallBarChart('barChart1', Array(12).fill(20), getGradient);
//     createSmallBarChart('barChart2', Array(12).fill(20), getGradient);
//     createSmallBarChart('barChart3', Array(12).fill(20), getGradient);
//     createSmallBarChart('barChart4', Array(12).fill(20), getGradient);
//     createSmallBarChart('barChart5', Array(12).fill(20), getGradient);
//     createSmallBarChart('barChart6', Array(12).fill(20), getGradient);
// });

// onMounted(() => {
//     fetchData();
// });


// Function to apply color to total growth
function applyColorToTotalGrowth() {
    const TDs = document.querySelectorAll('.trader-dashboard-content-right-data > p:nth-child(3)'); 
    // Select the 3rd paragraph in each .trader-dashboard-content-right-data
    for (let i = 0; i < TDs.length; i++) {
        const temp = TDs[i];
        const growth = parseFloat(temp.textContent.replace(/,/g, '')); 
        // Remove commas and parse as float
        if (growth > 0) {
            temp.classList.add("positive-growth");
        } else if (growth < 0) {
            temp.classList.add("negative-growth");
        }
    }
}

onMounted(() => {
    applyColorToTotalGrowth();
});

// Function to initialize click event
function initializeClickEvent() {
    // Select all elements with IDs starting with "clickable"
    var elements = document.querySelectorAll("[id^='clickable']");
    
    // Loop through each element
    elements.forEach(function(element) {
        // Add a click event listener to each element
        element.addEventListener("click", function() {
            // Remove the "clicked" class from all elements
            elements.forEach(function(el) {
                el.classList.remove("clicked");
            });
            // Add the "clicked" class to the clicked element
            element.classList.add("clicked");
        });
    });
}

// Call the initializeClickEvent function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeClickEvent);




// const response = await axios.get('http://192.168.0.223:5000/api/trade_acc/457269');
// const response = await axios.get('https://luckyant-trading-user.test/api/getMasters');


const masterData = ref(null);

async function fetchData() {
    try {
        const response = await axios.get('https://testmember.luckyantfxasia.com/api/getMaster');
        masterData.value = response.data.metaUser;
        console.log('Master Data:', masterData.value);

        createSmallBarChart('barChart1', Array(12).fill(20), getGradient);
    } catch (error) {
        console.error('Error fetching live data:', error);
    }
}

// Call fetchData function to fetch data when the component is mounted
onMounted(() => {
  fetchData(); // Fetch data when the component is mounted
  setInterval(fetchData, 1000); // Fetch data every 1 second
});






</script>

<template>
    <div id="box4" class="trader-dashboard">
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
                <h3>Masters</h3>
            </div>
        </div>
        <div id="clickable1" v-for="(user, index) in masterData" :key="index" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>{{ user.meta_user.name }}</h4> <!-- Display username or show error message -->
                    </div>
                </div>
            <div class="trader-dashboard-content">
                <div class="trader-dashboard-img-1">
                    <div class="shadow-container">
                        <div class="hexagon-border">
                            <img src="/src/assets/dashboard/dashboard-1-s.jpg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="content-up-down">
                    <div class="add-onbox">
                        <div class="trader-dashboard-content-right">
                            <div class="trader-dashboard-content-right-name">
                                <p>Balance</p>
                                <p>Investors</p>
                                <p>Total Growth</p>
                            </div>
                        </div>
                        <div class="trader-dashboard-content-right-data">
                            <p>$ {{ user.meta_user.balance }} </p>
                            <p>{{ user.subscriber }}</p>
                            <p class="total-growth">+2,383.39%</p>
                        </div>
                    </div>
                    <div class="bar-chart-data">
                        <div class="bar-chart">
                            <canvas id="barChart1" style="width: 120px; height: 50px;"></canvas>
                        </div>
                        <div class="bar-chart-profitability">
                            <p>Profitability</p>
                            <p class="font-green-color">96.83%</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
