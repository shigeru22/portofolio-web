<template>
<div class="flex flex-col w-240 mx-4 px-8 py-12 bg-white rounded-lg shadow-lg gap-y-6">
	<img :src="require(`@/assets/${ img }`)" class="h-120 mx-auto" />
	<p class="text-center text-semibold text-2xl" :style="{ 'color': color }">{{ description }}</p>
</div>
</template>

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
		color: {
			type: String,
			default: "#137547"
		}
	}
};
</script>