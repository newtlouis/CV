<template>
  <div class="container">
    <h1>Projets réalisés</h1>
    <div class="projets__list">
      <div class="projets__item">
          <a href="https://github.com/newtlouis/Reservia--site-web" target="_blank"><img alt="Site web Reservia" src="../assets/Reservia_site_web.png"></a>
        
        <div class="info">
            <div class="title">Reservia</div>
            <div class="more">Intégration d'une maquette responsive</div>
        </div>
      </div>

      <div class="projets__item">
        <a href="https://github.com/newtlouis/Ohmyfood--site-web-anime" target="_blank"><img alt="Site web Ohmyfood" src="../assets/ohmyfood.png"></a>
        <div class="info">
            <div class="title">Ohmyfood !</div>
            <div class="more">Intégration d'une maquette fournie, d'une page web, de manière reponsive et de la dynamiser avec des animations CSS en utilisant le préprocesseur Sass</div>
        </div>
      </div>

      <div class="projets__item">
        <a href="https://github.com/newtlouis/Orinoco--Front-End" target="_blank"><img alt="Ecommerce Orinico" src="../assets/orinoco.png"></a>
        <div class="info">
            <div class="title">Orinoco</div>
            <div class="more">Création d'une interface Front End pour la mise en place d'un Ecommerce, l'API backend étant déjà fournie.</div>
        </div>
      </div>

      <div class="projets__item">
        <a href="https://github.com/newtlouis/peakocko-API-securisee" target="_blank"><img alt="Site web de sauce" src="../assets/SoPeakocko.png"></a>
        <div class="info">
            <div class="title">So Peakocko- Backend</div>
            <div class="more">Création d'une API sécurisée pour l'application de sauce "So Peakocko" </div>
        </div>
      </div>

      <div class="projets__item">
        <a href="https://github.com/newtlouis/R-seau-social-d-entreprise--Groupomania" target="_blank"><img alt="Réseau social Groupomania" src="../assets/Groupomania.png"></a>
        <div class="info">
            <div class="title">Groupomania</div>
            <div class="more">Developpement d'une application Full Stack et création d'un réseau social d'entreprise</div>
        </div>
      </div>

      <div class="projets__item">
        <a href="https://github.com/newtlouis/todo-list" target="_blank"><img alt="Todo List" src="../assets/todolist.png"></a>
        <div class="info">
            <div class="title">Todo List</div>
            <div class="more">Création d'une application Full Stack Todo List</div>
        </div>
      </div>

      <div class="projets__item">
        <a href="https://github.com/newtlouis/weather-app" target="_blank"><img alt="Application météo" src="../assets/weatherapp.png"></a>
        <div class="info">
            <div class="title">Weather App</div>
            <div class="more">Création d'une application météo</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  padding: 20px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}


.projets__list{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
}

.projets__item{
  text-align: center;
  display: flex;
  align-items: center;
  margin: 20px 0;
}

img{
  height: 200px;
  border: none;
  transition: 0.3s;
  &:hover{
    border: solid gray 3px;
    box-shadow: gray 10px 10px 10px;
  }
}

.info{
    padding: 10px;
}

.title{
    font-size: 30px;
}
</style>
