<template>
    <header class="grid border-bottom-1 p-4 border-500 shadow-2 m-0">
        <!-- App's image -->
        <div class="col-12 md:col-12 lg:col-2 xl:col-2 flex flex-row justify-content-center">
            <img src="/boca.png" alt="" width="100" height="100">
        </div>

        <!-- Search component -->
        <div class="col-12 md:col-12 lg:col-7 xl:col-7">
            <SearchComponent/>
        </div>

        <!-- User data component -->
        <div class="hidden md:hidden lg:flex lg:flex-row xl:flex xl:flex-row">
            <UserDataComponent/>
        </div>
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