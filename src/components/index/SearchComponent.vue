<template>
    <div class="
        flex flex-row align-items-center justify-content-center gap-1
        flex-grow-1 
        md:flex-grow-1
        lg:flex-grow-1
        xl:flex-grow-1
    ">
        <InputTextVue 
            type="text" 
            class="w-full border-round surface-100 p-2" 
            size="small"
            placeholder="Search for a restaurant"
        />
        <ButtonVue icon="pi pi-search" severity="success" rounded aria-label="Search">
            <i class="pi pi-search"></i>
        </ButtonVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SearchComponent"
});
</script>