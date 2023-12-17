<template>
    <h1>asdasd</h1>
</template>


<script lang="ts">
import Item from '@/entities/Item';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ItemComponent",

    props: {
        item: {
            type: Item,
            required: true
        }
    }

});
</script>