import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createDiscreteApi, NConfigProvider, darkTheme, zhTW } from 'naive-ui'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Ensure discrete components available when we need toast in the future
createDiscreteApi(['message'], {
  configProviderProps: {
    locale: zhTW,
    theme: darkTheme
  }
})

app.component('NConfigProvider', NConfigProvider)
app.mount('#app')
