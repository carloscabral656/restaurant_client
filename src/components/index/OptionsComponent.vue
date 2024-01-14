<template>
    <div class="h-full flex justify-content-around align-items-center gap-3">
        <span>Home</span>
        <span>Restaurants</span>
        <span>Drinks</span>
        <span>Dishes</span>
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