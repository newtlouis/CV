<template>
  <div class="container">
    <h1>Skills</h1>
    <div class="skills__list">
      <div class="skills__item skills__item--1"><i class="fab fa-html5"></i>HTML5</div>
      <div class="skills__item skills__item--2"><i class="fab fa-css3-alt"></i>CSS</div>
      <div class="skills__item skills__item--3"><i class="fab fa-js"></i>JavaScript</div>
      <div class="skills__item skills__item--4"><i class="fas fa-database"></i>MySql</div>
      <div class="skills__item skills__item--5"><i class="fab fa-vuejs"></i>VueJs</div>
      <div class="skills__item skills__item--6"><i class="fab fa-github"></i>GIT</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>



.skills__list{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
}

.skills__item{
  width: 130px;
  margin: 3vw  0;
  text-align: center;
  display: flex;
  align-items: center;
  animation: apparition 0.8s ease-out 0.5s backwards;
   @for $i from 1 through 9{
       &--#{$i}{
           animation-delay: 0.1s*$i;
       }
   }
}


i{
  font-size: 30px;
  padding: 0 10px;
  color: #FE9900;

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
