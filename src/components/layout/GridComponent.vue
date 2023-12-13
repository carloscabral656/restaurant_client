<template>
    <div 
        class="
            grid m-0
        "
        v-for="line in lines"
        :key="line"
    >
        <div
            :class="columns"
            v-for="item in totalItemsInLineComputed"
            :key="item"
        >
            <component :is="component" :data="computedData[currentIndex++]"></component>
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
            return this.totalItemsInLine || 1
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
            return `lg:col-${12/this.totalItemsInLineComputed} md:col-${12/this.totalItemsInLineComputed} sm:col-12`
        },
        
        // 
        computedData(): any {
            return this.data
        },

    },

    watch: {
        viewport(newValue, oldValue){
            alert("asdasd")
        }
    },

    mounted() {
        this.setViewportDimensions();
        window.addEventListener('resize', this.setViewportDimensions);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.setViewportDimensions);
    },

    methods: {
        setViewportDimensions() {
            this.viewport.width = window.innerWidth;
            this.viewport.height = window.innerHeight;
            console.log(this.viewport.height)
            console.log(this.viewport.width)
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