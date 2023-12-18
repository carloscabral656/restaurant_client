<template>
    <div class="
        flex flex-row align-items-center justify-content-center gap-1
        flex-grow-1 
        md:flex-grow-1
        lg:flex-grow-1
        xl:flex-grow-1
    ">
        <InputTextVue 
            type="text" 
            class="w-full border-round surface-100 p-2" 
            size="medium"
            placeholder="Busque pelo nome do seu restaurante"
            v-model="name"
        />
        <ButtonVue icon="pi pi-search" severity="danger" aria-label="Search" @click="searchRestaurant" @keydown.enter="searchRestaurant">
            <i class="pi pi-search"></i>
        </ButtonVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({

    name: "SearchComponent",

    data(){
        return {
            name: ''
        }
    },

    methods: {

        /**
         * 
        */
        searchRestaurant() {
            this.state.dispatch('getRestaurantsByFilter', this.name);
        }

    },

    setup() {
        const state = useStore();
        return {
            state
        }
    }

});
</script>