<script setup>
import Topbar from './components/Topbar.vue';
import AssetAllocation from './components/AssetAllocation.vue';
import FinanceSummary from './components/FinanceSummary.vue';
import EconomicCalendar from './components/EconomicCalendar.vue';
import GeneralInformation from './components/GeneralInformation.vue';
import Quotes from './components/Quotes.vue';
import DailyPeriods from './components/DailyPeriods.vue';
import MarketHours from './components/MarketHours.vue';
import AnalyzingPhrases from './components/AnalyzingPhrases.vue';
import HeatMap from './components/HeatMap.vue';
import './css/main.css'
import './css/responsive.css'

import { onMounted } from 'vue';

</script>


<template>
    <div class="box-wrapper" id="content">
      <Topbar />
        <div style="display: flex; flex-direction: row;">
          <div style="width: 30%; height: 500px; margin-left: 3%;">
            <Quotes />
          </div>
          <div style="width: 30%; height: 500px; margin-left: 3%; margin-right: 3%;">
            <MarketHours />
          </div>
          <div style="width: 30%; height: 500px; margin-right: 3%;">
            <EconomicCalendar />
          </div>
        </div>
        <div style="display: flex; flex-direction: row;">
          <div style="margin-top: 70px; width: 30%; margin-left: 3%; margin-right: 100px">
            <AnalyzingPhrases />
          </div>
          <div style="margin-top: 70px; width: 60%; height: 100%; margin-right: 3%;">
            <HeatMap />
          </div>
        </div>
    </div>
</template>./components/Topbar.vue
