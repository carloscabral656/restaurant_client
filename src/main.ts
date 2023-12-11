import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Prime Vue imports ------------------------------------------------
import PrimeVue from 'primevue/config'; // Here
import "primevue/resources/themes/saga-blue/theme.css"; // Theme
import "primevue/resources/primevue.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // PrimeVue 

// Components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
// ------------------------------------------------------------------


createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.component('ButtonVue', Button)
.component('InputTextVue', InputText)
.mount('#app')
