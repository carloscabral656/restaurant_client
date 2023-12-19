<template>
    <div class="h-full min-h-screen p-4 surface-900 text-white text-3xl bg-cover opacity-80 md:text-4xl lg:text-4xl xl:text-4xl" style="background-image: url('/splash.jpg');">
        <div class="flex flex-row align-items-center justify-content-center">
            <h1>Quem tem boca</h1>
            <img src="/boca.png" class="col-6 h-10rem w-10rem"/>
        </div>
        <div class="absolute bottom-0 right-0 mb-2 mr-2">
            <router-link to="/login">
                <ButtonVue class="" icon="pi pi-arrow-right" severity="danger" rounded/>
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