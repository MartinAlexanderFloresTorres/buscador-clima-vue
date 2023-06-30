<script setup>
import { reactive, ref } from 'vue'
import Alerta from './Alerta.vue'

const error = ref('')
const busqueda = reactive({
  ciudad: '',
  pais: ''
})

const emit = defineEmits(['obtener-clima'])

const paises = [
  { codigo: 'US', nombre: 'Estados Unidos' },
  { codigo: 'MX', nombre: 'México' },
  { codigo: 'AR', nombre: 'Argentina' },
  { codigo: 'CO', nombre: 'Colombia' },
  { codigo: 'CR', nombre: 'Costa Rica' },
  { codigo: 'ES', nombre: 'España' },
  { codigo: 'PE', nombre: 'Perú' }
]

const handleSubmit = () => {
  // Validar
  if (Object.values(busqueda).includes('')) {
    error.value = 'Campos vacios'
    return
  }

  error.value = ''
  emit('obtener-clima', {...busqueda})
}
</script>

<template>
  <form class="formulario" @submit.prevent="handleSubmit">
    <Alerta v-if="error.length > 0">{{ error }}</Alerta>
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input
        type="text"
        autofocus
        id="ciudad"
        name="ciudad"
        v-model="busqueda.ciudad"
        placeholder="Ej. Londres"
      />
    </div>
    <div class="campo">
      <label for="pais">Pais</label>
      <select name="pais" id="pais" v-model="busqueda.pais">
        <option value="">-- Seleccione un pais --</option>
        <option v-for="pais in paises" :key="pais.codigo" :value="pais.codigo">
          {{ pais.nombre }}
        </option>
      </select>
    </div>

    <input type="submit" value="Buscar Clima" />
  </form>
</template>
