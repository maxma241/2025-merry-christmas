<script setup lang="ts">
import { computed } from 'vue'
import { NButton, NCard, NInput } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useSurveyStore } from '../stores/survey'

const router = useRouter()
const survey = useSurveyStore()

const canNext = computed(() => survey.answers.happinessHighlight.trim().length > 5)

function goPrev() {
  router.push('/')
}

function goNext() {
  if (!canNext.value) return
  survey.markStep(2)
  router.push('/music')
}
</script>

<template>
  <n-card class="glass-card" content-style="padding: 28px" aria-labelledby="happy-title">
    <div class="space-y-4">
      <h2 id="happy-title" class="text-3xl font-bold">今年在公司或工作上，你最開心的人事物是什麼？</h2>
      <p class="text-lg text-slate-100/80">
        想到就會微笑的專案、夥伴或瞬間，寫下來一起分享吧！
      </p>
      <n-input
        v-model:value="survey.answers.happinessHighlight"
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 9 }"
        placeholder="至少 6 個字，讓我們感受你的喜悅"
      />
    </div>

    <div class="mt-8 flex items-center justify-between text-base text-slate-200/80">
      <n-button tertiary size="large" @click="goPrev">⬅️ 上一題</n-button>
      <n-button tertiary size="large" :disabled="!canNext" @click="goNext">下一題 ➡️</n-button>
    </div>
  </n-card>
</template>
