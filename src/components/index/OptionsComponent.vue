<template>
    <div class="h-full flex justify-content-around align-items-center gap-3">
        <span class="hover:text-red-600 hover:font-bold" style="cursor: pointer;">Home</span>
        <span class="hover:text-red-600 hover:font-bold" style="cursor: pointer;">Restaurants</span>
        <span class="hover:text-red-600 hover:font-bold" style="cursor: pointer;">Drinks</span>
        <span class="hover:text-red-600 hover:font-bold" style="cursor: pointer;">Dishes</span>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "OptionsComponent",
    methods: {
        logout(){
            alert("asdasd")
        }
    }
});
</script>