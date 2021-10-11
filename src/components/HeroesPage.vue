<template>
  <div class="heroes">
    <div class="navbar">
    </div>
    <div class="heroes__body">
      <h1>ELIGE A TU HÉROE</h1>
      <p>Estrategas de la magia, feroces bestias y villanos astutos... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.</p>
      <hero-searchbar />
      <div class="hero-grid">
        <hero-card 
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
<script lang="ts">
import HeroCard from './HeroCard.vue';
import HeroSearchbar from './HeroSearchbar.vue';
import { defineComponent } from 'vue';

const ATTRIBUTE_NAMES = {
    ['str']: 'strength',
    ['agi']: 'agility',
    ['int']: 'intelligence',
}

export default defineComponent({
    components: {
        'hero-card': HeroCard,
        'hero-searchbar': HeroSearchbar,
    },
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
                this.heroes = data.map((hero: {
                    name: string,
                    localized_name: string,
                    primary_attr: 'agi' | 'str' | 'int',
                }) => {
                return {
                    name: hero.localized_name,
                    attribute: ATTRIBUTE_NAMES[hero.primary_attr],
                    codeName:  hero.name.split('npc_dota_hero_')[1],
                }
                });
            });
        })
        .catch(() => {

        });
    }
});
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
  display: flex;
  flex-direction: column;
  align-items: center;
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