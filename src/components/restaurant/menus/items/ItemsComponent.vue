<template> 
    <template v-if="items?.length > 0">
        <div v-for="types in groupItemsByType" :key="types.type" class="mt-8">
            <h3>{{ types.type }}</h3>
            <VirtualScrollerVue :items="types.items" :itemSize="300" orientation="horizontal" style="height: 20rem; width: 100%;">
                <template v-slot:item="{ item }">
                    <ItemComponent :item="item"/>
                </template>
            </VirtualScrollerVue> 
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Item from '@/entities/Item';
import ItemComponent from './ItemComponent.vue';

export default defineComponent({
    name: "ItemsComponent",

    props: {
        items: {
            type: Array as PropType<Array<Item>>,
            required: true
        }
    },

    computed: {
        groupItemsByType(): Array<{ type: string, items: Item[] }> {

            const obj = this.items.reduce((group: { [key: string]: Item[] }, item) => {
                const type = item.typeItem.description; 
                if (!group[type]) {
                    group[type] = [];
                }
                group[type].push(item); 
                return group;
            }, {});

            const itemsByTypes: Array<{ type: string, items: Item[] }> = Object.entries(obj)
                .map(([type, items]) => ({ type, items }));

            return itemsByTypes;
        }
    },

    components: {
        ItemComponent
    }
});
</script>
