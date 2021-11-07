<template>
<navbar :title="navbar.title" :nickname="navbar.nickname" :links="navbar.links" />
<div class="flex flex-col main-body mt-24">
	<router-view class="flex-grow mx-12" />
	<Footer :imgcreator="footer.imgcreator" :imglink="footer.imglink" :links="footer.links" />
</div>
</template>

<style scoped>
.main-body {
	min-height: calc(100vh - theme("height.24"));
}
</style>

<script lang="ts">
import Navbar from "@/components/shared/Navbar.vue";
import Footer from "@/components/shared/Footer.vue";
import ILinkItem from "@/types/link-item";
import Common from "@/common.json";

export default {
	components: {
		Navbar,
		Footer
	},
	data: () => {
		return {
			navbar: {
				title: Common.title,
				nickname: Common.nickname,
				links: Common.navbar.links as ILinkItem[]
			},
			footer: {
				imgcreator: Common.img.creator,
				imglink: Common.img.link,
				links: Common.footer.links as ILinkItem[]
			}
		};
	}
};
</script>