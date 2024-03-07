<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="content-right-up">
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
                <h3>GENERAL INFORMATION</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame">
            <div class="information-content">
                <div class="information-content-left">
                    <div class="information-part-1">
                        <p>Profit</p>
                        <p>Floating P/L</p>
                        <p>Equity</p>
                        <p>Balance</p>
                        <p>Deposit</p>
                        <p>Withdrawal</p>
                    </div>
                    <div class="information-part-2">
                        <p>Total Growth</p>
                        <p>Current Month Growth</p>
                        <p>Max. Daily Growth</p>
                        <p>Current Drawdown</p>
                        <p>Max. Drawdown</p>
                    </div>
                    <div class="information-part-3">
                        <p>Investors</p>
                        <p>Leverage</p>
                        <p>Performance Fee</p>
                        <p>Started Date</p>
                        <p>Active Days</p>
                        <p>Latest Activity</p>
                    </div>
                </div>
                <div class="information-content-right">
                    <div class="information-data-part-1">
                        <p>$ 1,382,383.83</p>
                        <p class="font-green-color">$ 37,283.38</p>
                        <p>$ 1,373,383.28</p>
                        <p>$ 1,000,000.00</p>
                        <p>$ 738,383.43</p>
                        <p>$ 584,485.28</p>  
                    </div>
                    <div class="information-data-part-2">
                        <p class="font-green-color">+2,383.39%</p>
                        <p class="font-green-color">+637.37%</p>
                        <p class="font-green-color">+362.27%</p>
                        <p>8.28%</p>
                        <p>20.37%</p>
                    </div>
                    <div class="information-data-part-3">
                        <p>100</p>
                        <p>1:100</p>
                        <p>30%</p>
                        <p>12.02.2017</p>
                        <p>2,362 days</p>
                        <p>30 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>