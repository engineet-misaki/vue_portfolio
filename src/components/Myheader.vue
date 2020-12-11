<template>
  <ul class="nav justify-content-center bg-dark">
    <li class="nav-item">
      <router-link class="nav-link" to="/">home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/skil">skil</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/expe">Exprience</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/content">content</router-link>
    </li>
  </ul>
</template>

<style scoped>

.nav-link {
  font-size: 20px;
}

ul {
  margin-bottom: 10px;
}

</style>