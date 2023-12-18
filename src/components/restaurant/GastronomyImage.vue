<template>
    <!-- Gastronomy Image -->
    <div class="
        w-100 relative surface-900 bg-cover
        h-7rem
        md:h-6rem 
        lg:h-8rem 
        xl:h-8rem 
    " 
    :style="gastronomyImageBackground"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "GastronomyImage",
    props: {
        gastronomyImage: {
            type: String,
            required: true
        }
    },
    computed: {
        gastronomyImageBackground() : string {
            return `background-image: url('${this.gastronomyImage}')`;
        }
    }
});
</script>