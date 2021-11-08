<template>
<div class="flex flex-col justify-center items-center w-100 h-105 p-8 bg-white shadow-lg rounded-lg space-y-4">
	<img src="@/assets/profpic.jpg" :alt="alt" class="w-56 h-auto border-4 border-green-vlight rounded-full" />
	<div>
		<h1 class="text-center font-bold text-3xl md:text-4xl text-green-dark">{{ name }}</h1>
		<h3 class="text-center font-semibold text-xl md:text-2xl text-green">{{ occupation }}</h3>
	</div>
</div>
</template>

<script lang="ts">
export default {
	name: "ProfileCard",
	props: {
		img: {
			type: String,
			default: "@/assets/profpic.jpg"
		},
		alt: {
			type: String,
			default: "Profile picture"
		},
		name: {
			type: String,
			required: true
		},
		occupation: {
			type: String,
			required: true
		}
	}
};
</script>