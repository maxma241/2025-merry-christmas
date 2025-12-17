<script setup lang="ts">
import { NButton, NCard, NGradientText, NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useSurveyStore } from '../stores/survey'

const router = useRouter()
const survey = useSurveyStore()

const musicChoices = ['超級喜歡！', '我可以一直聽', '每天都需要音樂陪伴']

function goPrev() {
  router.push('/happy')
}

function goNext() {
  survey.markStep(3)
  router.push('/complete')
}
</script>

<template>
  <n-card class="glass-card" content-style="padding: 28px" aria-labelledby="music-title">
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <n-gradient-text id="music-title" type="warning" size="28">你喜不喜歡聽音樂？</n-gradient-text>
      </div>
      <p class="text-lg text-slate-100/80">音樂永遠帶來好心情，所以只有開心的選項！</p>

      <n-radio-group v-model:value="survey.answers.lovesMusic" name="music-love">
        <NSpace vertical size="large">
          <n-radio v-for="choice in musicChoices" :key="choice" :value="choice" size="large">{{ choice }}</n-radio>
        </NSpace>
      </n-radio-group>
    </div>

    <div class="mt-8 flex items-center justify-between text-base text-slate-200/80">
      <n-button tertiary size="large" @click="goPrev">⬅️ 上一題</n-button>
      <n-button type="primary" size="large" @click="goNext">下一題 ➡️</n-button>
    </div>
  </n-card>
</template>
