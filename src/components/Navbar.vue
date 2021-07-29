<template>
  <div class="mt-8 flex justify-center font-sans">
    <router-link class="pl-6 pr-6 pt-4 pb-4 border-b-2 border-green-400" v-for="link in links" :key="link.link" :to="link.link" active-class="border-green-600">{{ link.name }}</router-link>
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