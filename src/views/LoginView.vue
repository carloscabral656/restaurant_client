<template>
    <div>
        
        <router-link to="/">
            <span>Voltar</span>
        </router-link>

        <div class="">
            Login
            <label for="">E-mail</label>
            <input type="text" placeholder="" v-model="user.email">

            <label for="">Senha</label>
            <input type="text" placeholder="" v-model="user.password">
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