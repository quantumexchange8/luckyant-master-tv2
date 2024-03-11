<script setup>
// import { onMounted } from 'vue';

// function applyColorToForexMarket() {
//     const percentages = document.querySelectorAll('.content-forex-market-left .percentage p'); // Select all percentage elements
//     const values = document.querySelectorAll('.content-forex-market-left .value p'); // Select all value elements

//     for (let i = 0; i < percentages.length; i++) {
//         const percentage = parseFloat(percentages[i].textContent); // Get the percentage value as float
//         const value = values[i].textContent.trim(); // Get the value and trim any leading/trailing spaces
//         const lastDigit = value[value.length - 1]; // Get the last digit of the value

//         // Apply color to the percentage
//         if (percentage > 0) {
//             percentages[i].classList.add("forex-market-green-percentage");
//         } else if (percentage < 0) {
//             percentages[i].classList.add("font-red-color-percentage");
//         }

//         // Apply color to the last digit of the value
//         if (percentage > 0) {
//             values[i].innerHTML = value.substring(0, value.length - 1) + `<span class="forex-market-green">${lastDigit}</span>`;
//         } else if (percentage < 0) {
//             values[i].innerHTML = value.substring(0, value.length - 1) + `<span class="font-red-color">${lastDigit}</span>`;
//         }
//     }
// }

// onMounted(() => {
//     applyColorToForexMarket();
// });

</script>

<template>
    <div id="economic-calendar-widget" style="width: 100%; height: 100%">
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
                <h3>Economic Calendar</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame" style="width: 100%; height: 100%">
            <!-- Embed the iframe and div directly without surrounding HTML tags -->
            <iframe
                src="https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=0,1,2,3&symbols=AUD,CAD,CHF,CNY,EUR,GBP,JPY,NZD,USD"
                style="border: 0; width:100%; height:100%;"></iframe>
            <div style="margin-top: 10px;">
            </div>
        </div>
    </div>
</template>