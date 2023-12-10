<template>
    <div class="
        w-full max-w-full min-h-full h-full p-3
        surface-800
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
                <router-link to="/register-user">
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

        <!-- Login Form -->
        <div class="">
            Login
            <label for="email">E-mail</label>
            <input id="email" type="text" placeholder="" v-model="user.email">

            <label for="password">Senha</label>
            <input id="password" type="text" placeholder="" v-model="user.password">

            <button>Entrar</button>
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