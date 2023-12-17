<template>
    <!-- Restaurant Image -->
    <div class="absolute align-self-center justify-self-center border-circle bg-blue-400 ml-3 w-5rem h-5rem 
            sm:w-5rem sm:h-5rem 
            md:w-5rem md:h-5rem  
            lg:w-5rem lg:h-5rem
            xl:w-7rem xl:h-7rem 
        "
        :style="restaurantImageBackground"
    >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RestaurantImage",
    props: {
        restaurantImage: String
    },
    computed: {
        restaurantImageBackground() : string {
            return `background-image: url('${this.restaurantImage}')`;
        }
    },
});
</script>