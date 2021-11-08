<template>
<div :class="`flex flex-col md:w-175 lg:w-240 ${ portrait ? `h-portrait-mobile my-16` : `max-h-72 md:max-h-112 lg:max-h-160` } mx-4 px-8 py-12 bg-white rounded-lg shadow-lg gap-y-6`">
	<img :src="require(`@/assets/${ img }`)" class="h-full mx-auto" />
	<p class="text-center text-semibold text-xl md:text-2xl" :style="{ 'color': color }">{{ description }}</p>
</div>
</template>

<style scoped>
.h-portrait-mobile {
	height: calc(100vh - theme("height.36"));
}
</style>

<script lang="ts">
export default {
	name: "ScreenshotModal",
	props: {
		img: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			default: "Screenshot"
		},
		description: {
			type: String,
			default: "Screenshot"
		},
		portrait: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: "#137547"
		}
	}
};
</script>