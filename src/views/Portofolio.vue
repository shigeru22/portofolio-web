<template>
  <div class="portofolio my-auto">
    <div class="grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-4">
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
        desc: 'Social media made simple.',
        img: 'latus.png',
        link: 'https://github.com/Itsakaseru/Latus',
        tags: [
          'PHP',
          'Bootstrap'
        ]
      },
      uschool: {
        name: 'U-School',
        desc: 'Web programming mid-term test project.',
        img: 'webapp.png',
        link: 'https://github.com/shigeru22/USchool-2020',
        tags: [
          'PHP',
          'Bootstrap'
        ]
      },
      duardrincc: {
        name: 'DuarDrincc',
        desc: 'Software Project Management final project.',
        img: 'duardrincc.png',
        link: 'https://github.com/shigeru22/DuarDrincc',
        tags: [
          'Unity',
          'C#'
        ]
      },
      knoledge: {
        name: 'Knoledge',
        desc: 'Student CRUD for web programming project.',
        img: 'knoledge.png',
        link: 'https://github.com/Itsakaseru/Knoledge',
        tags: [
          'PHP',
          'CI3'
        ]
      },
      matematirun: {
        name: 'MateMatirun',
        desc: "A math learning based rhythm game.",
        img: 'matematirun.png',
        link: 'https://github.com/2haus/MateMatirun',
        tags: [
          'Unity',
          'C#'
        ]
      },
      routine: {
        name: 'Routine',
        desc: 'Daily routine wellbeing application.',
        img: 'routine.png',
        link: 'https://github.com/reaperastrea/Routine',
        tags: [
          'Android',
          'Java'
        ]
      },
      worldroller: {
        name: 'World Roller',
        desc: 'A game to roll your way through the island.',
        img: 'worldroller.png',
        link: 'https://github.com/shigeru22/world-roller',
        tags: [
          'Unity',
          'C#'
        ]
      },
      opencardmaker: {
        name: 'OpenCardMaker',
        desc: 'UnityParrot ONGEKI save data editor.',
        img: 'opencardmaker.png',
        link: 'https://github.com/shigeru22/ong-opencardmaker',
        tags: [
          'WPF',
          'C#'
        ]
      }
    }
  }
}
</script>