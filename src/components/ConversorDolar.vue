
<template>
  <div>
    <div class="mb-3">
      <label for="pesos" class="form-label">Ingrese monto en pesos</label>
      <input
        id="pesos"
        type="number"
        class="form-control"
        v-model.number="pesos"
        min="0"
      />
    </div>
    <div class="mb-3">
      <label for="dolar" class="form-label">Valor del dólar en pesos</label>
      <div class="input-group">
        <input
          id="dolar"
          type="number"
          class="form-control"
          v-model.number="dolar"
          :disabled="actualizacionActiva"
          min="0"
        />
        <div class="input-group-text">
          <input
            id="chk-auto"
            type="checkbox"
            class="form-check-input mt-0 me-2"
            v-model="actualizacionActiva"
          />
          <label for="chk-auto" class="form-check-label">
            Actualización
          </label>
        </div>
      </div>
      <small v-if="fechaHoraActualizacion" class="text-muted">
        Última actualización: {{ fechaHoraActualizacion }}
      </small>
    </div>
    <div class="mb-3">
      <label class="form-label">Valor convertido USD</label>
      <p class="form-control">
        {{ valorConvertidoUSD }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const pesos = ref(0)
const dolar = ref(0)
const actualizacionActiva = ref(false)
const fechaHoraActualizacion = ref('')

let intervaloId = null

const valorConvertidoUSD = computed(() => {
  if (!dolar.value || dolar.value <= 0) {
    return '0'
  }
  const resultado = pesos.value / dolar.value
  return resultado.toFixed(2)
})

const obtenerCotizacion = async () => {
  try {
    const resp = await axios.get('https://api.bluelytics.com.ar/v2/latest')
    const valor = resp.data?.oficial?.value_sell
    if (valor) {
      dolar.value = valor
      fechaHoraActualizacion.value = new Date().toLocaleString()
    }
  } catch (error) {
    console.error('Error al obtener cotización', error)
  }
}

const iniciarActualizacionAutomatica = () => {
  detenerActualizacionAutomatica()
  obtenerCotizacion()
  intervaloId = setInterval(() => {
    obtenerCotizacion()
  }, 2000)
}

const detenerActualizacionAutomatica = () => {
  if (intervaloId !== null) {
    clearInterval(intervaloId)
    intervaloId = null
  }
}

watch(actualizacionActiva, (nuevoValor) => {
  if (nuevoValor) {
    iniciarActualizacionAutomatica()
  } else {
    detenerActualizacionAutomatica()
  }
})

onMounted(() => {
  pesos.value = 0
  dolar.value = 0
})

onUnmounted(() => {
  detenerActualizacionAutomatica()
})
</script>

  