<script setup lang="ts">
import { NButton, NCard, NGradientText } from 'naive-ui'
import { useRouter } from 'vue-router'
import ChristmasScene from '../components/ChristmasScene.vue'
import { useSurveyStore } from '../stores/survey'

const router = useRouter()
const survey = useSurveyStore()

function start() {
  survey.markStep(1)
  router.push('/happy')
}
</script>

<template>
  <section class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
    <ChristmasScene />

    <n-card class="glass-card" content-style="padding: 28px">
      <template #header>
        <div class="flex items-center gap-3">
          <n-gradient-text type="success" size="26">準備好迎接快樂了嗎？</n-gradient-text>
        </div>
      </template>
      <p class="text-lg leading-relaxed text-slate-100">
        這份聖誕問卷想聽聽你的快樂時刻，再分享一段音樂祝福。
        跟著題目輕鬆回答，就能把快樂傳遞給更多同事！
      </p>
      <div class="mt-8 flex gap-3">
        <n-button tertiary size="large" @click="start">開始作答 🎄</n-button>
        <n-button tertiary size="large" @click="survey.reset()">清空紀錄</n-button>
      </div>
    </n-card>
  </section>
</template>
