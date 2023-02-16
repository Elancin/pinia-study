import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 1.引入pinia
import { createPinia } from 'pinia'
// 2.实例化pinia
const pinia = createPinia()

const app = createApp(App)
// 3.挂载pinia
app.use(pinia)
app.mount('#app')
