<template>
    <div>
        <i class="
            pi pi-star-fill text-orange-400 font-bold
            "></i> <span class="text-orange-300 font-bold">{{ evaluation ?? ' - ' }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "EvaluationComponent",
    props: {
        evaluation: Number
    }
});
</script>