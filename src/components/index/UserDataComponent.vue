<template>
    <div class="lg:flex lg:flex-column lg:justify-content-center lg:align-itens-center xl:flex xl:flex-column xl:justify-content-center xl:align-itens-center">
        <div class="text-right">Olá, <strong>{{ user.name }}</strong>! Você está nesse endereço?</div>
        <div class="text-right font-medium font-bold text-red-600">
            <i class="pi pi-map-marker"></i>
            {{ user.address }}
        </div>
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