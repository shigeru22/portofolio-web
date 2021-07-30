<template>
  <div class="mt-4 flex justify-center font-sans">
    <router-link class="p-4 pl-6 pr-6 border-b-2 border-green-400 hover:border-green-300" v-for="link in links" :key="link.link" :to="link.link" active-class="border-green-600">{{ link.name }}</router-link>
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