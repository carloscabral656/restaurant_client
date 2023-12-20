<template>
    <div class="flex flex-row align-items-center justify-content-between">
        <i class="pi pi-clock mr-2 text-500 text-sm md:text-sm lg:text-lg xl:text-lg"> </i> <span class="font-light text-500 font-bold text-sm md:text-sm lg:text-lg xl:text-lg">{{ time?.from }} - {{ time?.until }} min</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WaitingTime from '@/entities/WaitingTime';

export default defineComponent({
    name: "TimeForRecieveComponent",
    props:{
        time: {
            type: WaitingTime,
            require: true
        }
    }
})
</script>