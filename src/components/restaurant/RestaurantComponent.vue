<template>
    <div class="
        border-round
        relative
        flex flex-row
        w-100 
        sm:h-8rem
        md:h-8rem
        lg:h-10rem
        h-8rem
    ">
        <!-- Containers -->
        <div class="
            flex flex-column flex-1
            w-100  
            relative
            h-10rem
        ">
            <div class="
                w-100
                relative 
                surface-900
                sm:h-4rem
                md:h-4rem
                lg:h-5rem
                h-5rem
            "></div>

            <div class="
                w-100
                relative
                sm:h-4rem
                md:h-4rem
                lg:h-5rem
                h-5rem
            "></div>
        </div>

        <div class="
            absolute
            align-self-center justify-self-center
            border-circle
            bg-blue-400
            ml-3
            sm:w-5rem sm:h-5rem 
            md:w-5rem md:h-5rem  
            lg:w-5rem lg:h-5rem
            xl:w-7rem xl:h-7rem 
            w-5rem h-5rem 
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