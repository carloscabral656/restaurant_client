<template>
    <header class="flex flex-column md:flex-row lg:flex-row xl:flex-row m-auto gap-2 h-10rem border-bottom-1 border-bottom-solid p-4 border-500 shadow-2">

        <!-- App's Image -->
        <div class="p-0 flex flex-row align-items-center justify-content-center md:block lg:block xl:block p-4 bg-no-repeat bg-contain">
            <img src="/boca.jpg" alt="">
        </div>

        <!-- -->
        <SearchComponent/>

        <!-- -->
        <UserDataComponent/>
    </header> 
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import UserDataComponent from '@/components/index/UserDataComponent.vue';
import SearchComponent   from '@/components/index/SearchComponent.vue';

export default defineComponent({
    name: "HeaderComponent",
    components: {
        UserDataComponent,
        SearchComponent
    }
});
</script>