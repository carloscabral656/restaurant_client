<template>
    <main class="w-100">

        {{ isLoading }}

        <template v-if="isLoading">
            <div class="w-100 h-full flex flex-row justify-content-center">
                <SpinnerVue class="flex flex-row align-self-center justify-self-center"/>
            </div>
        </template>
        <template v-else-if="!isLoading">
            <GridComponent :data="restaurants" :component="RestaurantComponent" />
        </template>

        <template v-if="emptyResponse">Não foi encontrado nenhuma informação.</template>

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
        ...mapGetters(['restaurants', 'isLoading', 'emptyResponse'])
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
