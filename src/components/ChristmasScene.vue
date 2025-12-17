<template>
  <div class="relative max-w-3xl mx-auto">
    <div
      class="glass-card p-8 md:p-10 bg-gradient-to-br from-emerald-800/80 via-emerald-700/80 to-slate-900/80 text-slate-100"
    >
      <div class="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <p class="uppercase tracking-[0.25em] text-xs text-candle mb-2">聖誕驚喜 · 2025</p>
          <h1 class="text-3xl md:text-4xl font-bold leading-snug">
            讓音樂和祝福帶來<span class="text-berry">滿滿快樂</span>
          </h1>
          <p class="text-slate-200/80 mt-3 leading-relaxed">
            分享今年最開心的時刻，挑一首你最愛的歌，
            在聖誕樹下讓藍芽喇叭把幸福播放出來。
          </p>
          <div class="flex flex-wrap gap-3 mt-5 text-sm text-slate-100">
            <span class="px-3 py-1 rounded-full bg-white/10 border border-white/15">
              🎧 選歌放送
            </span>
            <span class="px-3 py-1 rounded-full bg-white/10 border border-white/15">
              🎄 聖誕祝福
            </span>
            <span class="px-3 py-1 rounded-full bg-white/10 border border-white/15">
              🎁 交換禮物
            </span>
          </div>
        </div>
        <div class="relative">
          <svg viewBox="0 0 360 320" class="w-full drop-shadow-xl" role="img" aria-label="聖誕節插畫">
            <defs>
              <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#193c52" />
                <stop offset="100%" stop-color="#0b1625" />
              </linearGradient>
              <linearGradient id="tree" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#2dd4bf" />
                <stop offset="100%" stop-color="#0ea5e9" />
              </linearGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="360" height="320" rx="24" fill="url(#sky)" />
            <g fill="#fff7ed" opacity="0.85">
              <circle v-for="i in 18" :key="i" :cx="(i * 17) % 360" :cy="(i * 23) % 160" :r="(i % 4) + 1" />
            </g>
            <g transform="translate(180 60)">
              <polygon points="0,-20 18,10 -18,10" fill="#facc15" filter="url(#glow)" />
              <path
                d="M0 0 L80 140 H-80 Z"
                fill="url(#tree)"
                stroke="#0f172a"
                stroke-width="3"
                stroke-linejoin="round"
              />
              <circle v-for="(x, idx) in [-35, -10, 20, 45]" :key="idx" :cx="x" :cy="50 + idx * 18" r="6" fill="#f43f5e" />
              <circle v-for="(x, idx) in [-55, -15, 30]" :key="'b-' + idx" :cx="x" :cy="100 + idx * 22" r="6" fill="#c084fc" />
              <rect x="-14" y="140" width="28" height="28" fill="#9a3412" stroke="#0f172a" stroke-width="3" />
            </g>
            <g transform="translate(70 210)">
              <rect x="-40" y="20" width="110" height="80" rx="10" fill="#f472b6" />
              <rect x="-5" y="20" width="20" height="80" fill="#fef3c7" />
              <rect x="-40" y="50" width="110" height="15" fill="#fef3c7" />
              <path d="M10 20 c8 -16 20 -16 28 0" fill="#fef3c7" />
              <path d="M40 20 c8 -16 20 -16 28 0" fill="#fef3c7" />
            </g>
            <g transform="translate(250 225)">
              <rect x="-50" y="10" width="90" height="70" rx="12" fill="#93c5fd" />
              <rect x="-8" y="10" width="16" height="70" fill="#1d4ed8" />
              <rect x="-50" y="42" width="90" height="12" fill="#1d4ed8" />
              <circle cx="-5" cy="10" r="12" fill="#fca5a5" />
              <circle cx="5" cy="10" r="12" fill="#fca5a5" />
            </g>
            <rect x="20" y="270" width="320" height="18" rx="9" fill="#0ea5e9" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
