<template>
<div class="flex flex-col w-240 px-8 py-12 bg-white rounded-lg shadow-lg gap-y-6">
	<img :src="require(`@/assets/${ img }`)" class="h-120 mx-auto" />
	<p class="text-center text-semibold text-2xl text-green-dark">{{ description }}</p>
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
		}
	}
};
</script>