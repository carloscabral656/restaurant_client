<template>
    <div class="
        relative
        flex flex-row
        w-100 h-100
        surface-ground
    ">
        <div class="
            flex-1
            w-full h-16rem
            relative
        ">
            <div class="h-8rem relative surface-900"></div>
            <div class="h-8rem relative">
                
            </div>
        </div>

        <div class="
            absolute
            align-self-center justify-self-center
            w-8rem h-8rem
            ml-3
            border-circle
            bg-blue-400
            z-1
        ">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RestaurantComponent"
});
</script>