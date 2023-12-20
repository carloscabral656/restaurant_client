<template>
    <div class="flex flex-column align-items-center gap-3 md:gap-3 lg:gap-4 xl:gap-4">

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


        <div class="flex flex-row flex-grow-1 w-10">
            <InputTextVue 
                type="text" 
                class="flex-grow-1 border-round surface-100 p-2" 
                size="medium"
                placeholder="Busque por restaurante ou item ..."
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