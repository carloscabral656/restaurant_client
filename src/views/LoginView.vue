<template>
    <div class="
        h-full min-h-screen
        p-4
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
            Acesse seus restaurantes prediletos {{isAuthenticated}}
        </div>
        

        <div class="
                flex flex-column align-items-center justify-content-start m-auto">
            
            <div class="
                flex flex-column
                sm:w-100
                md:w-100
                lg:w-4
                xl:w-4
                gap-2 mb-5 w-full
            ">
                <label for="email">E-mail</label>
                <InputTextVue id="email" size="large" v-model="user.email" />
                <small id="email">Enter your username to reset your password.</small>
            </div>

            <div class="
                flex flex-column
                sm:w-100 
                gap-2 mb-5 w-full">
                <label for="password">Password</label>
                <PasswordVue id="password" inputClass="w-full" size="large" :feedback="false" v-model="user.password" />
                <small id="password">Enter your username to reset your password.</small>
            </div>

            <div class="w-4 flex flex-column gap-2 mb-3 w-full">
                <ButtonVue size="large" label="Entrar" severity="danger" @click="validate"/>
            </div>
            
            <router-link to="/reset-password" class="w-4 text-white no-underline font-bold">
                Esqueceu sua senha?
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Credential } from '@/entities/Credential';
import { mapGetters } from 'vuex'

export default defineComponent({
    name: "LoginView",
    data() {
        return {
            user: {
                email: null,
                password: null,
            }
        }
    },
    computed: {
        ...mapGetters([
            'isAuthenticated'
        ])
    },
    watch: {
        isAuthenticated(){
            this.$router.push('/index')
        }
    },
    methods: {
        validate(){
            if(
                !this.user.email ||
                !this.user.password
            ){
                this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'E-mail e Password são necessários.', life: 3000 });
                return;
            }

            // API's call
            const credentials = new Credential(this.user.email, this.user.password);
            this.state.dispatch('authenticate', credentials);
        }
    },
    created() {
        if(this.isAuthenticated) this.$router.push('/index')
    },
    setup(){
        const state = useStore();
        return {
            state
        }
    }
});
</script>

<style>
</style>