<template>
<navbar :title="title" :nickname="nickname" :links="links" />
<router-view class="mt-24" />
</template>

<script lang="ts">
import Navbar from "@/components/shared/Navbar.vue";
import ILinkItem from "@/types/link-item";
import Common from "@/common.json";

export default {
	components: {
		Navbar
	},
	data: () => {
		return {
			title: Common.title,
			nickname: Common.nickname,
			links: Common.navbar.links as ILinkItem[]
		};
	}
};
</script>