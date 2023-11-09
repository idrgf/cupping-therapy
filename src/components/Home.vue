<template>
  <div>

    <div class="accueil">

      <div>
        <img class="logo " src="../assets/cupping-therapy-bgd.png" alt="logo">
      </div>
      <h1 class="fade-right">Le monde des ventouses et du bien être</h1>
      <h3 class="title-tel">Prenez rendez-vous au :</h3>
      <div class="tel">
        <a href="tel:+33764032501"> 07 64 03 25 01</a>
      </div>
      <div class="open-close">
        <OpenClosed/>
      </div>
    
    </div>

    <div class="container">

      <div class="full-width">
        <h2 class="fade-in">Les prestations à domicile</h2>
        <div class="card-component fade-in">
          <CardComponent/>
        </div>
        <p class="fade-in prestation">
          Dans mon institut je propose 3 types de massage, le massage Thailandais, Tui Na et aux pierres chaudes. Cela fait 10 ans que j'exerce la cupping therapy diplomé et formé par le Docteur Amir Salah.
        </p>
      </div>

      <hr class="fade-in">

      <div class="full-width">
        <h2 class="fade-in">Le Cupping Therapie, en quoi ça consiste ?</h2>
        <p class="fade-in">
          Pratique ancestrale nous venant tout droit de la médecine traditionnelle chinoise et moyen-orientale, la cupping therapy consiste à appliquer plusieurs ventouses sur le corps à même la peau de manière à provoquer un effet de succion à son contact.
        </p>
        <p class="fade-in">
          C’est de ce phénomène que proviennent les marques rouges pouvant apparaître à la suite d’une telle pratique, précisément là où les ventouses ont été déposées.
        </p>  
      </div>

      <hr class="fade-in">

      <div class="fade-in full-width">
        <div>
          <h2 class="fade-in">Les bienfaits</h2>
        </div>
        <img class="img-fade fade-in float-left" src="../assets/imageacc1.jpeg" alt="image">
        <p class="fade-in">
          La technique des ventouses vous permet de retrouver force, vitalité et procure un énorme bien-être. De plus, cette technique permet aussi d'éliminer les toxines du corps et améliorer l'état de santé général.<br><br>
        </p>
        <p class="fade-in">
          Le massage aux ventouses est une technique très bénéfique pour l'organisme et la santé. Il permet d'améliorer la circulation sanguine, drainer, purifier et détoxifier le corps. Il est également très efficace pour retrouver toute sa beauté.<br><br>
        </p>
      </div>

      <hr class="fade-in">

      <div class="fade-in full-width">
        <div>
          <h2 class="fade-in">Une pratique recommandée</h2>
        </div>
        <img class="img-fade fade-in float-right" src="../assets/img2.jpeg" alt="image">
        <p class="fade-in">
          La cupping therapie soulage des douleurs musculaires, des migraines et maux de tête, des douleurs articulaires, neuropathiques et problème neurologiques.<br><br>
        </p>
        <p class="fade-in">
          Les ventouses sèches soulage le stress, elle est recommandéee pour les sportifs car cela agit sur la récupération musculaire et améliore les performances physique.<br><br>
        </p>
        <p class="fade-in">
          Il est conseillé de faire une séance à jeun 3h avant minimum.
        </p>
      </div>


      <hr class="fade-in">
      

      <div class="fade-in">
        <h2 class="fade-in">
          Prenez votre rendez-vous :
        </h2>
      </div>
      <div class="contact">
        <div class="fade-in">
          <h3>Telephone</h3>
          <a class="fade-in noir" href="tel:+33764032501"> 07 64 03 25 01</a>
        </div>
  
    
        <div>
          <h3 class="fade-in">Horaires d'ouverture</h3>
          <p class="fade-in">
            Lundi et mercredi : 7h - 20h
          </p>
          <p class="fade-in">
            Mardi et Jeudi : 10h - 20h
          </p>
          <p class="fade-in">
            Vendredi : 15h - 20h
          </p>
          <p class="fade-in">
            Samedi : 14h - 20h
          </p>
          <p class="fade-in">
            Dimanche : 10h - 19h
          </p> 
        </div>

        <div>
          <h3 class="fade-in">Adresse</h3>
          <p class="fade-in">95 rue Fieux <br> 31100 Toulouse</p>
        </div>
        
      </div>

      <div class="main-iframe full-width">
        <iframe class="iframe full-width" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.101467494476!2d1.417422!3d43.5836028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebba460c20f8d%3A0x3664d5aaf046d8c3!2s95%20Rue%20Fieux%2C%2031100%20Toulouse!5e0!3m2!1sfr!2sfr!4v1699189445326!5m2!1sfr!2sfr" title="plan" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


    </div>
  
  </div>
</template>

<script>
import AnimatedText from './AnimatedText.vue';
import OpenClosed from './OpenClosed.vue';
import CardComponent from '@/components/Card.vue'

export default {
  name: 'HomeVue',
  data() {
    return {
      show: true,
      fadeInElements: []
    }
  },
  props: {
    msg: String,
  },
  components:{
    AnimatedText,
    OpenClosed,
    CardComponent
  },
  mounted(){
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed(){
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      for (let i = 0; i < this.fadeInElements.length; i++) {
        const elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
          this.fadeInElements.splice(i, 1) // Pour jouer l'animation seulement une fois
        }
      };
    },
    isElemVisible(el) {
      const rect = el.getBoundingClientRect()
      const elemTop = rect.top + 200 // buffer
      const elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >=0
    },
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Solitreo&display=swap')
@import "sass/style.sass"
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap')

.accueil
  height: 750px
  background: linear-gradient(#CCC4B4, #E8E0D5)
  top: 0
  left: 0
  width: 100%
  
.logo
  height: 370px

.open-close
  padding-top: 2rem
.card-component
  margin: 5rem 0

.container
  width: 100%
  margin: 0 auto
  padding: 0 15%
  img
    border-radius: 5px
  .fade-in
    opacity: 0
    transition: 0.4s all ease-out
    transform: scale(0.8)
    display: block
  .full-width
    width: 100%

.img-fade
  width: 350px

.prestation
  margin-bottom: 2rem

.tel
  margin: 0 auto
  background-color: $bleu
  width: 150px
  border-radius: 10px
  text-decoration: none
  color: white
  padding: 5px

.card
  padding-bottom: 5rem
  border-radius: 30px
  width: 50%
  margin: 3rem auto
  padding: 50px

.contact
  display: flex
  justify-content: space-between
  padding-bottom: 6rem
  flex-direction: row
.main-iframe
  padding-bottom: 6rem
.iframe
  border:0
  height: 450pX

  @media screen and (max-width: 1024px)
  .float-left
    margin-right: 50px
  .float-right
    margin-left: 50px
  .fade-right
    padding: 0 50px

  
@media screen and (max-width: 768px)
  .float-left, .float-right
    float: none
    margin: 0 auto
  .accueil
    height: 750px
  .img-fade
    width: 250px
    margin-bottom: 50px
  .card
    padding: 0
  .contact
    flex-direction: column
</style>
