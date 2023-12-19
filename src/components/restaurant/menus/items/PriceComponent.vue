<template>
    <div class="flex flex-row gap-2">

        <!-- Original Price (Sale or not) -->
        <div :class="[ hasSale ? 'line-through' : 'font-bold' ]" class="flex flex-wrap align-items-center justify-content-center"> R$ {{ originalPrice }} </div>

        <!-- Only Sale (New Price) -->
        <template v-if="hasSale">
            <div class="font-bold flex flex-wrap align-items-center justify-content-center">R$ {{ newPrice }}</div>
            <TagVue severity="danger" rounded>
                <slot name="icon">
                    <i class="pi pi-circle-fill mr-1 fadeout animation-duration-1000 animation-iteration-infinite" />{{ item.sale.discount }}% OFF
                </slot>
            </TagVue>
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