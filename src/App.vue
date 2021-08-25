<template>
<div class="cv">
    <div id="nav">
      <router-link to="/"><i class="fas fa-user"></i></router-link> 
      <router-link to="/skills"><i class="fas fa-tools"></i></router-link>
      <router-link to="/projet"><i class="fas fa-lightbulb"></i></router-link>
      <router-link to="/projet"><i class="fas fa-suitcase"></i></router-link>
      <router-link to="/cursus"><i class="fas fa-history"></i></router-link>
      <router-link to="/contact"><i class="fas fa-phone"></i></router-link>
    </div>
    <img alt="Vue logo" src="./assets/photo_profil.jpg">

    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fca416;
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

.main{
  // width: 100%;
  height: 100%;
  background-color: #ffffff;
}

img{
  height: 80vh;
  border: solid gray 3px;
}
</style>
