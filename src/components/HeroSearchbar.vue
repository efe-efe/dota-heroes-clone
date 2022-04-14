<template>
    <div class="hero-searchbar">
        <div class="hero-searchbar__title">Filtrar héroes</div>
        <SpecificFilter />
        <div>Complejidad</div>
        <input @input="handleInput"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SpecificFilter from './SpecificFilter.vue';

export default defineComponent({
    components: {
        SpecificFilter,
    },
    methods: {
        handleInput: function(event: any) {
            this.$emit('on-input-change', event);
        }
    }
});
</script>
<style scoped>
    .hero-searchbar {
        display: flex;
        width: 100%;
        max-width: 1200px;
        padding: 10px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        border: 1px solid black;
        justify-content: space-between;
        height: 50px; /* delete dis after */
    }

    
    @media (max-width: 1200px) {
        .hero-searchbar__title {
            display: none;
        }
    }
</style>