<template>
<navbar :active="home" :links="links" />
<router-view />
</template>

<script lang="ts">
import Navbar from "@/components/shared/Navbar.vue";

export default {
	components: {
		Navbar
	},
	data: () => {
		return {
			links: [
				{ name: "Home", faIcon: "home", href: "/" },
				{ name: "Portofolio", faIcon: "table", href: "/portofolio" },
				{ name: "About", faIcon: "id-card", href: "/about" }
			]
		};
	}
};
</script>