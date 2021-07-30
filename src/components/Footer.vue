<template>
  <div class="absolute bottom-0 p-8 pl-12 pr-12 w-full flex justify-between">
    <p class="inline">Profile picture by <a :href="pfp">peko</a>.</p>
    <div class="inline">
      <a :href="github">Github</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
  props: {
    github: String,
    pfp: String
  }
}
</script>