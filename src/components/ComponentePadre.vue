<template>
  <div>
    <h2>Ejemplo de Props</h2>

    <input 
      type="text"
      v-model="texto"
      class="form-control w-50 mb-3"
      placeholder="Escribí algo..."
    />

    <MiComponente :mensaje="texto" v-if="texto.trim() !== ''" />
  </div>
</template>

<script>
import MiComponente from '../components/MiComponente.vue'

export default {
  components: { MiComponente },
  data() {
    return {
      texto: ""
    }
  }
}
</script>
