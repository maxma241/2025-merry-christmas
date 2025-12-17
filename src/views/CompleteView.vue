<script setup lang="ts">
import { NButton, NCard, NGradientText, NSpace, NTag } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useSurveyStore } from '../stores/survey'

const router = useRouter()
const survey = useSurveyStore()

function restart() {
  survey.reset()
  router.push('/')
}
</script>

<template>
  <n-card class="glass-card" content-style="padding: 28px" aria-labelledby="complete-title">
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <n-tag type="success" round strong>完成</n-tag>
        <n-gradient-text id="complete-title" type="success" size="28">耶！這就是你的禮物 🎁</n-gradient-text>
      </div>
      <p class="text-lg text-slate-100/80 leading-relaxed">
        感謝分享你的快樂瞬間和音樂喜好。這份聖誕禮物是一顆 <strong class="text-berry">藍芽喇叭</strong>，
        希望能陪你播出更多笑容！
      </p>
      <ul class="space-y-2 text-base text-slate-100/90">
        <li>💌 你的快樂關鍵字：{{ survey.answers.happinessHighlight || '等待填寫' }}</li>
        <li>🎶 音樂心情：{{ survey.answers.lovesMusic }}</li>
      </ul>
    </div>

    <NSpace class="mt-8">
      <n-button type="success" size="large" strong>
        <span class="text-white">開心領取禮物</span>
      </n-button>
      <n-button tertiary size="large" @click="restart">再玩一次</n-button>
    </NSpace>
  </n-card>
</template>
