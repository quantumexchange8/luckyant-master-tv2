<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';
const date = ref('');
const time = ref('');
const updateDateTime = () => {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var dateString = day + ' . ' + month + ' . ' + year;
    var timeString = hours + ':' + minutes + ':' + seconds;
    date.value = dateString;
    time.value = timeString;
}
const online = ref(true); 

onMounted(() => {
    updateDateTime(); // Initial update of date and time
    setInterval(updateDateTime, 1000); // Update date and time every second
});
</script>

<template>
    <div id="header" class="header-flex">
        <div class="header-left">
            <div class="date-n-time">
                <div id="currentDate" class="currentDate">{{ date }}</div>
                <div id="currentTime" class="currentTime">{{ time }}</div>
            </div>
        </div>
        <div class="line-left">
            <div class="line-left-white-border"></div>
        </div>
        <div class="header-center">
            <div class="icon">
                <img src="/src/assets/dashboard/icon-trans.png" alt="">
            </div>
            <div class="header-text">
                <h1>Lucky&nbsp;ant&nbsp;trading&nbsp;master&nbsp;data&nbsp;platform</h1>
            </div>
        </div>
        <div class="line-up-down"></div>
        <div class="line-center"></div>
        <div class="line-down-up"></div>
        <div class="header-right">
            <div :class="['status-circle', online ? 'online' : 'offline']"></div>
        </div>
        <div class="line-right"></div>
        <div class="parallelogram-shape">
            <div class="parallelogram-left-dark"></div>
            <div class="parallelogram-left-light"></div>
            <div class="parallelogram-right-light"></div>
            <div class="parallelogram-right-dark"></div>
        </div>
    </div>
</template>
