<script setup>
import { onMounted, ref } from 'vue';

const analyzingPhrases = [
    "Impact analyzing...",
    "US News analyzing...",
    "Global News analyzing...",
    "Reporting checking..",
    "Data price loaded...",
    "Technical analysis...",
    "Fundamental analysis...",
    "AI processing..."
];

const analyzingHistory = ref([]);
const randomPhrase = ref(getRandomPhrase());
const contentContainer = ref(null);

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * analyzingPhrases.length);
    return analyzingPhrases[randomIndex].trim(); // Trim leading and trailing spaces
}

onMounted(() => {
    setInterval(() => {
        const phrase = getRandomPhrase();
        randomPhrase.value = phrase;
        analyzingHistory.value.push(phrase); // Add new phrase to the end
        // Scroll to the bottom of the container after adding a new phrase
        contentContainer.value.scrollTop = contentContainer.value.scrollHeight;
    }, 500);
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
                <h3>Analyze</h3>
            </div>
        </div>
        <div class="information-content" ref="contentContainer" style="overflow-y: auto; max-height: 200px; scrollbar-width: none; -ms-overflow-style: none;">
            <ul class="phrase-list" style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 10px; text-align: left;" v-for="(phrase, index) in analyzingHistory" :key="index">{{ phrase }}</li>
            </ul>
        </div>
    </div>
</template>
