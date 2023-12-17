<template>
    <!-- Gastronomy Image -->
    <div class="w-100 relative surface-900 h-5rem sm:h-4rem md:h-4rem lg:h-5rem xl:h-7rem" style=""></div>
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