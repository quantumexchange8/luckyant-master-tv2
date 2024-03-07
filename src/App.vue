<script setup>
import Topbar from './components/Topbar.vue';
import AssetAllocation from './components/AssetAllocation.vue';
import FinanceSummary from './components/FinanceSummary.vue';
import ForexMarket from './components/ForexMarket.vue';
import GeneralInformation from './components/GeneralInformation.vue';
import TraderDashboard from './components/TraderDashboard.vue';
import DailyPeriods from './components/DailyPeriods.vue';
import Chart from './components/Chart.vue';
import TradesHistory from './components/TradesHistory.vue';
import TradesStatistics from './components/TradesStatistics.vue';
import './css/main.css'
import './css/responsive.css'

// import './src/main.css'
// import './src/responsive.css';

import { onMounted } from 'vue';

</script>


<!-- <template>
    <Header />
    <div class="content">
        <div class="content-left">
            Masters
            MasterCharts
        </div>
    </div>
    <Masters />
</template> -->

<template>
    <div class="box-wrapper" id="content">
      <Topbar />
        <div id="box2" class="content">
          <div id="box3" class="content-left">
            <TraderDashboard />
            <div id="box5" class="content-left-right">
              <GeneralInformation />
              <TradesStatistics />
            </div>
          </div>
          <div id="box6" class="content-right">
            <div id="box13">
              <div id="box7">
                <div id="box9-1">
                  <Chart />
                  <div id="box9-2">
                    <FinanceSummary />
                    <AssetAllocation />
                  </div>
                </div>
                <div id="box10">
                  <ForexMarket />
                  <DailyPeriods />
                </div>
              </div>
              <TradesHistory />
            </div>
          </div>
        </div>
    </div>
</template>./components/Topbar.vue
