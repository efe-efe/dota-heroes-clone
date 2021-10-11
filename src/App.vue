<template>
  <heroes-page />
</template>

<script>
import './reset.css';
import HeroesPage from './components/HeroesPage.vue';
export default {
  components: {
    'heroes-page': HeroesPage,
  },
  name: 'App',
}
</script>
