<template>
    <main class="w-100">
        <h1>All Restaurants</h1>
        <GridComponent 
            :data="[1]"
            :totalItemsInLine=4
            :component="RestaurantComponent"
        />
    </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import GridComponent from '@/components/layout/GridComponent.vue'
import RestaurantComponent from '@/components/restaurant/RestaurantComponent.vue'

export default defineComponent({
    name: "RestaurantList",
    data() {
        return {
            RestaurantComponent
        }
    },
    components: {
        GridComponent
    }
});
</script>


<style>
</style>
