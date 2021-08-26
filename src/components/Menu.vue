<template>
<div id="nav">
      <img class="img__nav" alt="Photo profil Louis MICHEL" src="../assets/photo_profil_mobile.jpg">
      <router-link to="/"><div class="button user"><i class="fas fa-user"></i></div></router-link> 
      <router-link to="/skills"><div class="button light"><i class="fas fa-lightbulb"></i></div></router-link>
      <router-link to="/projets"><div class="button "><i class="fas fa-suitcase"></i></div></router-link>
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
  // transform: translate(4px,-0.5px);
  padding: 0 4px;
 
}

.user{
  // transform: translate(4px,-0.5px);
  padding: 0 1px;
}

#nav {
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  background-color:#414439;
  @media (max-width:1050px){
      padding: 0;
    }
  @media (max-width:500px) {
    padding: 0;
    flex-direction: row;
    height: 80px;
    width: 100%;
    justify-content: space-between;

  }

 

  a {
    margin: 36px 0;
    font-weight: bold;
    color: #fff;
    transition: 0.1s ease-in-out;
    border: solid 1px #Fff ;
    border-radius: 50%;
    box-shadow: 0 0 3px 1px white;
    padding: 10px;
    @media (max-width:1050px){
      margin: 10px 0;
    }
    @media (max-width:500px){
      margin: 0;
      border: none;
      box-shadow: none;
    }

    &:hover{
      transform: scale(1.2);  
    }

    &.router-link-exact-active {
      color: #FE9900;
      border: solid 1px #FE9900;
      box-shadow: 0 0 5px 2px #FE9900;
      @media (max-width:500px){
        margin: 0;
        border: none;
        box-shadow: none;
    }


      }
  }
}

i{
    font-size: 30px;
    text-align: center;
    
}

img{
  height: 0px;
}

.img__nav{
  border: none;
  @media (max-width:1050px){
      height: 180px;
  @media (max-width:500px){
        height: 100%;
    }

    }
}

</style>
