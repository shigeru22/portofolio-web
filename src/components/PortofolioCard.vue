<template>
  <a v-bind:href="link" class="w-72 h-auto border-4 rounded-xl p-4 border-green-600 bg-white">
    <div class="flex h-full gap-2">
      <img :src="require(`@/assets/portofolio/${img}`)" class="h-16 mr-2 my-auto" />
      <div class="leading-4 my-auto">
        <h2 class="text-cardhead text-green-800 font-medium">{{ name }}</h2><br />
        <p class="text-carddesc text-green-700 font-semibold">{{ desc }}</p>
        <div class="flex pt-4 gap-2">
          <div v-for="tag in tags" :key="tag" class="bg-green-500 text-white rounded-2xl pl-3 pr-3 pt-1 pb-1 text-sm">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
export default {
  name: "PortofolioCard",
  props: {
    img: String,
    name: String,
    desc: String,
    link: String,
    tags: []
  }
}
</script>
