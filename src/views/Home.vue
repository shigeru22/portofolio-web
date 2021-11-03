<template>
<div class="flex flex-col main-body">
	<div class="flex flex-grow justify-center items-center">
		<profile-card :alt="nickname" :name="name" :occupation="occupation" />
	</div>
	<Footer :imgcreator="imgcreator" :imglink="imglink" :links="links" class="w-full" />
</div>
</template>

<style scoped>
.main-body {
	height: calc(100vh - theme("height.24"));
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileCard from "@/components/home/ProfileCard.vue";
import Footer from "@/components/shared/Footer.vue";
import ILinkItem from "@/types/link-item";
import Common from "@/common.json";

export default defineComponent({
	name: "Home",
	components: {
		ProfileCard,
		Footer
	},
	data: () => {
		return {
			nickname: Common.nickname,
			name: Common.name,
			occupation: Common.occupation,
			imgcreator: Common.img.creator,
			imglink: Common.img.link,
			links: Common.footer.links as ILinkItem[]
		};
	}
});
</script>
