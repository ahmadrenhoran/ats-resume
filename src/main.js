import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router/main';

const app = createApp(App);
app.use(router).use(autoAnimatePlugin).mount('#app');
