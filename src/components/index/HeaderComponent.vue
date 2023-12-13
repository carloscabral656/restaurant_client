<template>
    <header class="p-3 flex flex-row justify-content-evenly">
        <span class="pi pi-bars" style="font-size: 2rem"></span>
    </header> 
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "HeaderComponent",
    props: {
        user: Object
    }
});
</script>