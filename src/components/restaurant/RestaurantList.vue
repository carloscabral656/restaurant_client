<template>
    <main class="w-100">
        
        <template v-if="isLoading">
            <div class="w-100 h-full flex flex-column align-items-center justify-content-center">
                <SpinnerVue aria-label="Loading" strokeWidth="8"/>
                <p>Aguarde! Estamos carregando as informações do produto</p>
            </div>
        </template>
        
        <template v-else-if="!isLoading">
            <GridComponent :data="restaurants" :component="RestaurantComponent" />
        </template>

        <template v-if="emptyResponse">
            <div class="h-full flex flex-column justify-content-center align-items-center gap-4">
                <img src="naoecontrado.jpg">
                Não foi encontrado.
            </div>
        </template>

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

    watch: {
        isLoading() {
            alert("Mudou")
        }
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
