<template>
  <ToastVue/>
  <router-view to="/"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  components: {

  }
});
</script>

<style>
html,
body {
  min-height: 100vh; /* 100% da altura da janela de visualização */
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>


