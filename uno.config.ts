import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'glass-card': 'bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl'
  },
  theme: {
    colors: {
      holly: '#155e63',
      berry: '#e94560',
      candle: '#f5d0a9'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ]
})
