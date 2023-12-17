<template>
    <div class="
        flex flex-column w-100 h-18rem
        sm:h-10rem
        md:h-14rem
        lg:h-16rem
        xl:h-20rem
    ">

        <!-- Banner's Image -->
        <div class="
            surface-900 w-100 h-9rem 
            sm:h-6rem bg-cover
            md:h-7rem bg-cover
            lg:h-8rem bg-contain
            xl:h-10rem bg-contain
        "
        :style="bannerGastronomyImage"
        >
        </div>

        <!-- Banner's Information -->
        <div class="
            bg-green-500 w-100 h-9rem
            sm:h-4rem
            md:h-7rem
            lg:h-8rem
            xl:h-10rem
        ">
            <h1>{{ restaurant?.name }}</h1>
            <h2>{{ restaurant?.gastronomy?.description }}</h2>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Restaurant from '@/entities/Restaurant';

export default defineComponent({
    name: "BannerRestaurantComponent",

    props: {
        restaurant: {
            type: Restaurant,
            required: true
        }
    },

    components: {
        
    },

    computed: {
        bannerGastronomyImage() {
            return `background-image: url(${this.restaurant.gastronomy.image});`
        }
    }
});
</script>