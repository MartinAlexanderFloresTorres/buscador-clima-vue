<script setup>
defineProps({
  clima: Object,
  required: true
})

const formatearTemperatura = (temperatura) => {
  return (parseInt(temperatura) - 273.15).toFixed(2)
}
</script>
<template>
  <div class="resultado">
    <h2>Clima de: {{ clima.name }}</h2>

    <p class="actual">{{formatearTemperatura(clima.main.temp)}} &deg;</p>
    <div class="temperaturas">
      <p>Min: {{formatearTemperatura(clima.main.temp_min)}}<span>&deg;C</span></p>
      <p>Max: {{formatearTemperatura(clima.main.temp_max)}}<span>&deg;C</span></p>
    </div>
  </div>
</template>
