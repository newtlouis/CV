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
  width: 100vw;
  height: 100vh;
}

.cv{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  
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
  scrollbar-width: thin;

}

img{
  height: 80vh;
  border: solid rgb(68, 68, 68) 15px;
}

h1{
  font-size: 40px;
}
</style>
