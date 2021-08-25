<template>
<div id="nav">
      <router-link to="/"><i class="fas fa-user"></i></router-link> 
      <router-link to="/skills"><i class="fas fa-tools"></i></router-link>
      <router-link to="/projets"><i class="fas fa-lightbulb"></i></router-link>
      <router-link to="/experience"><i class="fas fa-suitcase"></i></router-link>
      <router-link to="/cursus"><i class="fas fa-history"></i></router-link>
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
  justify-content: space-around;
  flex-direction: column;
  padding: 0 30px;
  height: 100%;
  background-color:#414439;

  a {
    margin: 20px 0;
    font-weight: bold;
    color: #fff;


    &.router-link-exact-active {
      color: #FE9900;
    }
  }
}

i{
    font-size: 30px;
}


</style>
