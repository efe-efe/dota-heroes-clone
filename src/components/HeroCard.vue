<template>
    <a class="hero-card" :style="styleObject" href="https://google.cl">
        <div class="hero-card__name">
            <img class="hero-card__name-icon" :src="attributeImageSrc"/>
            <div class="hero-card__name-text">
                {{heroName}}
            </div>
        </div>
        <div class="hero-card__shadow" />
    </a>
</template>
<script>
    export default {
        props: {
            heroName: String,
            heroAttribute: String,
            heroCodeName: String,
        },
        data: function() {
            return {
                attributeImageSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${this.heroAttribute}.png`,
                styleObject: {
                    backgroundImage: `url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${this.heroCodeName.replaceAll(' ', '_')}.png")`,
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
        position: relative;
        cursor: pointer;
    }

    .hero-card__name {
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: -40px;
        opacity: 0;
        transition-property: opacity, bottom;
        transition-duration: .2s;
        transition-timing-function: ease-out;
        color: rgb(255, 255, 255);
        display: flex;
        align-items: center;
        z-index: 2;
    }

    .hero-card__name-text {
        font-size: 18px;
        text-transform: uppercase;
    }

    .hero-card__shadow {
        position: absolute;
        width: 225px;
        height: 127px;
        bottom: -40px;
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: ease-out;
        transition-duration: .2s;
        background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);
    }

    .hero-card:hover {
        transform: scale(1.4);
        z-index: 2;
    }

    .hero-card__name img {
        padding: 8px;
        height: 42px;
        width: 42px;
    }

    .hero-card:hover .hero-card__name {
        bottom: 0;
        opacity: 1;
    }

    .hero-card:hover .hero-card__shadow {
        opacity: 1;
        bottom: 0;
    }

</style>