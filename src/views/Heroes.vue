<template>
  <div class="heroes">
    <nav />
    <div class="heroes__body">
      <h1>ELIGE A TU HÉROE</h1>
      <p>Estrategas de la magia, feroces bestias y villanos astutos... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.</p>
      <HeroSearchbar 
        @on-input-change="filterHeroes"
      />
      <div class="hero-grid">
        <HeroCard 
          v-for="(hero, index) in filteredHeroes" 
          v-bind:key="index" 
          :hero-name="hero.name" 
          :hero-attribute="hero.attribute"
          :hero-code-name="hero.codeName"
        />
      </div>
    </div>
    <footer />
  </div>
</template>
<script lang="ts">
import HeroCard from '@/components/HeroCard.vue';
import HeroSearchbar from '@/components/HeroSearchbar.vue';
import { defineComponent } from 'vue';

const ATTRIBUTE_NAMES = {
    ['str']: 'strength',
    ['agi']: 'agility',
    ['int']: 'intelligence',
}

interface Hero {
  name: string,
  localized_name: string,
  primary_attr: 'agi' | 'str' | 'int',
}

export default defineComponent({
    components: {
        HeroCard,
        HeroSearchbar,
    },
    data: function() {
        return {
            heroes: [],
            filteredHeroes: [],
            searchQuery: '',
        }
    },
    mounted: async function() {
        const response = await fetch('https://615faa05f7254d00170681c4.mockapi.io/api/heroes');

        if (response.status === 200) {
            const data = await response.json();

            this.heroes = data.map((hero: Hero) => {
              return {
                  name: hero.localized_name,
                  attribute: ATTRIBUTE_NAMES[hero.primary_attr],
                  codeName:  hero.name.split('npc_dota_hero_')[1],
              }
            });
            this.filteredHeroes = this.heroes.sort(function (hero: Hero, nextHero: Hero) {
              if (hero.name > nextHero.name) {
                return 1;
              }
              if (hero.name < nextHero.name) {
                return -1;
              }
              return 0;
            });
        }
    },
    methods: {
        filterHeroes: function(event: any) {
          this.filteredHeroes = this.heroes.filter((hero: Hero) => {
            return hero.name.toLowerCase().includes(event.target.value);
          });
        }
    }
});
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  padding: 30px 100px;
}

nav {
  height: 80px;
  border: 1px solid red;
}

.hero-grid {
  display: grid;
  width: 100%;
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