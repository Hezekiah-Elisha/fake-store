import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Card from 'primevue/card'
import Button from 'primevue/button'

import './assets/main.css'

const app = createApp(App)

app.use(router, PrimeVue)
app.component('Card', Card)
app.component('Button', Button)

app.mount('#app')
