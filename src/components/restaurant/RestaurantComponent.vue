<template>
    <div class="
        border-round
        relative
        flex flex-row
        w-100 h-100
    ">
        <!-- Containers -->
        <div class="
            flex flex-column w-full 
            lg: h-14rem flex-column
            md: h-8rem flex-column
            sm: h-4rem flex-row
            relative
        ">
            <div class="
                lg: h-8rem
                md: h-4rem
                sm: h-2rem
                relative surface-900
            "></div>

            <div class="
                lg: h-8rem
                md: h-4rem
                sm: h-2rem
                relative
            "></div>
        </div>

        <div class="
            absolute
            align-self-center justify-self-center
            border-circle
            bg-blue-400
            z-1
            lg:w-8rem h-8rem ml-3
            md:w-4rem h-4rem
            sm:w-2rem h-2rem
        ">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RestaurantComponent",
    props: {

    }
});
</script>