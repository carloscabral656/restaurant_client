<template>
    <div class="flex flex-column gap-2">
        <p class="m-1 sm:text-xl md:text-2xl lg:4-xl xl:4-xl text-left">{{ restaurant.name ?? "-"}}</p>
        <p class="m-1 text-500 font-bold text-sm md:text-base lg:text-base xl:text-base text-left">{{ restaurant?.gastronomy?.description ?? "-"}}</p>
        <div class="flex flex-row gap-2 md:gap-3 lg:gap-3 xl:gap-3">
            <EvaluationComponent :evaluation="restaurant?.evaluation"/>
            <div class="flex flex-row justify-content-between text-500">&#8226;</div>
            <TimeForRecieveComponent :time="waitingTime" />
            <div class="flex flex-row justify-content-between text-500">&#8226;</div>
            <CuponComponent />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EvaluationComponent from '@/components/restaurant/EvaluationComponent.vue';
import TimeForRecieveComponent  from '@/components/restaurant/TimeForRecieveComponent.vue';
import CuponComponent  from '@/components/restaurant/CuponComponent.vue';
import Restaurant from '@/entities/Restaurant';
import WaitingTime from '@/entities/WaitingTime';

export default defineComponent({
    name: "RestaurantInformationComponent",
    data(){
        return {
            waitingTime: new WaitingTime(10, 10, 'min')
        }
    },
    components: {
        EvaluationComponent,
        TimeForRecieveComponent,
        CuponComponent
    },
    props: {
        restaurant: {
            type: Restaurant, 
            required: true 
        }
    }
});
</script>