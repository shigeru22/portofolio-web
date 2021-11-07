<template>
<div class="flex flex-col justify-center items-start md:items-center w-full md:w-75 h-25 md:h-100 p-8 bg-white shadow-lg rounded-lg space-y-4 transform transition-transform hover:scale-105">
	<div class="flex items-center md:block w-full h-4/5 text-center space-x-6 md:space-x-0 md:space-y-4">
		<img :src="require(`@/assets/${ img }`)" :alt="name" class="w-16 md:w-40 h-16 md:h-40 mx-auto" />
		<div class="flex-grow md:space-y-2">
			<h2 class="font-bold text-2xl" :style="{ color: color }">{{ name }}</h2>
			<p class="font-semibold text-lg leading-snug" :style="{ color: color, opacity: 0.85 }">{{ desc }}</p>
		</div>
	</div>
</div>
</template>

<script lang="ts">
export default {
	name: "ProjectCard",
	props: {
		img: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: "#137547"
		}
	}
};
</script>