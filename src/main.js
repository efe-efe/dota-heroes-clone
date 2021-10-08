import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import HeroCard from './components/HeroCard';
import HeroSearchbar from './components/HeroSearchbar';

const app = createApp(App);
app.use(PrimeVue);
app.component('HeroCard', HeroCard);
app.component('HeroSearchbar', HeroSearchbar);
app.mount('#app');