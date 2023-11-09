<template>
  <div class="container-card">
    <div class="item tui">
      <p>
        Massage Tui na
      </p>
    </div>
    <div class="item thai">
      <p>
        Massage Thailandais
      </p>
    </div>
    <div class="item pierre">
      <p>
        Massage aux pierres chaudes
      </p>
    </div>
    <div class="item cup">
      <p>
        Cupping Therapie
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "sass/style.sass"
.container-card
  height: 15rem
  display: flex
  justify-content: space-between
  .item
    flex-grow: 1
    transition: width 300ms ease
    width: 33%
    margin: 0 1%
    border-radius: .5rem  
    padding: 5px
    left: 0
    right: 0
    &:hover
      width: 100%
    p
      color: white
      text-shadow: -2px 3px 6px rgba(17,8,5,0.65)
  .cup
    background-image: url("../assets/img1.jpg")
    background-size: cover
    background-position-y: center
  .tui
    background-image: url("../assets/bgi1.jpg")
    background-size: cover
    background-position-y: center
  .thai
    background-image: url("../assets/msgthai.jpeg")
    background-size: cover
    background-position-y: center
  .pierre
    background-image: url("../assets/imgpchaude.jpg")
    background-size: cover
    background-position-y: center

@media screen and (max-width: 1024px)
  .container-car
    flex-wrap: wrap
    height: 21rem
    .item
      margin-top: 1rem
      height: 9rem
      &:hover
        width: 60%
  
@media screen and (max-width: 768px)
  .container-card
    display: block
    height: 38rem
    width: 100%
    padding: 0
    .item
      width: 90%
      margin-top: 1rem
      margin-left: auto
      margin-right: auto
      height: 9rem
      &:hover
        width: 80%
  

</style>
