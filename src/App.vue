<template>
<div class="cv">
    <Menu/>
   
    <img alt="Photo profil Louis MICHEL" src="./assets/photo_profil.jpg">

    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';




export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



#app {
  font-family:  'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif,Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#FE9900;
  padding: 100px;
  @media (max-width:700px) {
    padding: 10px 10px 200px 10px;
  }
}

.cv{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 500px;
  margin: auto 0 ;

  @media (max-width:1050px){
    border: solid rgb(68, 68, 68) 15px;
    }
  @media (max-width:500px) {
    flex-direction: column;
    border: solid rgb(68, 68, 68) 5px;
    box-shadow: 0 0 5px 5px rgb(68, 68, 68);

  }
   
}


.main{
  width: 40vw;
  height: 100%;
  background-color: #ffffff;
  border: solid #414439 1px;
  border-left: none;
  padding:20px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width:thin;
    box-shadow: 0 0 5px 5px rgb(68, 68, 68);

  @media (max-width:1050px) {
    width: 100%;
  }

}

img{
  height: 550px;
  border: solid rgb(68, 68, 68) 15px;
  @media (max-width:1050px) {
    height: 0vw;
  border: none;
  }
}

h1{
  font-size: 40px;
}
</style>
