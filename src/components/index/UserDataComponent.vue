<template>
    <div class="
        hidden 
        md:block 
        lg:block 
        xl:block 
        align-items-center justify-content-center 
        p-4 border-round mr-3
    ">
        Hello, {{ user.name }}! Are you at?
        <div class="font-medium font-bold">{{ user.addressAsString }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: "UserDataComponent",
    data(){
        return {

        }
    },
    computed: {
       ...mapGetters(['user'])
    }
});
</script>