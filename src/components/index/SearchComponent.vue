<template>
    <div class="flex flex-column flex-grow-1 align-items-center justify-content-center gap-1 md:flex-grow-1 lg:flex-grow-1 xl:flex-grow-1">

        <!--  -->
        <div class="flex flex-grow-1 flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButtonVue v-model="filter.typeFilter" inputId="restaurantFilter" name="restaurant" value="restaurant" checked/>
                <label for="ingredient1" class="ml-2">Restaurante</label>
            </div>
            <div class="flex align-items-center">
                <RadioButtonVue v-model="filter.typeFilter" inputId="itemFilter" name="item" value="item" />
                <label for="ingredient2" class="ml-2">Itens</label>
            </div>
        </div>


        <div class="flex flex-row w-50">
            <InputTextVue 
                type="text" 
                class="w-full border-round surface-100 p-2" 
                size="medium"
                placeholder="Busque pelo nome do seu restaurante"
                v-model="filter.searchValue"
            />
            <ButtonVue icon="pi pi-search" severity="danger" aria-label="Search" @click="searchFilter" @keydown.enter="searchFilter">
                <i class="pi pi-search"></i>
            </ButtonVue>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({

    name: "SearchComponent",

    data(){
        return {
            filter: {
                typeFilter: 'restaurant',
                searchValue: ''
            }
        }
    },

    methods: {

        /**
         * 
        */
        searchFilter() {
            this.state.dispatch('getRestaurantsByFilter', this.filter);
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