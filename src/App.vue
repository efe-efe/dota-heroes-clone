<template>
  <div class="heroes">
    <div class="navbar">
    </div>
    <div class="heroes__body">
      <h1>ELIGE A TU HÉROE</h1>
      <p>Estrategas de la magia, feroces bestias y villanos astutos... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.</p>
      <HeroSearchbar />
      <div class="hero-grid">
        <HeroCard v-for="(hero, index) in heroes" v-bind:key="index" :hero-name="hero.name" :hero-attribute="hero.attribute"/>
      </div>
    </div>
    <div class="heroes__footer">
    </div>
  </div>
</template>

<script>
import './reset.css';
export default {
  name: 'App',
  data: function() {
    return {
      heroes: [
        {name: 'weaver', attribute: 'agility'},
        {name: 'clinkz', attribute: 'strength'},
        {name: 'antimage', attribute: 'strength'},
        {name: 'sniper', attribute: 'strength'},
        {name: 'snapfire', attribute: 'strength'},
        {name: 'undying', attribute: 'strength'},
        {name: 'warlock', attribute: 'intelligence'},
        {name: 'enchantress', attribute: 'intelligence'},
        {name: 'wisp', attribute: 'strength'},
        {name: 'tiny', attribute: 'strength'},
        {name: 'invoker', attribute: 'strength'},
        {name: 'juggernaut', attribute: 'strength'},
        {name: 'weaver', attribute: 'strength'},
        {name: 'clinkz', attribute: 'strength'},
        {name: 'antimage', attribute: 'strength'},
        {name: 'sniper', attribute: 'strength'},
        {name: 'snapfire', attribute: 'strength'},
        {name: 'undying', attribute: 'strength'},
        {name: 'warlock', attribute: 'strength'},
        {name: 'enchantress', attribute: 'strength'},
        {name: 'wisp', attribute: 'strength'},
        {name: 'tiny', attribute: 'strength'},
        {name: 'invoker', attribute: 'strength'},
        {name: 'juggernaut', attribute: 'strength'},
        {name: 'weaver', attribute: 'strength'},
        {name: 'clinkz', attribute: 'strength'},
        {name: 'antimage', attribute: 'strength'},
        {name: 'sniper', attribute: 'strength'},
        {name: 'snapfire', attribute: 'strength'},
        {name: 'undying', attribute: 'strength'},
        {name: 'warlock', attribute: 'strength'},
        {name: 'enchantress', attribute: 'strength'},
        {name: 'wisp', attribute: 'strength'},
        {name: 'tiny', attribute: 'strength'},
        {name: 'invoker', attribute: 'strength'},
        {name: 'juggernaut', attribute: 'strength'},
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
  max-width: 1200px;
  gap: 18.75px;
  margin-top: 15px;
  grid-template-columns: repeat(auto-fit, 225px);
  justify-content: center;
}

.p-grid {
  border: 1px solid red;
}
</style>
