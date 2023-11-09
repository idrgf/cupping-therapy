<template>
  <div class="footer">
    <div class="content">
      <router-link to="/"><img src="../assets/cupping-therapy-bgd.png" alt="logo"></router-link>
    </div>
    <div class="content">
      <p>Cupping therapie</p>
    </div>
    <div class="content">
      <p>Massage Thailandais</p>
    </div>
    <div class="content">
      <p>Massage Tui na</p>
    </div>
    <div class="content">
      <p>Massage aux pierres chaudes</p>
    </div>
    <nav class="content">
      <router-link class="mention-legal" to="/mentionLegale">Mention legale</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>

<Style lang="sass" scoped>
@import "sass/style.sass"

.footer
  width: 100%
  height: 200px
  background-color: #CCC4B4
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  .content
    display: flex
    justify-content: center
    width: 150px
    p
      color: white
  img
    display: flex
    width: 60px

.mention-legal
  font-family: 'Solitreo'
  width: 100px
  display: flex
  margin-top: 20px
  text-shadow: none
  font-size: 20px

@media screen and (max-width: 1024px)



@media screen and (max-width: 768px)
.footer
  height: 225px
  .content
    margin: 0 auto
    width: 33%
    p
      color: white
      width: 129px
</Style>