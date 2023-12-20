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