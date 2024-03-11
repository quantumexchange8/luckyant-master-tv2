<script setup>
</script>

<template>
    <div id="market-hours-widget" style="width: 100%; height: 100%">
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
                <h3>Market Hours</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame" style="width: 100%; height: 100%">
            <!-- Market Hours Widget from Myfxbook -->
            <iframe src="https://widget.myfxbook.com/widget/market-hours.html"
                style="border: 0; width:100%; height:100%;"></iframe>
            <div style="margin-top: 10px;">
            </div>
        </div>
    </div>
</template>