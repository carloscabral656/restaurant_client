<template>
    <div class="
        w-full max-w-full 
        min-h-full h-full p-3
        surface-900
        text-white
    ">
        <div class="w-4 flex flex-column align-items-center justify-content-start m-auto">
            <div class="flex flex-column gap-2 mb-5 w-full">
                <label for="username">E-mail</label>
                <InputTextVue id="" type="text" placeholder="" size="large" v-model="user.email" />
                <small id="username-help">Enter your username to reset your password.</small>
            </div>

            <div class="flex flex-column gap-3 mb-5 w-full">
                <label for="username">Password</label>
                <InputTextVue type="text" size="large" v-model="user.password" />
                <small id="username-help">Enter your username to reset your password.</small>
            </div>

            <div class="flex flex-column gap-2 mb-3 w-full">
                <ButtonVue size="large" label="Entrar" severity="danger" @click="validate"/>
            </div>
            
            <router-link to="/reset-password" class="text-white no-underline font-bold">
                Esqueceu sua senha?
            </router-link>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "RegisterUserView",
    data(){
        return {
            user: {
                name: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        validate(){
            return false;
        }
    }
});
</script>


<style>
</style>