import { createApp } from 'vue';
import App from './App.vue';
import HeroCard from './components/HeroCard.vue';
import HeroSearchbar from './components/HeroSearchbar.vue';

const app = createApp(App);
app.component('HeroCard', HeroCard);
app.component('HeroSearchbar', HeroSearchbar);
app.mount('#app');