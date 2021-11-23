<template>
<div class="flex flex-grow justify-center items-center">
	<quote-card :alt="nickname" :quote="quote" :subquote="subquote" />
</div>
<div class="fixed bottom-16 left-0 -z-10">
	<img src="@/assets/icon.svg" :alt="nickname" class="w-screen lg:max-w-xs xl:max-w-md opacity-10 transform rotate-12" />
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
import ILinkItem from "@/types/link-item";
import Common from "@/common.json";

export default defineComponent({
	name: "About",
	components: {
		QuoteCard
	},
	data: () => {
		return {
			nickname: Common.nickname,
			quote: Common.quote.about,
			subquote: Common.quote.subquote,
			imgcreator: Common.img.creator,
			imglink: Common.img.link,
			links: Common.footer.links as ILinkItem[]
		};
	}
});
</script>