<template>
    <div class="grid m-0" v-for="line in lines" :key="line">
        <div :class="columns" v-for="item in totalItemsInLineComputed" :key="item">
            <component v-if="currentIndex < lengthData" :is="component" :data="computedData[currentIndex++]"></component>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "GridComponent",

    data() {
        return {
            viewport: {
                width: 0,
                height: 0
            }
        };
    },

    props: {
        
        // 
        data: Array,

        // 
        totalItemsInLine: Number,
        
        // 
        component: {
            type: Object,
            required: true
        }

    },

    computed: {

        // Calculate the number of items the Grid must have in each line
        totalItemsInLineComputed(): number {
            if(this.currentDeviceSize === 'sm') return 1;
            else if(this.currentDeviceSize === 'md') return 2;
            else if(this.currentDeviceSize === 'lg') return 2;
            else if(this.currentDeviceSize === 'xl') return 3;
            return 1
        },

        // Compute the data's length from retrieved prop
        lengthData(): number {
            return this.data?.length || 0
        },

        // Compute the total of lines the Grid must have
        lines(): number {
            return Math.ceil(this.lengthData/this.totalItemsInLineComputed);
        },
        
        // Compute the number of columns the Grid must have
        columns(): string  {
            return `sm:col-12 md:col-${12/this.totalItemsInLineComputed}  lg:col-${12/this.totalItemsInLineComputed}  col-12`
        },
        
        // 
        computedData(): any {
            return this.data
        },

        currentDeviceSize(): string {
            if(this.viewport.width <= 768) return 'sm'
            else if(this.viewport.width <= 1024) return 'md'
            else if(this.viewport.width <= 1280) return 'lg' 
            else if(this.viewport.width <= 1536) return 'xl'
            else return 'xl'
        }
    },

    mounted() {
        this.setViewportDimensions();
        window.addEventListener('resize', this.setViewportDimensions);
    },

    beforeUnmount() {
        this.currentIndex = 0;
        window.removeEventListener('resize', this.setViewportDimensions);
    },

    updated() {
        this.currentIndex = 0;
    },

    methods: {
        setViewportDimensions() {
            this.currentIndex = 0;
            this.viewport.width = window.innerWidth;
            this.viewport.height = window.innerHeight;
        },

        getViewportDimensions() {
            return this.viewport;
        }
    },

    setup() {
        return {
            currentIndex: 0
        }
    }
});
</script>


<style scoped>
</style>