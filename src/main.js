import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import '@/assets/styles/reveal_theme.scss'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(router).use(pinia)

app.use(Toast)

app.mount('#app')
