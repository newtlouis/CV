<template>
  <div class="container">
    <h1>Skills</h1>
    <div class="skills__list">
      <div class="skills__item"><i class="fab fa-html5"></i>HTML5</div>
      <div class="skills__item"><i class="fab fa-css3-alt"></i>CSS</div>
      <div class="skills__item"><i class="fab fa-js"></i>JavaScript</div>
      <div class="skills__item"><i class="fas fa-database"></i>MySql</div>
      <div class="skills__item"><i class="fab fa-vuejs"></i>VueJs</div>
      <div class="skills__item"><i class="fab fa-github"></i>GIT</div>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding: 20px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}


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
}

i{
  font-size: 30px;
  padding: 0 10px;
  color: #FE9900;

}
</style>
