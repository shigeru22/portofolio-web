<template>
  <div class="w-72 h-auto border-4 rounded-xl p-4 border-green-600 bg-white">
    <div class="flex">
      <img :src="require(`@/assets/portofolio/${img}`)" class="h-16 mr-2 my-auto" />
      <div class="ml-2 leading-4">
        <h2 class="text-cardhead text-green-800 font-medium">{{ name }}</h2><br />
        <p class="text-carddesc text-green-700 font-semibold">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PortofolioCard",
  props: {
    img: String,
    name: String,
    desc: String
  }
}
</script>
