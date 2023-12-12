import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


// ------------------------------------------------------------------
//                        Prime Vue's imports
// ------------------------------------------------------------------
import PrimeVue from 'primevue/config'; // Here
import "primevue/resources/themes/saga-blue/theme.css"; // Theme
import "primevue/resources/primevue.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // PrimeVue 
import 'primevue/resources/primevue.min.css';


// ------------------------------------------------------------------
//                        Prime Vue Components
// ------------------------------------------------------------------
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Password from 'primevue/password';
// ------------------------------------------------------------------



// ------------------------------------------------------------------
//                          Axios's imports
// ------------------------------------------------------------------
import axios from 'axios'
import VueAxios from 'vue-axios'
// ------------------------------------------------------------------


createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.use(ToastService)
.use(VueAxios, axios)
.component('ButtonVue', Button)
.component('InputTextVue', InputText)
.component('ToastVue', Toast)
.component('PasswordVue', Password)
.mount('#app')
