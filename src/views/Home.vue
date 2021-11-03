<template>
<p>Hello</p>
<div class="absolute bottom-0 w-full">
	<Footer />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
	name: "Home",
	components: {
		Footer
	}
});
</script>
