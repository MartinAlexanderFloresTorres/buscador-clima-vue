<script setup>
import Formulario from './components/Formulario.vue'
import Clima from './components/Clima.vue';
import Alerta from './components/Alerta.vue'
import useClima from './hooks/useClima'
import Spinner from './components/Spinner.vue'

const { clima, error, loading, obtenerClima } = useClima()

</script>

<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="obtenerClima"/>
    <Clima v-if="clima" :clima="clima"/>
    <Spinner v-if="loading"/>
    <Alerta v-if="error.length > 0">
        {{ error }}
    </Alerta>
  </div>
</template>
