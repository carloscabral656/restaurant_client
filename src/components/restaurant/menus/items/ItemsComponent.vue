<template> 
    <template v-if="items.length > 0">
        <div v-for="item in items" :key="item.id">
            {{ item.name }}
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Item from '@/entities/Item';

export default defineComponent({
    name: "ItemsComponent",

    props: {
        items: {
            type: Array as () => Item[],
            required: true
        }
    }
});
</script>
