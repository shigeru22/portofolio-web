<template>
<div class="home">
	<Motion :value="offset" tag="img">
		<img v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { duration: 500 } }" alt="Vue logo" src="../assets/logo.png" class="mx-auto">
	</Motion>
	<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
	name: "Home",
	components: {
		HelloWorld
	}
});
</script>
