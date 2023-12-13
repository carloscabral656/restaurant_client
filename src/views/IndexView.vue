<template>
    <HeaderComponent user=""/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/index/HeaderComponent.vue'
import { useStore } from 'vuex';

export default defineComponent({
    name: "IndexView",
    data(){
        return {

        }
    },
    components: {
        HeaderComponent
    },
    created() {
        this.store.dispatch('getUser');
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    }
});
</script>

<style>
</style>