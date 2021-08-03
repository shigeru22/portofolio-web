<template>
  <div class="portofolio">
    <div class="grid grid-cols-3 grid-row-3 gap-4">
      <PortofolioCard v-bind="latus" />
      <PortofolioCard v-bind="uschool" />
      <PortofolioCard v-bind="duardrincc" />
      <PortofolioCard v-bind="knoledge" />
      <PortofolioCard v-bind="matematirun" />
      <PortofolioCard v-bind="routine" />
      <PortofolioCard v-bind="worldroller" />
      <PortofolioCard v-bind="opencardmaker" />
    </div>
  </div>
</template>

<script lang="ts">
import PortofolioCard from '@/components/PortofolioCard.vue'

export default {
  components: {
    PortofolioCard
  },
  data: () => {
    return {
      latus: {
        name: 'Latus',
        desc: 'Social media made simple, written in PHP.',
        img: 'latus.png'
      },
      uschool: {
        name: 'U-School',
        desc: 'Web programming mid-term test project.',
        img: 'webapp.png'
      },
      duardrincc: {
        name: 'DuarDrincc',
        desc: 'Software Project Management final project.',
        img: 'duardrincc.png'
      },
      knoledge: {
        name: 'Knoledge',
        desc: 'Student CRUD for web programming project.',
        img: 'knoledge.png'
      },
      matematirun: {
        name: 'MateMatirun',
        desc: "A math learning based rhythm game.",
        img: 'matematirun.png'
      },
      routine: {
        name: 'Routine',
        desc: 'Daily routine wellbeing application.',
        img: 'routine.png'
      },
      worldroller: {
        name: 'World Roller',
        desc: 'A game to roll your way through the island.',
        img: 'worldroller.png'
      },
      opencardmaker: {
        name: 'OpenCardMaker',
        desc: 'UnityParrot ONGEKI save data editor.',
        img: 'opencardmaker.png'
      }
    }
  }
}
</script>