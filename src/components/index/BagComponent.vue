<template>
    <div class="lg:flex lg:gap-1 lg:flex-column lg:justify-content-center lg:align-itens-center xl:flex xl:flex-column xl:justify-content-center xl:align-itens-center">
        <div class="grid">
            <div class="col flex align-items-center justify-content-end col-offset-0">
                <i class="pi pi-shopping-bag text-right font-medium font-bold text-red-600" @click="logout"></i>
            </div>
            <div class="col col-offset-0">
                R$0, 00
                0 items
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "HeaderComponent",
    methods: {
        logout(){
            alert("asdasd")
        }
    }
});
</script>