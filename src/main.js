import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// router not needed as no navigation possibility
// import router from './router'

const app = createApp(App)

// app.use(router)

app.mount('#app')
