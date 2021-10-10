<template>
  <div class="heroes">
    <div class="navbar">
    </div>
    <div class="heroes__body">
      <h1>ELIGE A TU HÉROE</h1>
      <p>Estrategas de la magia, feroces bestias y villanos astutos... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.</p>
      <HeroSearchbar />
      <div class="hero-grid">
        <HeroCard 
          v-for="(hero, index) in heroes" 
          v-bind:key="index" 
          :hero-name="hero.name" 
          :hero-attribute="hero.attribute"
          :hero-code-name="hero.codeName"
        />
      </div>
    </div>
    <div class="heroes__footer">
    </div>
  </div>
</template>

<script>
import './reset.css';

const ATTRIBUTE_NAMES = {
  ['str']: 'strength',
  ['agi']: 'agility',
  ['int']: 'intelligence',
}

const HERO_CODE_NAMES = {
  ['windranger']: 'windrunner',
  ['magnus']: 'magnataur',
  ['shadow fiend']: 'nevermore',
  ['vengeful spirit']: 'vengefulspirit',
  ['zeus']: 'zuus',
  ['necrophos']: 'necrolyte',
  ['queen of pain']: 'queenofpain',
  ['wraith king']: 'skeleton king',
  ['clockwerk']: 'rattletrap',
  ['natures prophet']: 'furion',
  ['lifestealer']: 'life stealer',
  ['outworld destroyer']: 'obsidian destroyer',
  ['centaur warrunner']: 'centaur',
  ['timbersaw']: 'shredder',
  ['treant protector']: 'treant',
  ['io']: 'wisp',
  ['doom']: 'doom bringer',
}

export default {
  name: 'App',
  data: function() {
    return {
      heroes: [],
    }
  },
  mounted: function() {
    fetch('https://615faa05f7254d00170681c4.mockapi.io/api/heroes')
    .then((response) => {
      response.json()
      .then((data) => {
        this.heroes = data.map((hero) => {
          const name = hero.localized_name.toLowerCase().replace('-', '').replace("'", '');
          return {
            name,
            attribute: ATTRIBUTE_NAMES[hero.primary_attr],
            codeName:  (HERO_CODE_NAMES[name]) ? HERO_CODE_NAMES[name] : name,
          }
        });
      });
    })
    .catch(() => {

    });
  }
}
</script>

<style>

.heroes {
}

img {
  box-sizing: border-box;
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
