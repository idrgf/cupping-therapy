<template>
  <router-view/>
  <FooterBar/>

</template>

<script>
import FooterBar from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    FooterBar
  }

}
</script>

<style lang="sass">
@import "sass/style.sass"

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
</style>