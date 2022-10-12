import { createApp } from 'vue'
import App from './App.vue'
import SectionHeading from './components/SectionHeading.vue';
import AppAlert from './components/AppAlert.vue';

const app = createApp(App)

app.component('section-heading', SectionHeading);
app.component('app-alert', AppAlert);

app.mount('#app')
