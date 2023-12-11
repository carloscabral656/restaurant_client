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
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

#app{
  width: 100vw;
  height: 100vh;
}
</style>


