<template>
    <div class="">
        Restaurant {{ $route.params.id }}
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'; 
import { useStore } from 'vuex';

export default defineComponent({
    name: "RestaurantView",

    computed: {
        choosenRestaurantId(): number {
            return Number(this.$route.params.id)
        }
    },

    mounted() {
        this.store.dispatch('getChoosenRestaurant', this.choosenRestaurantId);
        return null;
    },
    
    setup() {
        const store  = useStore();
        return {
            store
        }
    }
});
</script>