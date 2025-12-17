import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createDiscreteApi, darkTheme, zhTW } from 'naive-ui'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

createDiscreteApi(['message'], {
  configProviderProps: {
    locale: zhTW,
    theme: darkTheme
  }
})

app.mount('#app')
