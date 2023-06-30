<template>
  <div class="alerta">
      <slot></slot>
  </div>
</template>

<style>
  .alerta {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--blanco);
      text-transform: uppercase;
      background:  #ff000035;
      border: 1px solid #ff0000;
      font-weight: 900;
      font-size: 1.8rem;
      padding: .5rem
  }
</style>