<template>
  <Navbar v-bind:links="pages" />
  <router-view class="mt-8 flex box-border justify-center" />
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data: () => {
    return {
      pages: [
        { name: "Home", link: "/" },
        { name: "Portofolio", link: "/portofolio" },
        { name: "About", link: "/about" }
      ],
      github: "https://github.com/shigeru22",
      pfp: "#"
    }
  }
}
</script>

<style>
  body {
    background-color: #def9dc;
  }
</style>
