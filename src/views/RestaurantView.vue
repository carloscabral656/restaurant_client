<template>

    <!-- List -->
    <template v-if="Object.keys(choosenRestaurant).length != 0">
        <BannerRestaurantComponent :restaurant="choosenRestaurant"/>
        <MenusComponent :menus="choosenRestaurant?.menus" />
    </template>

    <!-- Teleport -->
    <template v-else>
        <Teleport to="body">
            <div class="w-100 h-full flex flex-column align-items-center justify-content-center">
                <SpinnerVue aria-label="Loading" strokeWidth="8"/>
                <p>Aguarde! Estamos carregando as informações do produto</p>
            </div>
        </Teleport>
    </template>

    <Teleport to="body">
        <div class="fixed top-0 left-0 mt-2 ml-2">
            <router-link to="/index">
                <ButtonVue class="w-3rem h-3rem md:w-3rem md:h-3rem lg:w-4rem lg:h-4rem" icon="pi pi-arrow-left text-1xl md:text-4xl lg:text-3xl xl:text-3xl" severity="danger" rounded/>
            </router-link>
        </div>
    </Teleport>
    
</template>


<script lang="ts">
import { defineComponent } from 'vue'; 
import { useStore } from 'vuex';
import { mapGetters } from 'vuex'
import BannerRestaurantComponent from '@/components/restaurant/BannerRestaurantComponent.vue'
import MenusComponent from '@/components/restaurant/menus/MenusComponent.vue'

export default defineComponent({
    name: "RestaurantView",

    computed: {
        ...mapGetters(['choosenRestaurant'])
    },

    components: {
        BannerRestaurantComponent,
        MenusComponent
    },

    mounted() {
        this.store.dispatch('getChoosenRestaurant', this.$route.params.id);
    },
    
    setup() {
        const store  = useStore();
        return {
            store
        }
    }
});
</script>