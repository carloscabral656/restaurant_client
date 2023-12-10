import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Prime Vue imports ------------------------------------------------
import PrimeVue from 'primevue/config'; // here
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
// ------------------------------------------------------------------


createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.mount('#app')
