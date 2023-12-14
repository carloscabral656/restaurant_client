<template>
    <div class="
        relative
        flex flex-row
        w-100 
        sm:h-8rem sm:border-round-sm
        md:h-8rem md:border-round-md
        lg:h-10rem lg:border-round-lg
        xl:h-10rem xl:border-round-xl
        h-8rem
        overflow-hidden
        border-round
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