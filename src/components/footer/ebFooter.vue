<template>
  <div class="footer-container">
      <router-link to="/impressum">Impressum</router-link>
      <router-link to="/datenschutz">Datenschutz</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container{
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  background: var(--eb-ac1);

  
}
a{
  color:white;
  text-decoration: none;
  margin: 1px 1vw
  
}

</style>