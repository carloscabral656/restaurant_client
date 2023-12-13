<template>
    <header class="p-3 flex flex-row gap-2 h-3 border-bottom-1 border-bottom-solid border-500">
        <div class="flex flex-row align-items-center justify-content-center">Imagen</div>
        <ListInformationsComponent class="w-4"/>
        <SearchComponent class="w-5"/>
        <UserDataComponent class="w-3"/>
    </header> 
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import UserDataComponent from '@/components/index/UserDataComponent.vue';
import SearchComponent   from '@/components/index/SearchComponent.vue';
import ListInformationsComponent   from '@/components/index/ListInformationsComponent.vue';

export default defineComponent({
    name: "HeaderComponent",
    components: {
        UserDataComponent,
        SearchComponent,
        ListInformationsComponent
    }
});
</script>