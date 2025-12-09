<template>
    <div class="alert alert-info">
      <p><strong>Mensaje recibido:</strong> {{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "MiComponente",
    props: {
      mensaje: String
    }
  }
  </script>
  