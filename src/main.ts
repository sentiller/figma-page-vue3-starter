import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FigmaPage from 'figma-page'

const app = createApp(App)
app.use(router)
app.use(FigmaPage)
app.mount('#app')
