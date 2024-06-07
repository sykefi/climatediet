import i18n from '@/locale/i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponents from './globals'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(GlobalComponents)
app.use(store)
app.use(router)
app.use(i18n)

app.mount('#app')
