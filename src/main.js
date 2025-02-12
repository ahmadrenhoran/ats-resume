import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/main'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const app = createApp(App)
const pinia = createPinia()
app.component('QuillEditor', QuillEditor)
app.use(router).use(pinia).use(autoAnimatePlugin).mount('#app')
