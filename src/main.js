import './assets/main.css'
import './assets/output.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'flowbite';
import mitt from "mitt";
import PrimeVue from 'primevue/config';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.config.globalProperties.$emitter = mitt();
app.mount('#app')
