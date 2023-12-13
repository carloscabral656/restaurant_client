<template>
    <main class="w-100">
        <GridComponent 
            :data="[{}, {}, {}, {}]"
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
