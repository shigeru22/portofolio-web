<template>
<footer class="flex flex-col md:flex-row justify-between w-full h-auto md:h-24 py-4 md:py-0 gap-y-4">
	<p class="my-auto font-bold text-center md:text-left text-xl md:text-2xl text-green-vlight">
		Profile picture by
		<a :href="imglink" class="text-green-light hover:text-green-dark transition-colors">{{ imgcreator }}</a>.
	</p>
	<div class="flex mx-auto md:mx-0 gap-x-10">
		<a v-for="link in links" :key="link.name" :href="link.href" target="_blank" class="flex md:m-auto text-3xl text-green-vlight hover:text-green-dark transition-colors rounded-full">
			<font-awesome-icon :icon="[ link.faType, link.faIcon ]" />
		</a>
	</div>
</footer>
</template>

<script lang="ts">
import ILinkItem from "@/types/link-item";

export default {
	name: "Footer",
	props: {
		imgcreator: {
			type: String,
			required: true
		},
		imglink: {
			type: String,
			required: true
		},
		links: {
			type: Object as () => ILinkItem[],
			required: true
		}
	}
};
</script>