<template>
    <div class="
        w-full max-w-full 
        min-h-full h-full p-3
        surface-900
        text-white
    ">
        <div class="flex align-items-center justify-content">
            <router-link to="/login">
                <ButtonVue icon="pi pi-arrow-left" rounded/>
            </router-link>
        </div>

        <div class="
            w-4 flex flex-column 
            align-items-center 
            justify-content-center 
            m-auto
        ">
            <h1>Reset Password</h1>
            <div class="flex flex-column gap-2 mb-5 w-full">
                <label for="username">E-mail</label>
                <InputTextVue id="" type="text" placeholder="" size="large" v-model="email" />
                <small id="username-help">Enter your e-mail to reset your password.</small>
            </div>

            <div class="flex flex-column gap-2 mb-3 w-full">
                <ButtonVue size="large" label="Send to my e-mail" severity="danger" @click="validate"/>
            </div>
    
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "ResetPasswordView",
    data(){
        return {
            email: null
        }
    },
    methods: {
        validate(){
            this.$toast.add(
                { 
                    severity: 'success', 
                    summary: 'Success', 
                    detail: "If your e-mail's registered in our system an e-mail will be send.", 
                    life: 3000 
                }
            );
        }
    }
});
</script>