<template>
<navbar />
<router-view class="mt-24" />
</template>

<script lang="ts">
import Navbar from "@/components/shared/Navbar.vue";

export default {
	components: {
		Navbar
	}
};
</script>