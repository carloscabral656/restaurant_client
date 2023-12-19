<template>
    <div class="
        hidden 
        md:block 
        lg:block 
        xl:block 
        align-items-center justify-content-center 
        p-4 border-round mr-3
    ">
        Olá, <strong>{{ user.name }}</strong>! Você está nesse endereço?
        <div class="font-medium font-bold text-red-600">{{ user.addressAsString }}</div>
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