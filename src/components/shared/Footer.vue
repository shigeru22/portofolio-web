<template>
<div class="flex justify-between w-full h-24 px-12">
	<p class="my-auto font-bold text-2xl text-green-vlight">
		Profile picture by
		<a :href="imglink" class="text-green-light hover:text-green-dark transition-colors">{{ pfpcreator }}</a>.
	</p>
	<div class="flex space-x-10">
		<a v-for="link in links" :key="link.name" :href="link.href" class="flex m-auto text-3xl text-green-vlight hover:text-green-dark transition-colors rounded-full">
			<font-awesome-icon :icon="[ link.faType, link.faIcon ]" />
		</a>
	</div>
</div>
</template>

<script lang="ts">
import ILinkItem from "@/types/link-item";
import Common from "@/common.json";

export default {
	name: "Footer",
	data: () => {
		return {
			imglink: Common.img.link,
			pfpcreator: Common.img.creator,
			links: Common.footer.links as ILinkItem[]
		};
	}
};
</script>