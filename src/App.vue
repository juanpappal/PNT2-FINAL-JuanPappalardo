<!-- /*esto es simplemente una muestra de como deberia ser la estructura */ -->
<!-- /* tambien se puede separa el navbar para mas prolijidad */-->

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a class="navbar-brand" href="#">Proyecto Base</a>

      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/props">Props</router-link>
        <router-link class="nav-link" to="/computed">Computed</router-link>
      </div>
    </nav>

    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default { }
</script>

