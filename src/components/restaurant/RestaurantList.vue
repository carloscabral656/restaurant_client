<template>
    <main class="w-100">
        
        <GridComponent :data="restaurants" :component="RestaurantComponent" />
        
    </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import GridComponent from '@/components/layout/GridComponent.vue';
import RestaurantComponent from '@/components/restaurant/RestaurantComponent.vue'; 
import { useStore } from 'vuex';
import store from '@/store';
import { mapGetters } from 'vuex'

export default defineComponent({
    name: "RestaurantList",

    data() {
        return {
            RestaurantComponent
        }
    },

    computed: {
        ...mapGetters(['restaurants'])
    },

    components: {
        GridComponent
    },

    mounted() {
        store.dispatch('getRestaurants')
    },
    
    state() {
        const store = useStore();
        return {
            store
        }
    }
});
</script>


<style>
</style>
