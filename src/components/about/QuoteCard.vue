<template>
<div class="flex flex-col min-w-56 max-w-175 min-h-56 md:max-h-138 mx-2 p-8 md:p-12 bg-white shadow-lg rounded-lg space-y-6">
	<div class="flex justify-between">
		<font-awesome-icon :icon="[ 'fas', 'quote-right' ]" class="text-5xl xl:text-6xl text-green" />
		<img src="@/assets/profpic.jpg" :alt="alt" class="w-12 h-12 border-2 border-green-dark rounded-full" />
	</div>
	<p class="font-semibold text-lg md:text-xl text-green-vdark whitespace-pre-wrap">{{ quote }}</p>
	<small class="font-semibold text-lg text-green">{{ subquote }}</small>
</div>
</template>

<script lang="ts">
export default {
	name: "QuoteCard",
	props: {
		img: {
			type: String,
			default: "@/assets/profpic.jpg"
		},
		alt: {
			type: String,
			default: "Profile picture"
		},
		quote: {
			type: String,
			required: true
		},
		subquote: {
			type: String,
			default: ""
		}
	}
};
</script>