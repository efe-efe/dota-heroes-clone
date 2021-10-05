<template>
    <div class="hero-card" :style="styleObject">
        {{heroName}}
    </div>
</template>
<script>
    export default {
        name: 'HeroCard',
        props: {
            heroName: String,
        },
        data: function() {
            return {
                styleObject: {
                    backgroundImage: `url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${this.heroName}.png")`
                },
            }
        }
    }
</script>
<style>
    .hero-card {
        width: 225px;
        height: 127px;
        box-shadow: 1px 1px 4px #000;
        transition-duration: .3s;
        transition-timing-function: ease-out;
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        
        align-self: normal;
    }

    .hero-card:hover {
        transform: scale(1.4);
    }
</style>