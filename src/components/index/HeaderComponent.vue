<template>
    <header class="grid border-bottom-1 p-4 border-500 shadow-2 m-0">

        <!-- App's image -->
        <div class="col-12 md:col-12 lg:col-1 xl:col-1 flex flex-row justify-content-center">
            <img src="/boca.png" alt="" width="70" height="70">
        </div>

        <!-- Options Component -->
        <div class="col-12 md:col-12 lg:col-4 xl:col-4 justify-content-center">
            <OptionsComponent />
        </div>

        <!-- Search component -->
        <div class="col-12 md:col-12 lg:col-3 xl:col-3 justify-content-center">
            <SearchComponent/>
        </div>

        <!-- Address data component -->
        <div class="hidden md:hidden lg:flex lg:flex-row lg:col-2 xl:flex xl:flex-row justify-content-center">
            <UserAddressComponent/>
        </div>

        <!-- Logout Component -->
        <div class="hidden md:hidden lg:flex lg:flex-row lg:col-1 xl:flex xl:flex-row justify-content-center">
            <LogoutComponent />
        </div>

        <!-- Bag Component -->
        <div class="hidden md:hidden lg:flex lg:flex-row lg:col-1 xl:flex xl:flex-row justify-content-center">
            <BagComponent />
        </div>

    </header> 
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import UserAddressComponent from '@/components/index/UserAddressComponent.vue';
import SearchComponent   from '@/components/index/SearchComponent.vue';
import LogoutComponent   from '@/components/index/LogoutComponent.vue';
import BagComponent from '@/components/index/BagComponent.vue';
import OptionsComponent from '@/components/index/OptionsComponent.vue';

export default defineComponent({
    name: "HeaderComponent",
    components: {
    UserAddressComponent,
    SearchComponent,
    LogoutComponent,
    BagComponent,
    OptionsComponent
}
});
</script>