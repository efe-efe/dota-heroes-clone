<template>
    <div class="specific-filter">
        <div class="specific-filter__title">{{title}}</div>
        <div class="specific-filter__element"></div>
        <div class="specific-filter__element"></div>
        <div class="specific-filter__element"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        title: {
            type: String,
            default: 'Title',
        }
    }
});
</script>
<style scoped>
.specific-filter {
    display: flex;
    width: 250px;
    align-items: center;
}
.specific-filter__element {
    border: 1px solid red;
    width: 43px;
    height: 35px;
}
</style>