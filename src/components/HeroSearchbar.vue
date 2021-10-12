<template>
    <div class="hero-searchbar">
        <div>Filtrar héroes</div>
        <input @input="handleInput"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    methods: {
        handleInput: function(event: any) {
            this.$emit('on-input-change', event);
        }
    }
});
</script>
<style scoped>
    .hero-searchbar {
        width: 100%;
        max-width: 1200px;
        padding: 10px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        border: 1px solid black;
        height: 50px; /* delete dis after */
    }
</style>