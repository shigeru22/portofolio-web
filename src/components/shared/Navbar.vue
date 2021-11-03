<template>
<div class="absolute top-0 flex justify-between w-full h-24 px-12 bg-white">
	<div class="flex place-items-center space-x-4">
		<img src="../../assets/shigeru.svg" alt="Shigeru" class="w-10 h-10" />
		<h1 class="text-2xl font-bold text-green-vlight hover:text-green-dark transition-colors">Shigeru's Portofolio</h1>
	</div>
	<div class="flex space-x-10">
		<router-link v-for="link in links" :key="link.name" :to="link.href" class="router-inactive" active-class="router-active">
			<font-awesome-icon :icon="[ link.faType, link.faIcon ]" class="m-auto" />
		</router-link>
	</div>
</div>
</template>

<script lang="ts">
import ILinkItem from "@/types/link-item";
import Common from "@/common.json";

export default {
	name: "Navbar",
	data: () => {
		return {
			links: Common.navbar.links as ILinkItem[]
		};
	}
};
</script>