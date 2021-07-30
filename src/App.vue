<template>
  <Navbar v-bind:links="pages" />
  <router-view class="mt-8 absolute flex box-border justify-center" />
  <Footer v-bind="links" />
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => {
    return {
      pages: [
        { name: "Home", link: "/" },
        { name: "Portofolio", link: "/portofolio" },
        { name: "About", link: "/about" }
      ],
      links: {
        github: "https://github.com/shigeru22",
        pfp: "https://safebooru.org/index.php?page=post&s=view&id=1612415"
      }
    }
  }
}
</script>

<style>
  body {
    background-color: #def9dc;
  }
</style>
