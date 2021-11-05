<template>
<div class="flex m-12 md:m-0 justify-center items-center">
	<profile-card :alt="nickname" :name="name" :occupation="occupation" />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileCard from "@/components/home/ProfileCard.vue";
import Common from "@/common.json";

export default defineComponent({
	name: "Home",
	components: {
		ProfileCard
	},
	data: () => {
		return {
			nickname: Common.nickname,
			name: Common.name,
			occupation: Common.occupation
		};
	}
});
</script>
