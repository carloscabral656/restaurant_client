<template>
    <HeaderComponent />
    <RestaurantList cols=4 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/index/HeaderComponent.vue'
import RestaurantList from '@/components/restaurant/RestaurantList.vue'
import { useStore } from 'vuex';

export default defineComponent({
    name: "IndexView",
    data(){
        return {

        }
    },
    components: {
        HeaderComponent,
        RestaurantList
    },
    created() {
        this.store.dispatch('getUser');
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    }
});
</script>

<style>
</style>