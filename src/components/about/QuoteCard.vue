<template>
<div class="flex flex-col min-w-56 max-w-175 min-h-56 max-h-138 p-12 bg-white shadow-lg rounded-lg space-y-6">
	<div class="flex justify-between">
		<font-awesome-icon :icon="[ 'fas', 'quote-right' ]" class="text-6xl text-green" />
		<img src="@/assets/profpic.jpg" :alt="name" class="w-12 h-12 border-2 border-green-dark rounded-full" />
	</div>
	<p class="font-semibold text-xl text-green-vdark whitespace-pre-wrap">{{ quote }}</p>
	<small class="font-semibold text-lg text-green">{{ subquote }}</small>
</div>
</template>

<script lang="ts">
import Common from "@/common.json";

export default {
	name: "QuoteCard",
	data: () => {
		return {
			name: Common.name,
			quote: Common.quote.about,
			subquote: Common.quote.subquote
		};
	}
};
</script>