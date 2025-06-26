import { createApp, ref, watchEffect } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

// Theme presets (styled mode)
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'

// PrimeIcons are still CSS-based — keep this line
import 'primeicons/primeicons.css'

// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const isDark = ref(prefersDark.matches)

prefersDark.addEventListener('change', (e) => {
    isDark.value = e.matches
})

// Dynamic theme preset selection
const currentPreset = ref(isDark.value ? Aura : Lara)
watchEffect(() => {
    currentPreset.value = isDark.value ? Aura : Lara
})

// App setup
const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: currentPreset.value,
        options: {
            darkModeSelector: 'system'
        }
    }
})

app.mount('#app')
