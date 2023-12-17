<template>
    <div class="flex flex-row justify-content-between">
        <i class="pi pi-clock mr-2 text-500"> </i> <span class="font-light text-500 font-bold">{{ time?.from }} - {{ time?.until }} min</span>
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