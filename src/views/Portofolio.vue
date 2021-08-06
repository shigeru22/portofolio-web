<template>
  <div class="portofolio my-auto">
    <div class="grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-2">
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
        ],
        coloring: '#3e3662',
        subcoloring: '#63569d',
        // maincoloring: '#a89dd5',
        tagcoloring: '#9c8ccc'
      },
      uschool: {
        name: 'U-School',
        desc: 'Web programming mid-term test project.',
        img: 'webapp.png',
        link: 'https://github.com/shigeru22/USchool-2020',
        tags: [
          'PHP',
          'Bootstrap'
        ],
        coloring: '#7f6451',
        subcoloring: '#b28b71',
        // maincoloring: '#ffebde',
        tagcoloring: '#e5b392'
      },
      duardrincc: {
        name: 'DuarDrincc',
        desc: 'Software Project Management final project.',
        img: 'duardrincc.png',
        link: 'https://github.com/shigeru22/DuarDrincc',
        tags: [
          'Unity',
          'C#'
        ],
        coloring: '#135102',
        subcoloring: '#387e40',
        // maincoloring: '#5dd26a',
        tagcoloring: '#45cf1d'
      },
      knoledge: {
        name: 'Knoledge',
        desc: 'Student CRUD for web programming project.',
        img: 'knoledge.png',
        link: 'https://github.com/Itsakaseru/Knoledge',
        tags: [
          'PHP',
          'CI3'
        ],
        coloring: '#5b3716',
        subcoloring: '#895320',
        // maincoloring: '#ccae92',
        tagcoloring: '#ad7d50'
      },
      matematirun: {
        name: 'MateMatirun',
        desc: "A math learning based rhythm game.",
        img: 'matematirun.png',
        link: 'https://github.com/2haus/MateMatirun',
        tags: [
          'Unity',
          'C#'
        ],
        coloring: '#1a3753',
        subcoloring: '#28527c',
        // maincoloring: '#809db9',
        tagcoloring: '#567ca1'
      },
      routine: {
        name: 'Routine',
        desc: 'Daily routine wellbeing application.',
        img: 'routine.png',
        link: 'https://github.com/reaperastrea/Routine',
        tags: [
          'Android',
          'Java'
        ],
        coloring: '#7e944c',
        subcoloring: '#90aa56',
        // maincoloring: '#e9f2d3',
        tagcoloring: '#a2bf61'
      },
      worldroller: {
        name: 'World Roller',
        desc: 'A game to roll your way through the island.',
        img: 'worldroller.png',
        link: 'https://github.com/shigeru22/world-roller',
        tags: [
          'Unity',
          'C#'
        ],
        coloring: '#265e7d',
        subcoloring: '#3584ae',
        // maincoloring: '#44a9e0',
        tagcoloring: '#2e7195'
      },
      opencardmaker: {
        name: 'OpenCardMaker',
        desc: 'UnityParrot ONGEKI save data editor.',
        img: 'opencardmaker.png',
        link: 'https://github.com/shigeru22/ong-opencardmaker',
        tags: [
          'WPF',
          'C#'
        ],
        coloring: '#7e0808',
        subcoloring: '#b00b0b',
        // maincoloring: '#fe9f9f',
        tagcoloring: '#fc2727'
      }
    }
  }
}
</script>