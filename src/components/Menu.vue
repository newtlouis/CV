<template>
<div id="nav">
      <router-link to="/"><i class="fas fa-user"></i></router-link> 
      <router-link to="/skills"><i class="fas fa-tools"></i></router-link>
      <router-link to="/projets"><i class="fas fa-lightbulb"></i></router-link>
      <router-link to="/experience"><i class="fas fa-suitcase"></i></router-link>
      <router-link to="/cursus"><i class="fas fa-history"></i></router-link>
      <router-link to="/contact"><i class="fas fa-phone"></i></router-link>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  height: 100%;
  background-color: gray;

  a {
    margin: 20px 0;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e6a031;
    }
  }
}


</style>
