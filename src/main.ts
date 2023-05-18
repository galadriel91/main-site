import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/routes/index'
import App from './App.vue'
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
