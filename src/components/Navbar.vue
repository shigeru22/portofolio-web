<template>
  <div class="w-screen flex justify-center font-heading text-base bg-green-400">
    <router-link class="transition duration-300 p-4 pl-6 pr-6 text-white hover:bg-green-600" v-for="link in links" :key="link.link" :to="link.link" active-class="text-black bg-green-800">{{ link.name }}</router-link>
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