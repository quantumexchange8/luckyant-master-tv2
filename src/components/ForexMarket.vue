<script setup>
import { onMounted } from 'vue';

function applyColorToForexMarket() {
    const percentages = document.querySelectorAll('.content-forex-market-left .percentage p'); // Select all percentage elements
    const values = document.querySelectorAll('.content-forex-market-left .value p'); // Select all value elements

    for (let i = 0; i < percentages.length; i++) {
        const percentage = parseFloat(percentages[i].textContent); // Get the percentage value as float
        const value = values[i].textContent.trim(); // Get the value and trim any leading/trailing spaces
        const lastDigit = value[value.length - 1]; // Get the last digit of the value

        // Apply color to the percentage
        if (percentage > 0) {
            percentages[i].classList.add("forex-market-green-percentage");
        } else if (percentage < 0) {
            percentages[i].classList.add("font-red-color-percentage");
        }

        // Apply color to the last digit of the value
        if (percentage > 0) {
            values[i].innerHTML = value.substring(0, value.length - 1) + `<span class="forex-market-green">${lastDigit}</span>`;
        } else if (percentage < 0) {
            values[i].innerHTML = value.substring(0, value.length - 1) + `<span class="font-red-color">${lastDigit}</span>`;
        }
    }
}

onMounted(() => {
    applyColorToForexMarket();
});

</script>

<template>
    <div id="box11" class="content-forex-market">
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
                <h3>Major Forex Market</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame">
            <div class="content-forex-market-all">
                <div class="content-forex-market-left">
                    <div class="market-info-1">
                        <div class="img-section">
                            <div class="forex-market-img-1">
                                <img src="/src/assets/dashboard/EUR-IMG-1.jpg" alt="">
                            </div>
                            <div class="forex-market-img-2">
                                <img src="/src/assets/dashboard/USD-IMG.png" alt="">
                            </div>
                        </div>
                        <div class="forex-market-name">
                            <div><p>EUR to USD</p></div>
                            <div class="market-label">
                                <div class="market-label-label-shape"></div>
                                <div class="market-label-rectangle-with-trapezoid">
                                    <div class="market-label-name">
                                        <p>EURUSD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="market-info-data-1">
                            <div class="currency-info">
                                <div class="value"><p>1.08920</p></div>
                                <div class="currency">USD</div>
                            </div>
                            <div class="percentage"><p>+0.07%</p></div>
                        </div>
                    </div>
                    <div class="market-info-2">
                        <div class="img-section">
                            <div class="forex-market-img-1">
                                <img src="/src/assets/dashboard/UK-IMG-1.jpg" alt="">
                            </div>
                            <div class="forex-market-img-2">
                                <img src="/src/assets/dashboard/USD-IMG.png" alt="">
                            </div>
                        </div>
                        <div class="forex-market-name">
                            <div><p>EUR to USD</p></div>
                            <div class="market-label">
                                <div class="market-label-label-shape"></div>
                                <div class="market-label-rectangle-with-trapezoid">
                                    <div class="market-label-name">
                                        <p>GBPUSD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="market-info-data-2">
                            <div class="currency-info">
                                <div class="value"  style="margin-left: 10px;"><p>1.2726</p></div>
                                <div class="currency">USD</div>
                            </div>
                            <div class="percentage"><p>+0.04%</p></div>
                        </div>
                    </div>
                    <div class="market-info-3">
                        <div class="img-section">
                            <div class="forex-market-img-1">
                                <img src="/src/assets/dashboard/USD-IMG.png" alt="">
                            </div>
                            <div class="forex-market-img-2">
                                <img src="/src/assets/dashboard/Canada-IMG-1.jpg" alt="">
                            </div>
                        </div>
                        <div class="forex-market-name">
                            <div><p>EUR to USD</p></div>
                            <div class="market-label">
                                <div class="market-label-label-shape"></div>
                                <div class="market-label-rectangle-with-trapezoid">
                                    <div class="market-label-name">
                                        <p>USDCAD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="market-info-data-3">
                            <div class="currency-info">
                                <div class="value"><p>1.35218</p></div>
                                <div class="currency">CAD</div>
                            </div>
                            <div class="percentage"><p>-0.01%</p></div>
                        </div>
                    </div>
                    <!-- <script>
                        ApplyColorToForexMarket();
                    </script> -->
                </div>
            </div>
        </div>
    </div>
</template>