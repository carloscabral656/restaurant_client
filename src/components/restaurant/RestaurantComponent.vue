<template>
    <div class="
        relative flex flex-row w-100 
        h-14rem md:border-round-md
        md:h-12rem md:border-round-md
        lg:h-16rem lg:border-round-lg
        xl:h-16rem xl:border-round-xl 
        overflow-hidden border-round border-solid border-50 shadow-3 cursor-pointer
    " @click="chooseRestaurant">
        <!-- Containers -->
        <div class="
            flex flex-column flex-1 w-100 relative h-100">

             <!-- Gastronomy's Image -->
            <GastronomyImage :gastronomyImage="data?.gastronomy?.image"/>

            <div class="
                w-100 relative h-5rem text-center grid
                h-4rem 
                md:h-4rem 
                lg:h-5rem 
                xl:h-7rem
            ">
                <div class="col-3"></div>
                <div class="col-9">
                    <RestaurantInformationComponent :restaurant="data" />
                </div>
            </div>
        </div>

        <!-- Restaurant's Image -->
        <RestaurantImage :restaurantImage="data?.image"/>
    </div>
</template>

<script lang="ts">
import Restaurant from '@/entities/Restaurant';
import { defineComponent } from 'vue';
import RestaurantInformationComponent from '@/components/restaurant/RestaurantInformationComponent.vue';
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import GastronomyImage from '@/components/restaurant/GastronomyImage.vue';

export default defineComponent({
    name: "RestaurantComponent",
    methods: {
        chooseRestaurant(){
            this.$router.push(`/restaurant/${this.data.id}`);
        }
    },
    computed: {
        restaurantImage() : string {
            return `background-image: url('${this.data.image}')`;
        }
    },
    props: {
        data: {
            type: Restaurant,
            required: true
        }
    },
    components: {
        RestaurantInformationComponent,
        RestaurantImage,
        GastronomyImage
    }
 });
</script>