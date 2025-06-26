import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import 'primeicons/primeicons.css'
// Optional theme:
import './assets/main.css'

const app = createApp(App)

app.use(PrimeVue)

// Register PrimeVue components
app.component('Button', Button)

app.mount('#app')
