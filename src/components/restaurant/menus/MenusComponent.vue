<template>
    <template v-if="menus.length > 0">
        <div v-for="menu in menus" :key="menu.id" class="p-3 mt-2">
            <h2>{{ menu.name }}</h2>
            <!-- Dividir por Tipo de Item -->
            <ItemsComponent :items="menu.items"/>
        </div>
    </template>
</template>

<script lang="ts">
import Menu from '@/entities/Menu';
import { defineComponent } from 'vue';
import ItemsComponent from '@/components/restaurant/menus/items/ItemsComponent.vue';

export default defineComponent({
    name: "MenusComponent",
    
    props: {
        menus: {
            type: Array as () => Menu[],
            required: true
        }
    },

    components: {
        ItemsComponent
    }

});

</script>