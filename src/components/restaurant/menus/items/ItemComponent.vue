<template>
    <CardVue style="width: 300px; height: 400px;" class="relative border-round-xs shadow-1 ml-3 p-0 m-2">

        <!-- Item's image -->
        <template #header>
            <div class="surface-900 w-100 h-9rem bg-cover md:h-7rem bg-cover lg:h-8rem bg-cover xl:h-10rem bg-cover" 
                :style="computedItemImage"
            >
            </div>
        </template>

        <!-- Item's name -->
        <template #title>
            {{ item?.name }}
        </template>

        <!-- Item's description -->
        <template #content>
            <p class="m-0">
                {{ item?.description }}
            </p>
        </template>

        <!-- Item's price, sale, new Value .... -->
        <template #footer>
            <div class="flex flex-column">
                <PriceComponent :item="item"/>
            </div>
            <div class="absolute fixed bottom-0 right-0 mr-2 mb-2">
                <ButtonVue  icon="pi pi-plus" severity="help" text raised rounded aria-label="Plus" />
            </div>
        </template>

    </CardVue>
</template>


<script lang="ts">
import Item from '@/entities/Item';
import { defineComponent } from 'vue';
import PriceComponent from './PriceComponent.vue';

export default defineComponent({
    name: "ItemComponent",

    props: {
        item: {
            type: Item,
            required: true
        }
    },

    components: {
        PriceComponent
    },

    computed: {
        computedItemImage():string {
            return `background-image: url('${this.item?.img}')`;
        }
    }

});
</script>