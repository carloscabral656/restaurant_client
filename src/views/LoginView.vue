<template>
    <div class="h-full min-h-screen p-4 surface-900 text-white">

        <!-- First row (Back and Register User)-->
        <div class="flex flex-row flex-wrap justify-content-between">
            <div class="top-0 left-0 mr-2 mb-2">
                <router-link to="/">
                    <ButtonVue class="w-3rem h-3rem md:w-3rem md:h-3rem lg:w-4rem lg:h-4rem" icon="pi pi-arrow-left text-1xl md:text-4xl lg:text-3xl xl:text-3xl" severity="danger" rounded/>
                </router-link>
            </div>

            <div>
                <div>Não tem conta?</div>
                <router-link to="#" class="text-red-600 no-underline font-bold">
                    Cadastre-se
                </router-link>
            </div>
        </div>

        <!-- -->
        <div class="
            w-100 max-w-full 
            h-20rem md:h-20rem lg:h-20rem xl:20rem
            flex align-items-center justify-content-start
            text-4xl
            font-bold
        ">
            Acesse seus restaurantes prediletos
        </div>
        

        <div class="flex flex-column align-items-center justify-content-start m-auto">
            
            <div class="
                flex flex-column
                w-100
                md:w-50
                lg:w-4
                xl:w-4
                gap-2 mb-5 w-full
                outline-none
            ">
                <label for="email" class="text-xl">E-mail</label>
                <InputTextVue id="email" size="large" v-model="user.email" inputClass="w-100"/>
                <small id="email">Informe o seu e-mail.</small>
            </div>

            <div class="
                flex flex-column
                sm:w-100
                md:w-50
                lg:w-4
                xl:w-4 
                gap-2 mb-5 w-full
                outline-none
            ">
                <label for="password" class="text-xl">Senha</label>
                <PasswordVue id="password" inputClass="w-full" size="large" :feedback="false" v-model="user.password" />
                <small id="password">Informe a sua senha.</small>
            </div>

            <div class="
                flex flex-column
                sm:w-100
                md:w-50
                lg:w-4
                xl:w-4
                gap-2 mb-5 w-full">
                <ButtonVue size="large" label="Entrar" severity="danger" @click="validate" />
            </div>
            
            <div class="
                sm:w-100
                md:w-50
                lg:w-4
                xl:w-4
                text-center
            ">
                <router-link to="#" class=" text-white no-underline font-bold">
                    Esqueceu sua senha?
                </router-link>
            </div>
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
            'isAuthenticated',
            'hasResponse',
            'getResponse'
        ])
    },

    watch: {
        isAuthenticated(){
            this.$router.push('/index');
        },

        hasResponse() {
            this.$toast.add({ severity: 'error', summary: 'Error Message', detail: `${this.getResponse.message}`, life: 3000 });
        }
    },

    methods: {
        validate(){
            if(!this.user.email || !this.user.password) {
                this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'E-mail e Senha são necessários.', life: 3000 });
                return;
            }

            // API's call
            const credentials = new Credential(this.user.email, this.user.password);
            this.state.dispatch('authenticate', credentials);
        }
    },

    setup(){
        const state = useStore();
        return {
            state
        }
    }
});
</script>
