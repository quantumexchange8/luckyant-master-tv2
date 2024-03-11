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
                <h3>Quotes</h3>
            </div>
        </div>
        <div class="trader-dashboard-frame" style="width: 100%; height: 100%;">
            <!-- Replace the following iframe section with the Forex Rates Widget code -->
            <iframe
                src="https://widget.myfxbook.com/widget/market-quotes.html?symbols=AUDUSD,EURGBP,EURUSD,GBPUSD,NZDJPY,USDCAD,USDCHF,USDJPY,XAUUSD"
                style="border: 0; width: 100%; height: 100%;"></iframe>
            <div style="margin-top: 10px;">
            </div>
        </div>
    </div>
</template>
