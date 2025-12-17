<script setup lang="ts">
import { NConfigProvider, darkTheme, zhTW } from 'naive-ui'
import { RouterView } from 'vue-router'
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhTW">
    <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_35%),_radial-gradient(circle_at_bottom_right,_rgba(255,0,86,0.08),_transparent_30%)] text-slate-50 pb-16">
      <header class="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-2">
        <p class="text-sm uppercase tracking-[0.2em] text-candle">Make People Happy</p>
        <h1 class="text-3xl font-bold flex items-center gap-2">
          聖誕開心問卷
          <span class="text-lg font-normal text-slate-200">一起分享快樂</span>
        </h1>
      </header>

      <main class="max-w-5xl mx-auto px-4">
        <router-view />
      </main>
    </div>
  </n-config-provider>
</template>
