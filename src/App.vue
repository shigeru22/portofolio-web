<template>
  <div class="flex flex-col h-screen bg-green-50">
    <Navbar v-bind:links="pages" class="flex" />
    <div class="flex flex-1 overflow-auto container mx-auto justify-center">
      <router-view />
    </div>
    <Footer v-bind="links" class="flex" />
  </div>
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
        twitter: "https://twitter.com/shigeru_22",
        linkedin: "https://www.linkedin.com/in/jeremy-yonathan/",
        github: "https://github.com/shigeru22",
        pfp: "https://safebooru.org/index.php?page=post&s=view&id=1612415"
      }
    }
  }
}
</script>