<template>
<div class="flex flex-col main-body">
	<div class="flex flex-grow justify-center items-center">
		<profile-card />
	</div>
	<Footer class="w-full" />
</div>
</template>

<style scoped>
.main-body {
	height: calc(100vh - theme("height.24"));
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileCard from "@/components/home/ProfileCard.vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
	name: "Home",
	components: {
		ProfileCard,
		Footer
	}
});
</script>
