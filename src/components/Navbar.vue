<template>
  <div class="mt-4 flex justify-center font-heading text-base">
    <router-link class="p-4 pl-6 pr-6 border-b-2 text-blue-800 border-green-400 hover:text-blue-900 hover:border-green-600" v-for="link in links" :key="link.link" :to="link.link" active-class="text-black border-green-800">{{ link.name }}</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  props: {
    links: []
  }
}
</script>