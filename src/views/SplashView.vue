<template>
    <div class="flex flex-row align-items-center justify-content-center h-full min-h-screen p-4 surface-900 text-white text-3xl bg-cover opacity-80 md:text-4xl lg:text-4xl xl:text-4xl" style="background-image: url('/splash.jpg');">
        <div class="flex flex-row align-items-center justify-content-center">
            <h1>Quem tem boca</h1>
            <img src="/boca.png" class="col-6 h-10rem w-10rem"/>
        </div>
        <div class="absolute bottom-0 right-0 mb-4 mr-4">
            <router-link to="/login">
                <ButtonVue class="w-6rem h-6rem" icon="pi pi-arrow-right text-3xl md:text-4xl lg:text-3xl xl:text-3xl" severity="danger" rounded/>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SplashView"
});
</script>