<template>
  <a v-bind:href="link" class="w-72 h-full p-6 pt-12 pb-12 bg-white transform" :style="{ 'background-color': maincoloring }">
    <div class="h-full">
      <div>
        <ExternalLinkIcon class="absolute top-6 right-6 h-4 text-green-800 hover:text-green-600" />
      </div>
      <div>
        <img :src="require(`@/assets/portofolio/${img}`)" class="w-32 rounded-xl mx-auto my-auto" />
        <div class="leading-4 pt-4">
          <h2 class="text-cardhead text-black text-center font-medium" :style="{ 'color': coloring }">{{ name }}</h2><br />
          <p class="text-carddesc text-gray-700 text-center font-semibold" :style="{ 'color': subcoloring }">{{ desc }}</p>
        </div>
      </div>
    </div>
    <div class="h-12">
      <div class="absolute inset-x-0 bottom-8 flex gap-2 justify-center">
        <div v-for="tag in tags" :key="tag" class="text-white rounded-2xl pl-3 pr-3 pt-1 pb-1 bg-green-400 text-sm" :style="{ 'background-color': tagcoloring }">
          {{ tag }}
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { ExternalLinkIcon } from "@heroicons/vue/outline"

export default {
  name: "PortofolioCard",
  components: {
    ExternalLinkIcon
  },
  props: {
    img: String,
    name: String,
    desc: String,
    link: String,
    tags: [],
    bgcolor: String,
    coloring: String,
    subcoloring: String,
    maincoloring: String,
    tagcoloring: String
  }
}
</script>
