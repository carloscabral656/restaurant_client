<template>

    <!--  -->
    <div class="">
        <router-link to="/">
            <span>Back</span>
        </router-link>

        <div>
            Não tem conta?
            Cadastre-se
        </div>
    </div>

        <div class="">
            Login
            <label for="email">E-m  ail</label>
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