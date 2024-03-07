<script setup>
import { ref } from 'vue';


import { onMounted } from 'vue';

function createSmallBarChart(canvasId, data, gradientFunction) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array(12).fill('bar'), // Create an array with 12 'bar' labels
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

onMounted(() => {
    // Example usage:
    createSmallBarChart('barChart1', Array(12).fill(20), getGradient);
    createSmallBarChart('barChart2', Array(12).fill(20), getGradient);
    createSmallBarChart('barChart3', Array(12).fill(20), getGradient);
    createSmallBarChart('barChart4', Array(12).fill(20), getGradient);
    createSmallBarChart('barChart5', Array(12).fill(20), getGradient);
    createSmallBarChart('barChart6', Array(12).fill(20), getGradient);
});

// import { onMounted } from 'vue';

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
        <div id="clickable1" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>Godfather Trader</h4>
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
                            <p>$ 1,000,000.00</p>
                            <p>188</p>
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
        <div id="clickable2" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>WealthHarbor Capital Management</h4>
                    </div>
                </div>
            <div class="trader-dashboard-content">
                <div class="trader-dashboard-img-1">
                    <div class="shadow-container">
                        <div class="hexagon-border">
                            <img src="/src/assets/dashboard/dashboard-2-s.jpg" alt="">
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
                            <p>$ 1,000,000.00</p>
                            <p>188</p>
                            <p class="total-growth">+2,383.39%</p>
                        </div>
                    </div>
                    <div class="bar-chart-data">
                        <div class="bar-chart">
                            <canvas id="barChart2" style="width: 120px; height: 50px;"></canvas>
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
        <div id="clickable3" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>PrecisionInvest Pro</h4>
                    </div>
                </div>
            <div class="trader-dashboard-content">
                <div class="trader-dashboard-img-1">
                    <div class="shadow-container">
                        <div class="hexagon-border-icon">
                            <img src="/src/assets/dashboard/dashboard-3-s.png" alt="">
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
                            <p>$ 1,000,000.00</p>
                            <p>188</p>
                            <p class="total-growth">-29.42%</p>
                        </div>
                    </div>
                    <div class="bar-chart-data">
                        <div class="bar-chart">
                            <canvas id="barChart3" style="width: 120px; height: 50px;"></canvas>
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
        <div id="clickable4" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>SecureGrowth Portfolios</h4>
                    </div>
                </div>
            <div class="trader-dashboard-content">
                <div class="trader-dashboard-img-1">
                    <div class="shadow-container">
                        <div class="hexagon-border">
                            <img src="/src/assets/dashboard/dashboard-4-s.jpg" alt="">
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
                            <p>$ 1,000,000.00</p>
                            <p>188</p>
                            <p class="total-growth">+2,383.39%</p>
                        </div>
                    </div>
                    <div class="bar-chart-data">
                        <div class="bar-chart">
                            <canvas id="barChart4" style="width: 120px; height: 50px;"></canvas>
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
        <div id="clickable5" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>StrategicWealth Ventures</h4>
                    </div>
                </div>
            <div class="trader-dashboard-content">
                <div class="trader-dashboard-img-1">
                    <div class="shadow-container">
                        <div class="hexagon-border">
                            <img src="/src/assets/dashboard/dashboard-5-s.jpg" alt="">
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
                            <p>$ 1,000,000.00</p>
                            <p>188</p>
                            <p class="total-growth">+2,383.39%</p>
                        </div>
                    </div>
                    <div class="bar-chart-data">
                        <div class="bar-chart">
                            <canvas id="barChart5" style="width: 120px; height: 50px;"></canvas>
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
        <div id="clickable6" class="trader-dashboard-frame">
            <div class="pamm-master-box">
                <div class="dashboard-name-border">
                    <div class="dashboard-name">
                        <h4>AlphaDynamics Fund</h4>
                    </div>
                </div>
            <div class="trader-dashboard-content">
                <div class="trader-dashboard-img-1">
                    <div class="shadow-container">
                        <div class="hexagon-border">
                            <img src="/src/assets/dashboard/dashboard-6-s.jpg" alt="">
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
                            <p>$ 1,000,000.00</p>
                            <p>188</p>
                            <p class="total-growth">+2,383.39%</p>
                        </div>
                    </div>
                    <div class="bar-chart-data">
                        <div class="bar-chart">
                            <canvas id="barChart6" style="width: 120px; height: 50px;"></canvas>
                        </div>
                        <div class="bar-chart-profitability">
                            <p>Profitability</p>
                            <p class="font-green-color">96.83%</p>
                        </div>
                    </div>
                </div>
                <!-- <script>
                    ApplyColorToTotalGrowth();
                </script> -->
            </div>
        </div>
        </div>
    </div>
</template>

<!-- <script>ApplyColorToTotalGrowth();</script>
<script>ApplyColorToForexMarket();</script>
<script>ApplyColorToProfitAndGain();</script> -->