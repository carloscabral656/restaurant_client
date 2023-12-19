<template>
    <header class="
        flex flex-column m-auto gap-2 h-3 border-bottom-1 border-bottom-solid 
        p-4 border-500
    ">
        <div class="
            lex flex-row align-items-center justify-content-center 
            md:block 
            lg:block 
            xl:block 
            p-4 border-round m-1
        ">
            <img src="/boca.png" alt="" class="m-auto w-3rem h-3rem md:w-4rem md:h-4rem lg:w-6rem lg:h-6rem xl:w-6rem xl:h-6rem">
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