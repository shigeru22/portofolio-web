<template>
<div class="w-full max-w-xs m-16 p-8 bg-white shadow-lg rounded-lg">
	<div class="flex flex-col h-full text-center overflow-y-auto gap-y-2">
		<router-link
			v-for="link in links"
			:key="link.name"
			:to="link.href"
			class="modal-router-inactive"
			active-class="modal-router-active"
			@click="$emit('close-modal')"
		>
			{{ link.name }}
		</router-link>
	</div>
</div>
</template>

<script lang="ts">
import ILinkItem from "@/types/link-item";

export default {
	name: "NavbarModal",
	props: {
		links: {
			type: Object as () => ILinkItem[],
			required: true
		}
	}
};
</script>