<template>
<div @click.self="$emit('close-modal')" class="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-10">
	<img :src="require(`@/assets/${ img }`)" class="max-w-4xl" />
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
		}
	}
};
</script>