<template>
  <div class="container">
    <h1>Projets réalisés</h1>
    <div class="projets__list">
      <div class="projets__item projets__item--1">
          <a class="reservia" href="https://github.com/newtlouis/Reservia--site-web" target="_blank"></a>
        <div class="info">
            <div class="title">Reservia</div>
            <div class="more">Intégration d'une maquette responsive</div>
        </div>
      </div>

      <div class="projets__item projets__item--2">
        <a class="ohmyfood" href="https://github.com/newtlouis/Ohmyfood--site-web-anime" target="_blank"></a>
        <div class="info">
            <div class="title">Ohmyfood !</div>
            <div class="more">Intégration d'une maquette fournie, d'une page web, de manière reponsive et de la dynamiser avec des animations CSS en utilisant le préprocesseur Sass</div>
        </div>
      </div>

      <div class="projets__item projets__item--3">
        <a class="orinoco" href="https://github.com/newtlouis/Orinoco--Front-End" target="_blank"></a>
        <div class="info">
            <div class="title">Orinoco</div>
            <div class="more">Création d'une interface Front End pour la mise en place d'un Ecommerce, l'API backend étant déjà fournie.</div>
        </div>
      </div>

      <div class="projets__item projets__item--4">
        <a class="peakocko" href="https://github.com/newtlouis/peakocko-API-securisee" target="_blank"></a>
        <div class="info">
            <div class="title">So Peakocko- Backend</div>
            <div class="more">Création d'une API sécurisée pour l'application de sauce "So Peakocko" </div>
        </div>
      </div>

      <div class="projets__item projets__item--5">
        <a class="groupomania" href="https://github.com/newtlouis/R-seau-social-d-entreprise--Groupomania" target="_blank"></a>
        <div class="info">
            <div class="title">Groupomania</div>
            <div class="more">Developpement d'une application Full Stack et création d'un réseau social d'entreprise</div>
        </div>
      </div>

      <div class="projets__item projets__item--6">
        <a class="todolist" href="https://github.com/newtlouis/todo-list" target="_blank"></a>
        <div class="info">
            <div class="title">Todo List</div>
            <div class="more">Création d'une application Full Stack Todo List</div>
        </div>
      </div>

      <div class="projets__item projets__item--7">
        <a class="weatherapp" href="https://github.com/newtlouis/weather-app" target="_blank"></a>
        <div class="info">
            <div class="title">Weather App</div>
            <div class="more">Création d'une application météo</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>



.projets__list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
}

.projets__item{
  text-align: center;
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 20px 0;
  animation: apparition 0.8s ease-out 0.5s backwards;
   @for $i from 1 through 7{
       &--#{$i}{
           animation-delay: 0.1s*$i;
       }
   }
}


a{
    width: 170px;
    height: 200px;
    margin-right: 2vw;
}
.reservia,.ohmyfood,.orinoco,.groupomania,.peakocko,.todolist, .weatherapp{
    
    border: none;
    transition: 0.3s;
    background-position: center;
    background-size: cover;
    border: solid gray 1px;
    &:hover{
        border: solid gray 3px;
        box-shadow: gray 10px 10px 10px;
    }
}

.reservia{
    background-image: url('../assets/Reservia_site_web.png');
}
.ohmyfood{
    background-image: url('../assets/ohmyfood.png');
}

.orinoco{
    background-image: url('../assets/orinoco.png');
}
.peakocko{
    background-image: url('../assets/SoPeakocko.png');
}
.groupomania{
    background-image: url('../assets/Groupomania.png');
}
.todolist{
    background-image: url('../assets/todolist.png');
}
.weatherapp{
    background-image: url('../assets/weatherapp.png');
}

.info{
    width: 20vw;
    margin: 0 auto;
    text-align: left;
}

.title{
    font-size: 30px;
}

@keyframes apparition{
    from {
        opacity: 0;
        transform: translateY(5vh);
        
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
