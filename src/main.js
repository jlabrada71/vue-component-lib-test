import { createApp } from 'vue'
import App from './App.vue'
import labradaComponents from 'labrada-components'
import '../node_modules/labrada-components/dist/styles.css'

import './assets/main.css'

createApp(App).use(labradaComponents).mount('#app')
