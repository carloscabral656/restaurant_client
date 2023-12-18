<template>
    <header class="
        flex flex-row gap-2 h-3 border-bottom-1 border-bottom-solid 
        p-3 border-500
    ">
        <div class="
            hidden 
            md:block 
            lg:block 
            xl:block 
            align-items-center justify-content-center 
            p-4 border-round mr-3
        ">Imagen</div>
        <SearchComponent/>
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