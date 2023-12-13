<template>
    <div class="flex flex-column align-items-end">
        Hello, {{ user.name }}! Are you in the address?
        <div class="font-medium font-bold">Rua dos bobos numero 0</div>
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