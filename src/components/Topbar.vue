<script setup>
import { ref } from 'vue';

const date = ref('');
const time = ref('');
const svgSrc = ref('/src/assets/svg/all-time.svg');

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

const handleMouseOver = () => {
  svgSrc.value = '/src/assets/svg/all-time-hover.svg';
};

const handleMouseOut = () => {
  svgSrc.value = '/src/assets/svg/all-time.svg';
};

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial update

</script>

<!-- <template>
    <div class="header-left">
        <div class="date-n-time">
            <div id="currentDate" class="currentDate">{{ date }}</div>
            <div id="currentTime" class="currentTime">{{ time }}</div>
        </div>
    </div>
</template> -->

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
            <h1>Lucky ant trading master data platform</h1>
        </div>
    </div>
    <div class="line-up-down"></div>
    <div class="line-center"></div>
    <div class="line-down-up"></div>
    <div class="header-right">
        <div class="label-shape"></div>
        <div id="svg-container">
            <img id="svg-img" 
             :src="svgSrc"
             alt=""
             @mouseover="handleMouseOver"
             @mouseout="handleMouseOut">
        </div>
        <!-- <script>
            const svgImg = document.getElementById('svg-img');
        
            // Add event listeners for mouseover and mouseout
            svgImg.addEventListener('mouseover', function() {
                // Change src to an SVG with hover effect
                svgImg.src = 'assets/svg/all-time-hover.svg'; // Change to your hover SVG file path
            });

            svgImg.addEventListener('mouseout', function() {
                // Restore original src
                svgImg.src = 'assets/svg/all-time.svg'; // Change to your original SVG file path
            });
        </script> -->
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


