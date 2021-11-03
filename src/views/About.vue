<template>
<div class="flex flex-col main-body">
	<div class="flex flex-grow justify-center items-center">
		<quote-card />
	</div>
	<Footer class="w-full" />
	<div class="absolute bottom-16 left-0 -z-10">
		<img src="@/assets/shigeru.svg" :alt="Shigeru" class="w-140 h-140 opacity-10 transform rotate-12" />
	</div>
</div>
</template>

<style scoped>
.main-body {
	height: calc(100vh - theme("height.24"));
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import QuoteCard from "@/components/about/QuoteCard.vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
	name: "About",
	components: {
		QuoteCard,
		Footer
	}
});
</script>