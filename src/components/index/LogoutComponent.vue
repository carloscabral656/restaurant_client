<template>
    <div class="lg:flex lg:gap-1 lg:flex-column lg:justify-content-center lg:align-itens-center xl:flex xl:flex-column xl:justify-content-center xl:align-itens-center">
        <i class="pi pi-sign-out text-right font-medium font-bold text-red-600" @click="logout" style="cursor: pointer;"></i>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "HeaderComponent",
    methods: {
        logout(){
            alert(" ")
        }
    }
});
</script>