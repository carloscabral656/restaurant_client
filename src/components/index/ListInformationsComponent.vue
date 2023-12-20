<template>
    <div class="flex flex-row align-items-center justify-content-center gap-1 md:gap-2 lg:gap-3 xl:gap-3">
        <div class="p-1 hover:red">
            Restaurants
        </div>

        <div class="p-1">
            Cupons
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ListInformationsComponent"
});
</script>