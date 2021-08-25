<template>
<div id="nav">
      <router-link to="/"><div class="button user"><i class="fas fa-user"></i></div></router-link> 
      <router-link to="/skills"><div class="button"><i class="fas fa-tools"></i></div></router-link>
      <router-link to="/projets"><div class="button light"><i class="fas fa-lightbulb"></i></div></router-link>
      <router-link to="/experience"><div class="button"><i class="fas fa-suitcase"></i></div></router-link>
      <router-link to="/cursus"><div class="button"><i class="fas fa-history"></i></div></router-link>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.light{
  padding-left: 4px;
}

.user{
  padding: 0 0 3px 2px;
}

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
    transition: 0.1s ease-in-out;
    border: solid 1px #Fff ;
    border-radius: 50%;
    box-shadow: 0 0 3px 1px white;
    padding: 10px;

    


    &:hover{
      transform: scale(1.2);  

    }
    // transform-origin: 0 -50px; 


    &.router-link-exact-active {
      color: #FE9900;
      border: solid 1px #FE9900;

      }
  }
}

i{
    font-size: 30px;
    text-align: center;
}




</style>
