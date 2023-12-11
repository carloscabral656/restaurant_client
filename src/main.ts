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
import 'primevue/resources/primevue.min.css';

// Components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
// ------------------------------------------------------------------


createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.use(ToastService)
.component('ButtonVue', Button)
.component('InputTextVue', InputText)
.component('ToastVue', Toast)
.mount('#app')
