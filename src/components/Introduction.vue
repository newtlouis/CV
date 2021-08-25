<template>
<div class="container">
  <h1>Louis MICHEL</h1>
  <h2 class="item--1">Ingénieur généraliste et Developpeur Web Full Stack</h2>
  <p class="item--2">Suite à mon diplôme d'ingénieur généraliste de l'ENTPE, j'ai poursuivi par la formation de developpeur web Full Stack d'OpenClassrooms</p>
  <p class="item--2">Mon adresse email: <a href="mailto:louis.m.newton@hotmail.fr">louis.m.newton@hotmail.fr</a></p>
  <p class="item--2">Mon numéro: <a href="tel:+33661965595">+33 6 61 96 55 95</a></p>


</div>

</template>

<script>
export default {
  name: 'Introduction',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



h2 {
  color: #FE9900;
  font-size: 30px;
}

p{
  font-size: 20px;
}

p, h2{
  margin: 30px 0;
}

.item{
  animation: apparition 0.8s ease-out 0.5s backwards;
   @for $i from 1 through 2{
       &--#{$i}{
           animation-delay: 0.1s*$i;
       }
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
