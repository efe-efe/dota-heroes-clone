<template>
  <div class="heroes">
    <div class="navbar">
    </div>
    <div class="heroes__body">
      <h1>ELIGE A TU HÉROE</h1>
      <p>Estrategas de la magia, feroces bestias y villanos astutos... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.</p>
      <div class="hero-searchbar">
      </div>
      <div class="hero-grid">
        <HeroCard v-for="(hero, index) in heroes" v-bind:key="index" :hero-name="hero.name"/>
      </div>
    </div>
    <div class="heroes__footer">
    </div>
  </div>
</template>

<script>
import './reset.css';
import HeroCard from './components/HeroCard';
export default {
  name: 'App',
  components: [
    HeroCard
  ],
  data: function() {
    return {
      heroes: [
        {name: 'weaver'},
        {name: 'clinkz'},
        {name: 'antimage'},
        {name: 'sniper'},
        {name: 'snapfire'},
        {name: 'undying'},
        {name: 'warlock'},
        {name: 'enchantress'},
        {name: 'wisp'},
        {name: 'tiny'},
        {name: 'invoker'},
        {name: 'juggernaut'},
        {name: 'weaver'},
        {name: 'clinkz'},
        {name: 'antimage'},
        {name: 'sniper'},
        {name: 'snapfire'},
        {name: 'undying'},
        {name: 'warlock'},
        {name: 'enchantress'},
        {name: 'wisp'},
        {name: 'tiny'},
        {name: 'invoker'},
        {name: 'juggernaut'},
        {name: 'weaver'},
        {name: 'clinkz'},
        {name: 'antimage'},
        {name: 'sniper'},
        {name: 'snapfire'},
        {name: 'undying'},
        {name: 'warlock'},
        {name: 'enchantress'},
        {name: 'wisp'},
        {name: 'tiny'},
        {name: 'invoker'},
        {name: 'juggernaut'},
      ],
    }
  }
}
</script>

<style>

.heroes {
}

h1 {
  margin-top: 100px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
}

p {
  margin-bottom: 30px;
  text-align: center;
  font-size: 26px;
}

.heroes__body {
  padding: 0 100px;
}

.heroes__footer {
  padding: 30px 100px;
}

.navbar {
  height: 80px;
  border: 1px solid red;
}

.hero-grid {
  display: grid;
  justify-items: center;
  max-width: 1200px;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
}

.p-grid {
  border: 1px solid red;
}
</style>
