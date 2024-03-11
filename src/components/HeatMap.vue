<script setup>
import { onMounted } from 'vue';

// Call createHeatMapWidget function when the component is mounted
onMounted(() => {
createHeatMapWidget();
});

// Function to create TradingView widget
function createHeatMapWidget() {
const script = document.createElement('script');
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
script.async = true;
script.innerHTML = JSON.stringify({
    "width": "100%",
    "height": 200,
    "currencies": [
    "EUR",
    "USD",
    "JPY",
    "GBP",
    "CHF",
    "AUD",
    "CAD",
    "NZD"
    ],
    "isTransparent": true,
    "colorTheme": "dark",
    "locale": "en"
});
document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
}
</script>

<template>
<div style="width: 100%; height: 100%;">
    <div class="dashboard-title">
    <div class="bullet-points">
        <div class="white-border">
        <div class="blue-bracket">[ 
            <div class="small-square"></div>
        ]</div>
        </div>
    </div>
    <div class="title-name">
        <h3>Heat Map</h3>
    </div>
    </div>
    <div class="trader-dashboard-frame" style="width: 100%; height: 100%;">
    <div class="chart-container">
        <!-- TradingView Widget Container -->
        <div class="tradingview-widget-container">
        <!-- TradingView Widget -->
        <div class="tradingview-widget-container__widget"></div>
        <!-- TradingView Widget Copyright -->
        <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            </a>
        </div>
        </div>
    </div>
    </div>
</div>
</template> 
