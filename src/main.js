import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import HeroCard from './components/HeroCard';

const app = createApp(App);
app.use(PrimeVue);
app.component('HeroCard', HeroCard);
app.mount('#app');