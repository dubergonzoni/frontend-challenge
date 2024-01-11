<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PastelIdeias from './components/PastelIdeias.vue';

export default defineComponent({
  name: 'App',
  components: {
    PastelIdeias
  }
});
</script>

<style>
/* Estilos globais podem ser adicionados aqui */
</style>
