<template>
    <div class="flex flex-row gap-2">

        <!-- Original Price (Sale or not) -->
        <div :class="[ hasSale ? 'line-through' : 'font-bold' ]"> R$ {{ originalPrice }} </div>

        <!-- Only Sale (New Price) -->
        <template v-if="hasSale">
            <div class="font-bold">R$ {{ newPrice }}</div>
            <TagVue severity="danger" value="Sale" rounded></TagVue>
        </template>

    </div>
</template>

<script lang="ts">
import Item from '@/entities/Item';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "PriceComponent",
    props: {
        item: {
            type: Item,
            required: true
        }
    },

    computed: {

        originalPrice(): number {
            return this.item?.unitPrice;
        },

        hasSale(): boolean {
            return this.item?.sale !== null;
        },

        newPrice(): string {
            const price = this.item.unitPrice;
            const discount = this.item.sale.discount;
            const priceWithDiscount = price * ((100 - discount)/100);
            return priceWithDiscount.toFixed(2);
        }

    }
});
</script>