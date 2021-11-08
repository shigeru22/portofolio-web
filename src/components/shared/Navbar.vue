<template>
<transition name="fade">
	<dim-background v-if="opened" class="z-20" @close-modal="opened = false">
		<transition name="fade">
			<navbar-modal	v-if="opened" :links="links" @close-modal="opened = false" />
		</transition>
	</dim-background>
</transition>
<div class="absolute top-0 flex justify-between w-full h-24 px-12 bg-white">
	<div class="flex place-items-center space-x-4">
		<img src="@/assets/icon.svg" :alt="nickname" class="w-10 h-10" />
		<h1 class="text-2xl font-bold text-green-vlight hover:text-green-dark hidden md:block transition-colors">Shigeru's Portofolio</h1>
	</div>
	<div class="flex items-center">
		<div class="hidden md:flex space-x-10">
			<router-link v-for="link in links" :key="link.name" :to="link.href" class="router-inactive" active-class="router-active">
				<font-awesome-icon :icon="[ link.faType, link.faIcon ]" class="m-auto" />
			</router-link>
		</div>
		<div class="md:hidden" @click="opened = true">
			<font-awesome-icon :icon="[ 'fas', 'bars' ]" class="m-auto router-inactive" />
		</div>
	</div>
</div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import DimBackground from "@/components/shared/DimBackground.vue";
import NavbarModal from "@/components/shared/NavbarModal.vue";
import ILinkItem from "@/types/link-item";

export default {
	name: "Navbar",
	components: {
		DimBackground,
		NavbarModal
	},
	data: () => {
		return {
			opened: false
		};
	},
	props: {
		title: {
			type: String,
			required: true
		},
		nickname: {
			type: String,
			default: "Icon"
		},
		icon: {
			type: String,
			default: "@/assets/icon.svg"
		},
		links: {
			type: Object as () => ILinkItem[],
			required: true
		}
	}
};
</script>