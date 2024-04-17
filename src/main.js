import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import './index.css'
import 'primevue/resources/themes/aura-dark-pink/theme.css'
import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(PrimeVue)
  .component('Card', Card)
  .component('Toolbar', Toolbar)
  .mount('#app')
