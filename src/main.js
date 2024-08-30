import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './businesslogic/i18n';
import { createPinia } from 'pinia';
const app = createApp(App);
app.use(createPinia());
app.use(i18n)
app.mount('#app')
