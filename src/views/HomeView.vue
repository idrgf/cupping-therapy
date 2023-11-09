<template>
  <div class="home">
    <HomeVue/>
  </div>
</template>

<script>
  import HomeVue from '@/components/Home.vue'
  import CardComponent from '@/components/Card.vue'

  export default {
    name: 'HomeView',
    components: {
      HomeVue,
      CardComponent
    }
  }
</script>

<style lang="sass">
@import "sass/style.sass"

.home
  font-family: 'Montserrat', sans-serif
      
h1
  color: black
</style>