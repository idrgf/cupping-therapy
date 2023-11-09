<template>
    <div>
      <p>
        Actuellement {{ openClose }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OpenClosed',
    data() {
      return {
        openClose: ''
      }
    },
    mounted() {
      this.setOpenCloseStatus()
    },
    methods: {
      setOpenCloseStatus() {
        let now = new Date()
        let day = now.getDay()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let currentTime = hours + (minutes / 60)
  
        let openingHours = [
          { day: 1, open: [7], close: [20] },
          { day: 2, open: [10], close: [20] },
          { day: 3, open: [7], close: [20] },
          { day: 4, open: [10], close: [20] },
          { day: 5, open: [15], close: [20] },
          { day: 6, open: [14], close: [20] },
          { day: 0, open: [10], close: [19] },
        ]
  
        let openClose = ''
        for (const element of openingHours) {
          if (element.day === day) {
            let opens = element.open
            let closes = element.close
            for (let j = 0; j < opens.length; j++) {
              if (currentTime >= opens[j] && currentTime < closes[j]) {
                openClose = 'Ouvert'
                break
              } else {
                openClose = 'Fermé'
              }
            }
            break
          }
        }
  
        this.openClose = openClose
      }
    }
  }
  </script>
  
<style lang="sass" scoped>
p
  padding-top: 3rem

@media screen and (max-width: 768px)
p
  padding-top: 1rem
</style>