<script setup>

import { onMounted } from 'vue';

function applyColorToProfitAndGain() {
    const TDsProfit = document.querySelectorAll('td:nth-child(9)'); // Select the 9th column (Profit)
    const TDsGain = document.querySelectorAll('td:nth-child(11)'); // Select the 11th column (Gain)

    // Apply color for Profit
    for (let i = 0; i < TDsProfit.length; i++) {
        const temp = TDsProfit[i];
        const profit = parseFloat(temp.textContent.replace(/,/g, '')); // Remove commas and parse as float
        if (profit > 0) {
            temp.classList.add("positive");
        } else if (profit < 0) {
            temp.classList.add("negative");
        }
    }

    // Apply color for Gain
    for (let j = 0; j < TDsGain.length; j++) {
        const tempGain = TDsGain[j];
        const gain = parseFloat(tempGain.textContent.replace(/,/g, '')); // Remove commas and parse as float
        if (gain > 0) {
            tempGain.classList.add("positive");
        } else if (gain < 0) {
            tempGain.classList.add("negative");
        }
    }
}

onMounted(() => {
    applyColorToProfitAndGain();
});

</script>

<template>
    <div id="box8" class="content-bottom">
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
                <h3>Trades History</h3>
            </div>
        </div>
        <div class="information-content">
            <table class="w-full">
                <thead class="table-header">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Open Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Close Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Symbol
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Lots
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Open Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Close Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Pips
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Profit (USD)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Gain
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-content-bckg">
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">11:37:48</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">11:37:53</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            GBPUSD
                        </td>
                        <td class="px-6 py-4">
                            Sell
                        </td>
                        <td class="px-6 py-4">
                            500.00
                        </td>
                        <td class="px-6 py-4">
                            1.29506
                        </td>
                        <td class="px-6 py-4">
                            1.29556
                        </td>
                        <td class="px-6 py-4">
                            -5.0
                        </td>
                        <td class="px-6 py-4">
                            -25,000.00
                        </td>
                        <td class="px-6 py-4">
                            5s
                        </td>
                        <td class="px-6 py-4">
                            -0.53%
                        </td>
                    </tr>
                    <tr class="table-content">
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:59:16</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:58:54</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            GBPUSD
                        </td>
                        <td class="px-6 py-4">
                            Sell
                        </td>
                        <td class="px-6 py-4">
                            500.00
                        </td>
                        <td class="px-6 py-4">
                            1.29506
                        </td>
                        <td class="px-6 py-4">
                            1.29556
                        </td>
                        <td class="px-6 py-4">
                            -5.0
                        </td>
                        <td class="px-6 py-4">
                            14,372.32
                        </td>
                        <td class="px-6 py-4">
                            38s
                        </td>
                        <td class="px-6 py-4">
                            13.23%
                        </td>
                    </tr>
                    <tr class="table-content-bckg">
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:50:12</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:52:00</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            GBPUSD
                        </td>
                        <td class="px-6 py-4">
                            Sell
                        </td>
                        <td class="px-6 py-4">
                            500.00
                        </td>
                        <td class="px-6 py-4">
                            1.29506
                        </td>
                        <td class="px-6 py-4">
                            1.29556
                        </td>
                        <td class="px-6 py-4">
                            -5.0
                        </td>
                        <td class="px-6 py-4">
                            75,373.83
                        </td>
                        <td class="px-6 py-4">
                            108s
                        </td>
                        <td class="px-6 py-4">
                            67.27%
                        </td>
                    </tr>
                    <tr class="table-content">
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:38:03</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:38:56</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            GBPUSD
                        </td>
                        <td class="px-6 py-4">
                            Sell
                        </td>
                        <td class="px-6 py-4">
                            500.00
                        </td>
                        <td class="px-6 py-4">
                            1.29506
                        </td>
                        <td class="px-6 py-4">
                            1.29556
                        </td>
                        <td class="px-6 py-4">
                            -5.0
                        </td>
                        <td class="px-6 py-4">
                            -2,378.99
                        </td>
                        <td class="px-6 py-4">
                            53s
                        </td>
                        <td class="px-6 py-4">
                            -12.36%
                        </td>
                    </tr>
                    <tr class="table-content-bckg">
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:00:38</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="table-content-date-time">
                                <div class="table-content-date">01.01.2024</div>
                                <div class="table-content-time">10:00:52</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            GBPUSD
                        </td>
                        <td class="px-6 py-4">
                            Sell
                        </td>
                        <td class="px-6 py-4">
                            500.00
                        </td>
                        <td class="px-6 py-4">
                            1.29506
                        </td>
                        <td class="px-6 py-4">
                            1.29556
                        </td>
                        <td class="px-6 py-4">
                            -5.0
                        </td>
                        <td class="px-6 py-4">
                            93,383.37
                        </td>
                        <td class="px-6 py-4">
                            14s
                        </td>
                        <td class="px-6 py-4">
                            26.91%
                        </td>
                    </tr>
                </tbody>
                <!-- <script>
                    ApplyColorToProfitAndGain();
                </script> -->
            </table>
        </div>
</div>
</template>