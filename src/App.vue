<script setup lang="ts">
import { computed } from 'vue'
import {
  NButton,
  NCard,
  NConfigProvider,
  NGradientText,
  NInput,
  NProgress,
  NRadio,
  NRadioGroup,
  NSpace,
  NSteps,
  NStep,
  NTag
} from 'naive-ui'
import { useSurveyStore } from './stores/survey'
import ChristmasScene from './components/ChristmasScene.vue'

const survey = useSurveyStore()

const stages = ['intro', 'q1', 'q2', 'complete'] as const
const stageIndex = computed(() => stages.indexOf(survey.stage as (typeof stages)[number]))

const progress = computed(() => {
  if (survey.stage === 'intro') return 0
  if (survey.stage === 'complete') return 100
  return (stageIndex.value / (stages.length - 1)) * 100
})

const happinessPlaceholder = '留下今年你在工作中開心的片段、成就或身邊讓你笑的同事吧！'

const canGoNext = computed(() => {
  if (survey.stage === 'q1') return survey.answers.happinessHighlight.trim().length > 5
  return true
})

function start() {
  survey.stage = 'q1'
}

function next() {
  if (survey.stage === 'q1') survey.stage = 'q2'
  else if (survey.stage === 'q2') survey.stage = 'complete'
}

function prev() {
  if (survey.stage === 'q2') survey.stage = 'q1'
}

function restart() {
  survey.reset()
}
</script>

<template>
  <n-config-provider :theme="null">
    <div class="min-h-screen pb-16">
      <header class="max-w-5xl mx-auto px-4 py-10 flex items-center justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-candle">Make People Happy</p>
          <h2 class="text-2xl font-semibold mt-1">聖誕音樂禮物問答</h2>
        </div>
        <n-tag type="success" size="large" strong round>藍芽喇叭 🎁</n-tag>
      </header>

      <main class="max-w-5xl mx-auto px-4 grid gap-8">
        <ChristmasScene />

        <section class="glass-card p-6 md:p-8">
          <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div class="flex-1">
              <p class="text-sm text-slate-200/70">快樂指數</p>
              <n-progress :percentage="progress" status="success" :height="10" indicator-placement="inside" />
            </div>
            <NSteps :current="Math.max(stageIndex, 0)" size="small" status="process">
              <NStep title="準備" description="暖身" />
              <NStep title="分享喜悅" description="今年最開心的事" />
              <NStep title="音樂喜好" description="絕對喜歡" />
              <NStep title="恭喜領禮物" description="藍芽喇叭" />
            </NSteps>
          </div>
        </section>

        <section class="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-stretch">
          <n-card v-if="survey.stage === 'intro'" class="glass-card" content-style="padding: 24px">
            <template #header>
              <div class="flex items-center gap-3">
                <n-gradient-text type="success" size="24">準備好迎接快樂了嗎？</n-gradient-text>
                <n-tag type="warning" round>聖誕倒數</n-tag>
              </div>
            </template>
            <p class="text-slate-200/80 leading-relaxed">
              這個小小的問卷想先聽聽你的開心瞬間，再為你播放一首最棒的音樂。
              完成後直接領取 <span class="font-semibold text-berry">藍芽喇叭</span>，讓聖誕夜充滿旋律！
            </p>
            <NSpace class="mt-6" wrap>
              <n-button type="primary" size="large" strong @click="start">開始回答 🎄</n-button>
              <n-button quaternary type="info" size="large">我想先看看題目</n-button>
            </NSpace>
          </n-card>

          <n-card v-else-if="survey.stage === 'q1'" class="glass-card" content-style="padding: 24px">
            <template #header>
              <n-gradient-text type="info" size="24">今年在工作上最開心的事</n-gradient-text>
            </template>
            <p class="text-slate-200/70 mb-3">
              想到就讓人微笑的同事、專案或小確幸是什麼呢？寫下來一起分享吧！
            </p>
            <n-input
              v-model:value="survey.answers.happinessHighlight"
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 8 }"
              :placeholder="happinessPlaceholder"
            />
            <div class="flex justify-between items-center mt-5 text-sm text-slate-200/70">
              <span>至少 6 個字，讓我們感受你的笑容。</span>
              <div class="flex gap-2">
                <n-button tertiary @click="restart">重新開始</n-button>
                <n-button type="primary" :disabled="!canGoNext" @click="next">下一題 ➡️</n-button>
              </div>
            </div>
          </n-card>

          <n-card v-else-if="survey.stage === 'q2'" class="glass-card" content-style="padding: 24px">
            <template #header>
              <n-gradient-text type="success" size="24">你喜不喜歡聽音樂？</n-gradient-text>
            </template>
            <p class="text-slate-200/70 mb-3">音樂永遠能帶來快樂，所以只有正向選項！</p>
            <n-radio-group v-model:value="survey.answers.lovesMusic" name="music-love">
              <NSpace vertical size="large">
                <n-radio value="超級喜歡！">超級喜歡！</n-radio>
                <n-radio value="我可以一直聽">我可以一直聽</n-radio>
                <n-radio value="每天都需要音樂陪伴">每天都需要音樂陪伴</n-radio>
              </NSpace>
            </n-radio-group>
            <div class="flex justify-between items-center mt-5 text-sm text-slate-200/70">
              <div class="flex items-center gap-2">
                <n-tag type="info" round>必選：喜歡</n-tag>
              </div>
              <div class="flex gap-2">
                <n-button tertiary @click="prev">⬅️ 上一題</n-button>
                <n-button type="primary" @click="next">完成問卷 🎁</n-button>
              </div>
            </div>
          </n-card>

          <n-card v-else class="glass-card" content-style="padding: 24px">
            <template #header>
              <n-gradient-text type="warning" size="24">恭喜獲得藍芽喇叭！</n-gradient-text>
            </template>
            <p class="text-slate-200/80 leading-relaxed">
              感謝分享你的快樂故事與音樂喜好。這份聖誕禮物想陪你播放更多笑容，
              祝你在新的一年繼續被美好包圍！
            </p>
            <ul class="mt-4 space-y-2 text-slate-100">
              <li>💌 你的快樂關鍵字：{{ survey.answers.happinessHighlight || '等待填寫' }}</li>
              <li>🎶 音樂心情：{{ survey.answers.lovesMusic }}</li>
            </ul>
            <NSpace class="mt-6">
              <n-button type="success" size="large" strong>開心領取禮物 🎁</n-button>
              <n-button tertiary size="large" @click="restart">再玩一次</n-button>
            </NSpace>
          </n-card>

          <n-card class="glass-card" content-style="padding: 24px">
            <template #header>
              <div class="flex items-center gap-2">
                <n-tag type="success" size="small" round strong>小任務</n-tag>
                <span class="text-lg font-semibold">讓身邊的人也開心</span>
              </div>
            </template>
            <ol class="list-decimal list-inside space-y-3 text-slate-200/80">
              <li>跟抽到禮物的夥伴分享你選的音樂，再加一句祝福。</li>
              <li>在聖誕樹旁拍一張合照，留住今天的好心情。</li>
              <li>回到座位播放你們最愛的歌，讓辦公室充滿節奏！</li>
            </ol>
            <div class="mt-5 text-sm text-slate-300">
              只要有人開心，我們的任務就完成啦。祝你聖誕快樂、天天都快樂！
            </div>
          </n-card>
        </section>
      </main>
    </div>
  </n-config-provider>
</template>
