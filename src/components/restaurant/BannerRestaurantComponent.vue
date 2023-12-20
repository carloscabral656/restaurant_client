<template>
    <div class="relative flex flex-column w-100 shadow-1">

        <!-- Banner's Image -->
        <div class="surface-900 w-100 h-9rem sm:h-6rem md:h-7rem bg-cover lg:h-8rem bg-cover xl:h-10rem"
            :style="bannerGastronomyImage"
        >
        </div>

        <!-- Banner's Information -->
        <div class="surface-ground w-100 text-center h-15rem md:h-15rem lg:h-15rem xl:h-15rem">
            <h1 class="text-center">{{ restaurant?.name }}</h1>
            <p class="text-center">{{ restaurant?.description.length > 30 ? `${restaurant?.description.substring(0, 30)} ...` :  restaurant?.description}}</p>
            <p><span class="pi pi-phone mr-2"></span>{{ restaurant.phone }}</p>
            <p class="text-center"><i class="pi pi-map-marker mr-2"></i>{{ restaurant?.address }}</p>
        </div>

        <!-- Restauran's Image -->
        <RestaurantImage :restaurantImage="restaurant?.image"/>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Restaurant from '@/entities/Restaurant';
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import EvaluationComponent from '@/components/restaurant/EvaluationComponent.vue';

export default defineComponent({
    name: "BannerRestaurantComponent",

    props: {
        restaurant: {
            type: Restaurant,
            required: true
        }
    },

    components: {
        RestaurantImage
    },

    computed: {
        bannerGastronomyImage() {
            return `background-image: url(${this.restaurant!.gastronomy!.image ?? ''});`
        }
    }
});
</script>