<template>
    <div class="
        w-full max-w-full 
        min-h-full h-full p-3
        surface-900
        text-white
    ">

        <!-- First row (Back and Register User)-->
        <div class="flex flex-row flex-wrap justify-content-between">
            <div class="flex align-items-center justify-content">
                <router-link to="/">
                    <ButtonVue icon="pi pi-arrow-left" rounded/>
                </router-link>
            </div>

            <div>
                <div>Não tem conta?</div>
                <router-link to="/register-user" class="text-red-600 no-underline font-bold">
                    Cadastre-se
                </router-link>
            </div>
        </div>

        <!-- -->
        <div class="
            w-full max-w-full h-30rem
            flex align-items-center justify-content-start
            text-3xl font-bold
        ">
            Acesse seus restaurantes prediletos
        </div>
        

        <div class="w-100 flex flex-column align-items-center justify-content-start">
            <div class="w-3">
                <div class="flex flex-column gap-2 mb-5">
                    <label for="username">E-mail</label>
                    <InputTextVue type="text" placeholder="" size="large" v-model="user.email" />
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>

                <div class="flex flex-column gap-3 mb-5">
                    <label for="username">Password</label>
                    <InputTextVue type="text" size="large" v-model="user.password" />
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>

                <div class="flex flex-column gap-2 mb-3">
                    <ButtonVue size="large" label="Entrar" severity="danger" />
                </div>
                
                <router-link to="/reset-password" class="text-white no-underline font-bold">
                    Esqueceu sua senha?
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoginView",
    data() {
        return {
            user: {
                email: null,
                password: null
            }
        }
    }
});
</script>

<style>
</style>