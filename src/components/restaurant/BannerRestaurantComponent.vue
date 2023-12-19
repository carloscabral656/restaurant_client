<template>
    <div class="relative flex flex-column w-100 h-40rem md:h-40rem lg:h-40rem xl:h-40rem">

        <!-- Banner's Image -->
        <div class="surface-900 w-100 bg-contain h-9rem sm:h-6rem md:h-7rem bg-cover lg:h-8rem bg-contain xl:h-10rem"
            :style="bannerGastronomyImage"
        >
        </div>

        <!-- Banner's Information -->
        <div class="surface-ground w-100 h-9rem sm:h-4rem md:h-7rem lg:h-8rem xl:h-10rem">
            <h1 class="text-left md:text-center lg:text-center xl:text-center">{{ restaurant?.name }}</h1>
            <h2 class="text-left md:text-center lg:text-center xl:text-center">{{ restaurant?.gastronomy?.description }}</h2>
        </div>

        <!-- Restauran's Image -->
        <RestaurantImage />
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Restaurant from '@/entities/Restaurant';
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';

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